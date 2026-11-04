const styles = {
  primary: 'bg-accent text-white hover:bg-accent-strong border border-accent',
  secondary: 'bg-surface text-accent border border-accent hover:bg-accent-soft',
}

const base =
  'inline-flex min-h-12 items-center justify-center rounded-md px-5 py-3 text-base font-semibold transition-colors'

export function ButtonLink({ href, variant = 'primary', children }) {
  return (
    <a href={href} className={`${base} ${styles[variant]}`}>
      {children}
    </a>
  )
}

export function Button({ variant = 'primary', className = '', ...props }) {
  return <button className={`${base} ${styles[variant]} ${className}`} {...props} />
}
