import { Link } from "react-router-dom"

function Button({children, disabled, to}) {
  const className='bg-sky-400 uppercase font-semibold text-stone-800 py-3 px-4 inline-block tracking-wide rounded-full hover:bg-sky-300 transition-colors duration-300 focus:outline-none focus:ring focus:ring-sky-300 focus:bg-sky-300 focus:ring-offset-2 active:bg-stone-300 disabled:cursor-not-allowed md:px-6 md:py-4'

  if(to) return <Link to={to} className={className}>{children}</Link>
  return (
    <button disabled={disabled} className={className}>
      {children}
    </button>
  )
}

export default Button
