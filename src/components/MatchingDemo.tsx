import { useEffect, useId, useMemo, useRef, useState, type FormEvent } from 'react'
import { budgets, matching, mentors, students, taskTypes, timeframes } from '../data/content'
import { fill, useLocale } from '../i18n/context'
import { matchStudents, type MatchCriteria, type MatchResult } from '../lib/matching'
import type { Choice } from '../types'
import { StudentCard } from './StudentCard'
import { Section, buttonPrimary } from './ui'

interface ChoiceGroupProps<T extends string> {
  legend: string
  name: string
  options: Choice<T>[]
  value: T
  onChange: (value: T) => void
}

function ChoiceGroup<T extends string>({ legend, name, options, value, onChange }: ChoiceGroupProps<T>) {
  const { t } = useLocale()
  return (
    <fieldset>
      <legend className="font-semibold">{legend}</legend>
      <div className="mt-2 grid gap-2">
        {options.map((option) => (
          <label
            key={option.id}
            className="flex cursor-pointer items-start gap-3 rounded-md border border-line bg-white px-3.5 py-3 hover:border-ink/40 has-checked:border-accent has-checked:bg-accent-soft"
          >
            <input
              type="radio"
              name={name}
              value={option.id}
              checked={value === option.id}
              onChange={() => onChange(option.id)}
              className="mt-0.5 size-4 shrink-0 accent-accent"
            />
            <span>
              <span className="block font-medium">{t(option.label)}</span>
              {option.hint && <span className="block text-sm text-muted">{t(option.hint)}</span>}
            </span>
          </label>
        ))}
      </div>
    </fieldset>
  )
}

const find = <T extends string, C extends Choice<T>>(options: C[], id: T) => options.find((o) => o.id === id)!

export function MatchingDemo() {
  const { t } = useLocale()
  const [criteria, setCriteria] = useState<MatchCriteria>({
    taskType: 'nettside',
    timeframe: 'en-maaned',
    budget: '15-30',
  })
  const [description, setDescription] = useState('')
  const [hasSubmitted, setHasSubmitted] = useState(false)
  const [focusRequest, setFocusRequest] = useState(0)
  const resultsHeadingRef = useRef<HTMLHeadingElement>(null)
  const descriptionId = useId()

  const taskType = find(taskTypes, criteria.taskType)
  const timeframe = find(timeframes, criteria.timeframe)
  const budget = find(budgets, criteria.budget)

  const results = useMemo(() => matchStudents(criteria, students, mentors), [criteria])

  // Flytt fokus til resultatene etter innsending, så tastatur- og skjermleserbrukere havner riktig.
  useEffect(() => {
    if (focusRequest > 0) resultsHeadingRef.current?.focus()
  }, [focusRequest])

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setHasSubmitted(true)
    setFocusRequest((n) => n + 1)
  }

  const update =
    <K extends keyof MatchCriteria>(key: K) =>
    (value: MatchCriteria[K]) =>
      setCriteria((current) => ({ ...current, [key]: value }))

  const explain = ({ fits }: MatchResult) => {
    const values = { task: t(taskType.noun), timeframe: t(timeframe.phrase), budget: t(budget.phrase) }
    const r = matching.reasons
    const reasons = [fill(t(r.taskType), values)]
    const caveats: string[] = []

    if (fits.timeframe) {
      reasons.push(criteria.timeframe === 'fleksibel' ? t(r.flexible) : fill(t(r.timeframe), values))
    } else {
      caveats.push(fill(t(r.timeframeCaveat), values))
    }
    if (fits.budget) reasons.push(fill(t(r.budget), values))
    else caveats.push(fill(t(r.budgetCaveat), values))

    return { reasons, caveats }
  }

  return (
    <Section id="matching" eyebrow={t(matching.eyebrow)} title={t(matching.title)} intro={t(matching.intro)}>
      <div className="grid gap-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-10">
        <form onSubmit={handleSubmit} className="space-y-6 self-start rounded-lg border border-line bg-white p-5 sm:p-6">
          <h3 className="text-xl font-semibold">{t(matching.formTitle)}</h3>
          <ChoiceGroup
            legend={t(matching.taskLegend)}
            name="oppdragstype"
            options={taskTypes}
            value={criteria.taskType}
            onChange={update('taskType')}
          />
          <ChoiceGroup
            legend={t(matching.timeframeLegend)}
            name="tidsramme"
            options={timeframes}
            value={criteria.timeframe}
            onChange={update('timeframe')}
          />
          <ChoiceGroup
            legend={t(matching.budgetLegend)}
            name="budsjett"
            options={budgets}
            value={criteria.budget}
            onChange={update('budget')}
          />
          <div>
            <label htmlFor={descriptionId} className="font-semibold">
              {t(matching.descriptionLabel)} <span className="font-normal text-muted">{t(matching.optional)}</span>
            </label>
            <textarea
              id={descriptionId}
              rows={3}
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              placeholder={t(matching.placeholder)}
              aria-describedby={`${descriptionId}-hint`}
              className="mt-2 block w-full rounded-md border border-line bg-white px-3 py-2 text-base placeholder:text-muted/80"
            />
            <p id={`${descriptionId}-hint`} className="mt-1.5 text-sm text-muted">
              {t(matching.descriptionHint)}
            </p>
          </div>
          <button type="submit" className={`${buttonPrimary} w-full`}>
            {t(matching.submit)}
          </button>
        </form>

        <div>
          <h3 ref={resultsHeadingRef} tabIndex={-1} className="text-xl font-semibold">
            {t(matching.resultsTitle)}
          </h3>
          <p aria-live="polite" className="mt-2 text-muted">
            {hasSubmitted
              ? fill(t(matching.summary), {
                  count: results.length,
                  task: t(taskType.phrase),
                  timeframe: t(timeframe.phrase),
                  budget: t(budget.phrase),
                })
              : t(matching.prompt)}
          </p>

          {hasSubmitted ? (
            <>
              {description.trim() && (
                <p className="mt-4 rounded-md border border-line bg-white p-4 text-sm">
                  <span className="font-semibold">{t(matching.yourDescription)}</span> {description.trim()}
                </p>
              )}
              <p className="mt-4 rounded-md bg-accent-soft p-4 text-sm">
                <span className="font-semibold">{t(matching.suggestedPackage)}</span> {t(taskType.suggestedPackage)}
              </p>
              <ul className="mt-6 space-y-5">
                {results.map((result) => (
                  <li key={result.student.id}>
                    <StudentCard result={result} {...explain(result)} />
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <div className="mt-6 rounded-lg border border-dashed border-line p-8 text-center text-muted">
              {t(matching.emptyState)}
            </div>
          )}
        </div>
      </div>
    </Section>
  )
}
