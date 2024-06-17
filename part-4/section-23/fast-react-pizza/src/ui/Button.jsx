import { Link } from "react-router-dom"

function Button({children, disabled, to, type}) {
  const base = 'bg-sky-400 uppercase font-semibold text-stone-800 inline-block tracking-wide rounded-full hover:bg-sky-300 transition-colors duration-300 focus:outline-none focus:ring focus:ring-sky-300 focus:bg-sky-300 focus:ring-offset-2 active:bg-stone-300 disabled:cursor-not-allowed';

  const styles = {
    primary: base + ' px-4 py-3 md:px-6 md:py-4',
    small: base + ' px-4 py-2 md:px-5 md:py-2.5 text-xs'
  }

  if(to) return <Link to={to} className={styles[type]}>{children}</Link>
  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  )
}

export default Button
