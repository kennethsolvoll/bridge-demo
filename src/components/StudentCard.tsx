import type { MatchResult, MatchStrength } from '../lib/matching'
import { CheckIcon } from './ui'

const strengthLabel: Record<MatchStrength, { text: string; className: string }> = {
  sterk: { text: 'Sterk match', className: 'bg-accent text-white' },
  god: { text: 'God match', className: 'bg-accent-soft text-accent-strong' },
  mulig: { text: 'Mulig match', className: 'bg-paper text-muted border border-line' },
}

export function StudentCard({ result }: { result: MatchResult }) {
  const { student, mentor, strength, reasons, caveats } = result
  const label = strengthLabel[strength]

  return (
    <article aria-labelledby={`student-${student.id}`} className="rounded-lg border border-line bg-white p-5 sm:p-6">
      <div className="flex items-start gap-4">
        <div
          aria-hidden="true"
          className="flex size-12 shrink-0 items-center justify-center rounded-full bg-accent-soft font-semibold text-accent-strong"
        >
          {student.initials}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-start justify-between gap-x-3 gap-y-1">
            <h4 id={`student-${student.id}`} className="text-lg font-semibold">
              {student.name} <span className="text-sm font-normal text-muted">(fiktiv)</span>
            </h4>
            <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${label.className}`}>{label.text}</span>
          </div>
          <p className="text-sm text-muted">
            {student.study}, {student.year}. år
          </p>
        </div>
      </div>

      <dl className="mt-5 space-y-4 text-sm">
        <div>
          <dt className="font-semibold">Ferdigheter</dt>
          <dd className="mt-1.5">
            <ul className="flex flex-wrap gap-1.5">
              {student.skills.map((skill) => (
                <li key={skill} className="rounded border border-line bg-paper px-2 py-0.5">
                  {skill}
                </li>
              ))}
            </ul>
          </dd>
        </div>
        <div>
          <dt className="font-semibold">Tidligere case</dt>
          <dd className="mt-1">
            <span className="block font-medium">{student.pastCase.title}</span>
            <span className="text-muted">{student.pastCase.description}</span>
          </dd>
        </div>
        {mentor && (
          <div>
            <dt className="font-semibold">Mentor</dt>
            <dd className="mt-1 text-muted">
              <span className="text-ink">{mentor.name}</span>, {mentor.role} ({mentor.yearsOfExperience} års erfaring)
            </dd>
          </div>
        )}
      </dl>

      <div className="mt-5 border-t border-line pt-4 text-sm">
        <p className="font-semibold">Hvorfor denne profilen</p>
        <ul className="mt-2 space-y-1.5">
          {reasons.map((reason) => (
            <li key={reason} className="flex items-start gap-2">
              <CheckIcon className="mt-0.5 size-4 text-accent" />
              {reason}
            </li>
          ))}
          {caveats.map((caveat) => (
            <li key={caveat} className="flex items-start gap-2 text-warn">
              <span aria-hidden="true" className="w-4 shrink-0 text-center font-bold">
                !
              </span>
              <span>
                <span className="sr-only">Forbehold: </span>
                {caveat}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}
