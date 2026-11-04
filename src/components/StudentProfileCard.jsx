export default function StudentProfileCard({ student, mentor, reasons, labels }) {
  const headingId = `student-${student.id}`
  return (
    <article aria-labelledby={headingId} className="rounded-lg border border-line bg-surface p-5">
      <div className="flex items-start gap-4">
        <span
          aria-hidden="true"
          className="grid h-12 w-12 flex-none place-items-center rounded-full bg-accent-soft font-semibold text-accent"
        >
          {student.initials}
        </span>
        <div className="min-w-0">
          <h4 id={headingId} className="font-semibold">
            {student.name} <span className="text-sm font-normal text-muted">{labels.fictional}</span>
          </h4>
          <p className="text-sm text-muted">
            {student.study}, {student.year}
            <span className="block">{labels.location(student.location)}</span>
          </p>
        </div>
      </div>

      <dl className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
        <div className="sm:col-span-2">
          <dt className="font-semibold">{labels.skills}</dt>
          <dd className="mt-1">
            <ul className="flex flex-wrap gap-1.5">
              {student.skills.map((s) => (
                <li key={s} className="rounded border border-line bg-paper px-2 py-0.5">
                  {s}
                </li>
              ))}
            </ul>
          </dd>
        </div>
        <div>
          <dt className="font-semibold">{labels.pastCase}</dt>
          <dd className="mt-1">
            {student.pastCase.title}{' '}
            <span className="text-muted">
              {labels.clientPrefix} {student.pastCase.client}.
            </span>{' '}
            {student.pastCase.summary}
          </dd>
        </div>
        <div>
          <dt className="font-semibold">{labels.mentor}</dt>
          <dd className="mt-1">
            {mentor.name}
            <span className="block text-muted">{mentor.role}</span>
          </dd>
        </div>
      </dl>

      {reasons.length > 0 && (
        <div className="mt-4 border-t border-line pt-3 text-sm">
          <p className="font-semibold">{labels.why}</p>
          <ul className="mt-1 list-disc pl-5 text-muted">
            {reasons.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
        </div>
      )}
    </article>
  )
}
