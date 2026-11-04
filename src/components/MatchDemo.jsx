import { useRef, useState } from 'react'
import { matchOptions, students, mentors } from '../data/content.js'
import { matchStudents } from '../lib/match.js'
import Section from './Section.jsx'
import { Button } from './Button.jsx'
import StudentProfileCard from './StudentProfileCard.jsx'

const initial = { taskType: '', timeframe: '', budget: '' }

export default function MatchDemo() {
  const [form, setForm] = useState(initial)
  const [results, setResults] = useState(null)
  const [error, setError] = useState('')
  const resultsHeading = useRef(null)

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }))

  function handleSubmit(e) {
    e.preventDefault()
    if (!form.taskType || !form.timeframe || !form.budget) {
      setError('Velg type oppdrag, tidsramme og budsjett for å se forslag.')
      setResults(null)
      return
    }
    setError('')
    setResults(matchStudents(students, form))
    // Flytt fokus til resultatene så tastatur- og skjermleserbrukere havner riktig.
    requestAnimationFrame(() => resultsHeading.current?.focus())
  }

  function handleReset() {
    setForm(initial)
    setResults(null)
    setError('')
  }

  return (
    <Section
      id="matching"
      eyebrow="Prøv selv"
      title="Beskriv oppdraget ditt"
      intro="Velg hva dere trenger, så viser vi hvilke studenter vi kunne foreslått. I en ekte tjeneste gjør vi matchingen manuelt. Dette er bare en illustrasjon."
    >
      <div className="grid gap-8 lg:grid-cols-5">
        <form
          onSubmit={handleSubmit}
          noValidate
          className="rounded-lg border border-line bg-surface p-6 lg:col-span-2"
          aria-describedby="matching-merknad"
        >
          <RadioGroup
            legend="Type oppdrag"
            name="taskType"
            options={matchOptions.taskTypes}
            value={form.taskType}
            onChange={update('taskType')}
          />
          <RadioGroup
            legend="Tidsramme"
            name="timeframe"
            options={matchOptions.timeframes}
            value={form.timeframe}
            onChange={update('timeframe')}
          />
          <RadioGroup
            legend="Budsjett"
            name="budget"
            options={matchOptions.budgets}
            value={form.budget}
            onChange={update('budget')}
          />

          <div className="mt-6">
            <label htmlFor="beskrivelse" className="font-semibold">
              Kort beskrivelse <span className="font-normal text-muted">(valgfritt)</span>
            </label>
            <textarea
              id="beskrivelse"
              rows={3}
              className="mt-2 w-full rounded-md border border-muted/50 bg-surface p-3 text-base"
              placeholder="F.eks. «Vi lanserer i Sverige i mars og trenger en kampanje på LinkedIn.»"
            />
          </div>

          {error && (
            <p role="alert" className="mt-4 rounded-md bg-notice px-3 py-2 text-sm font-medium text-notice-ink">
              {error}
            </p>
          )}

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button type="submit">Vis forslag</Button>
            <Button type="button" variant="secondary" onClick={handleReset}>
              Nullstill
            </Button>
          </div>
          <p id="matching-merknad" className="mt-4 text-sm text-muted">
            Ingenting sendes eller lagres. Alle profiler er fiktive.
          </p>
        </form>

        <div className="lg:col-span-3">
          {results === null ? (
            <div className="grid h-full min-h-48 place-items-center rounded-lg border border-dashed border-line p-6 text-center text-muted">
              <p>Foreslåtte studenter vises her når du har gjort valgene dine.</p>
            </div>
          ) : (
            <div>
              <h3 ref={resultsHeading} tabIndex={-1} className="text-lg font-semibold">
                {results.length} foreslåtte studenter
              </h3>
              <ul className="mt-4 space-y-4">
                {results.map((r) => (
                  <li key={r.student.id}>
                    <StudentProfileCard
                      student={r.student}
                      mentor={mentors.find((m) => m.id === r.student.mentorId)}
                      reasons={r.reasons}
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
