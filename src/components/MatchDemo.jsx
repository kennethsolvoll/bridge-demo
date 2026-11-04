import { useMemo, useRef, useState } from 'react'
import { useLanguage } from '../i18n.jsx'
import { matchStudents } from '../lib/match.js'
import Section from './Section.jsx'
import { Button } from './Button.jsx'
import StudentProfileCard from './StudentProfileCard.jsx'

const initial = { taskType: '', timeframe: '', budget: '' }
const groups = ['taskType', 'timeframe', 'budget']

export default function MatchDemo() {
  const { t } = useLanguage()
  const m = t.match
  const [form, setForm] = useState(initial)
  // Vi lagrer selve søket, ikke resultatet, slik at resultatene oversettes
  // med en gang hvis brukeren bytter språk.
  const [query, setQuery] = useState(null)
  const [showError, setShowError] = useState(false)
  const resultsHeading = useRef(null)

  const results = useMemo(
    () => (query ? matchStudents(t.students, query, m.reasons) : null),
    [query, t, m.reasons],
  )

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }))

  function handleSubmit(e) {
    e.preventDefault()
    if (groups.some((g) => !form[g])) {
      setShowError(true)
      setQuery(null)
      return
    }
    setShowError(false)
    setQuery({ ...form })
    // Flytt fokus til resultatene så tastatur- og skjermleserbrukere havner riktig.
    requestAnimationFrame(() => resultsHeading.current?.focus())
  }

  function handleReset() {
    setForm(initial)
    setQuery(null)
    setShowError(false)
  }

  return (
    <Section id="matching" eyebrow={m.eyebrow} title={m.title} intro={m.intro}>
      <div className="grid gap-8 lg:grid-cols-5">
        <form
          onSubmit={handleSubmit}
          noValidate
          className="rounded-lg border border-line bg-surface p-6 lg:col-span-2"
          aria-describedby="matching-merknad"
        >
          {groups.map((g) => (
            <RadioGroup
              key={g}
              legend={m.legends[g]}
              name={g}
              options={m.options[g]}
              value={form[g]}
              onChange={update(g)}
            />
          ))}

          <div className="mt-6">
            <label htmlFor="beskrivelse" className="font-semibold">
              {m.descriptionLabel} <span className="font-normal text-muted">{m.optional}</span>
            </label>
            <textarea
              id="beskrivelse"
              rows={3}
              className="mt-2 w-full rounded-md border border-muted/50 bg-surface p-3 text-base"
              placeholder={m.placeholder}
            />
          </div>

          {showError && (
            <p role="alert" className="mt-4 rounded-md bg-notice px-3 py-2 text-sm font-medium text-notice-ink">
              {m.error}
            </p>
          )}

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button type="submit">{m.submit}</Button>
            <Button type="button" variant="secondary" onClick={handleReset}>
              {m.reset}
            </Button>
          </div>
          <p id="matching-merknad" className="mt-4 text-sm text-muted">
            {m.note}
          </p>
        </form>

        <div className="lg:col-span-3">
          {results === null ? (
            <div className="grid h-full min-h-48 place-items-center rounded-lg border border-dashed border-line p-6 text-center text-muted">
              <p>{m.empty}</p>
            </div>
          ) : (
            <div>
              <h3 ref={resultsHeading} tabIndex={-1} className="text-lg font-semibold">
                {m.resultsHeading(results.length)}
              </h3>
              <ul className="mt-4 space-y-4">
                {results.map((r) => (
                  <li key={r.student.id}>
                    <StudentProfileCard
                      student={r.student}
                      mentor={t.mentors.find((mentor) => mentor.id === r.student.mentorId)}
                      reasons={r.reasons}
                      labels={m.card}
                    />
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </Section>
  )
}

function RadioGroup({ legend, name, options, value, onChange }) {
  return (
    <fieldset className="mt-6 first:mt-0">
      <legend className="font-semibold">{legend}</legend>
      <div className="mt-2 grid gap-2 sm:grid-cols-2">
        {options.map((opt) => {
          const id = `${name}-${opt.value}`
          return (
            <div key={opt.value}>
              <input
                type="radio"
                id={id}
                name={name}
                value={opt.value}
                checked={value === opt.value}
                onChange={onChange}
                className="peer sr-only"
              />
              <label
                htmlFor={id}
                className="flex min-h-11 cursor-pointer items-center rounded-md border border-muted/50 px-3 py-2 text-sm peer-checked:border-accent peer-checked:bg-accent-soft peer-checked:font-semibold peer-focus-visible:outline-3 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-accent"
              >
                {opt.label}
              </label>
            </div>
          )
        })}
      </div>
    </fieldset>
  )
}
