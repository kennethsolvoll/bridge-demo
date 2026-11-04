// Bond-logoen: to overlappende sirkler, der overlappet («linsen») har bakgrunnsfargen.
// evenodd-fyll gjør at snittet mellom sirklene blir et hull.
export default function Logo({ className = 'h-8 w-8' }) {
  return (
    <svg viewBox="0 0 100 100" aria-hidden="true" className={className}>
      <rect width="100" height="100" rx="22" fill="var(--color-brand)" />
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M16.3 50a21.1 21.1 0 1 0 42.2 0a21.1 21.1 0 1 0 -42.2 0z M42 50a21.1 21.1 0 1 0 42.2 0a21.1 21.1 0 1 0 -42.2 0z"
      />
    </svg>
  )
}
