import { Link } from "react-router-dom"

function Button({children, disabled, to, type, onClick}) {
  const base = 'text-sm bg-sky-400 uppercase font-semibold text-stone-800 inline-block tracking-wide rounded-full hover:bg-sky-300 transition-colors duration-300 focus:outline-none focus:ring focus:ring-sky-300 focus:bg-sky-300 focus:ring-offset-2 active:bg-stone-300 disabled:cursor-not-allowed';

  const styles = {
    primary: base + ' px-4 py-3 md:px-6 md:py-4',
    small: base + ' px-4 py-2 md:px-5 md:py-2.5 text-xs',
    round: base + ' px-2.5 py-1 md:px-3.5 md:py-2 text-sm',
    secondary: 'text-sm border-2 border-stone-300 uppercase font-semibold text-stone-400 inline-block tracking-wide rounded-full hover:bg-stone-300 hover:text-stone-800 transition-colors duration-300 focus:outline-none focus:ring focus:ring-stone-200 focus:bg-stone-300 focus:ring-offset-2 focus:text-stone-800 active:bg-stone-300 disabled:cursor-not-allowed px-4 py-2.5 md:px-6 md:py-3.5',
  }

  if(to) return <Link to={to} className={styles[type]}>{children}</Link>

  if(onClick) return (
    <button onClick={onClick} disabled={disabled} className={styles[type]}>
      {children}
    </button>
  )

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  )
}

export default Button
