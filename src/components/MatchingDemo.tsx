import { useEffect, useId, useMemo, useRef, useState, type FormEvent } from 'react'
import { budgets, mentors, students, taskTypes, timeframes } from '../data/content'
import { matchStudents, type MatchCriteria } from '../lib/matching'
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
              <span className="block font-medium">{option.label}</span>
              {option.hint && <span className="block text-sm text-muted">{option.hint}</span>}
            </span>
          </label>
        ))}
      </div>
    </fieldset>
  )
}

const labelFor = <T extends string>(options: Choice<T>[], id: T) => options.find((o) => o.id === id)?.label ?? ''

export function MatchingDemo() {
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

  const taskType = taskTypes.find((t) => t.id === criteria.taskType)!
  const timeframeLabel = labelFor(timeframes, criteria.timeframe)
  const budgetLabel = labelFor(budgets, criteria.budget).toLowerCase()

  const results = useMemo(
    () =>
      matchStudents(criteria, students, mentors, {
        taskNoun: taskType.noun,
        timeframe: timeframeLabel,
        budget: budgetLabel,
      }),
    [criteria, taskType.noun, timeframeLabel, budgetLabel],
  )

  // Flytt fokus til resultatene etter innsending, så tastatur- og skjermleserbrukere havner riktig.
  useEffect(() => {
    if (focusRequest > 0) resultsHeadingRef.current?.focus()
  }, [focusRequest])

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setHasSubmitted(true)
    setFocusRequest((n) => n + 1)
  }

  const update = <K extends keyof MatchCriteria>(key: K) => (value: MatchCriteria[K]) =>
    setCriteria((current) => ({ ...current, [key]: value }))

  return (
    <Section
      id="matching"
      eyebrow="Prøv matching"
      title="Beskriv oppdraget, og se hvem vi kunne foreslått"
      intro="En forenklet demo. I den ekte tjenesten gjør vi matchingen selv, etter en kort samtale med dere. Profilene under er fiktive."
    >
      <div className="grid gap-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-10">
        <form onSubmit={handleSubmit} className="space-y-6 self-start rounded-lg border border-line bg-white p-5 sm:p-6">
          <h3 className="text-xl font-semibold">Ditt oppdrag</h3>
          <ChoiceGroup
            legend="Type oppdrag"
            name="oppdragstype"
            options={taskTypes}
            value={criteria.taskType}
            onChange={update('taskType')}
          />
          <ChoiceGroup
            legend="Tidsramme"
            name="tidsramme"
            options={timeframes}
            value={criteria.timeframe}
            onChange={update('timeframe')}
          />
          <ChoiceGroup
            legend="Budsjett"
            name="budsjett"
            options={budgets}
            value={criteria.budget}
            onChange={update('budget')}
          />
          <div>
            <label htmlFor={descriptionId} className="font-semibold">
              Kort beskrivelse <span className="font-normal text-muted">(valgfritt)</span>
            </label>
            <textarea
              id={descriptionId}
              rows={3}
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              placeholder="F.eks. «Vi trenger en ny nettside der kundene kan bestille time.»"
              aria-describedby={`${descriptionId}-hint`}
              className="mt-2 block w-full rounded-md border border-line bg-white px-3 py-2 text-base placeholder:text-muted/80"
            />
            <p id={`${descriptionId}-hint`} className="mt-1.5 text-sm text-muted">
              Teksten blir værende i nettleseren din og sendes ikke noe sted.
            </p>
          </div>
          <button type="submit" className={`${buttonPrimary} w-full`}>
            Vis foreslåtte studenter
          </button>
        </form>

        <div>
          <h3 ref={resultsHeadingRef} tabIndex={-1} className="text-xl font-semibold">
            Foreslåtte studenter
          </h3>
          <p aria-live="polite" className="mt-2 text-muted">
            {hasSubmitted
              ? `${results.length} forslag for ${taskType.label.toLowerCase()}, ${timeframeLabel.toLowerCase()}, ${budgetLabel}.`
              : 'Velg type oppdrag, tidsramme og budsjett, og trykk «Vis foreslåtte studenter».'}
          </p>

          {hasSubmitted ? (
            <>
              {description.trim() && (
                <p className="mt-4 rounded-md border border-line bg-white p-4 text-sm">
                  <span className="font-semibold">Din beskrivelse:</span> «{description.trim()}»
                </p>
              )}
              <p className="mt-4 rounded-md bg-accent-soft p-4 text-sm">
                <span className="font-semibold">Foreslått pakke:</span> {taskType.suggestedPackage}
              </p>
              <ul className="mt-6 space-y-5">
                {results.map((result) => (
                  <li key={result.student.id}>
                    <StudentCard result={result} />
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <div className="mt-6 rounded-lg border border-dashed border-line p-8 text-center text-muted">
              Her dukker 2–3 fiktive studentprofiler opp, med fag, ferdigheter, tidligere case og mentor.
            </div>
          )}
        </div>
      </div>
    </Section>
  )
}
