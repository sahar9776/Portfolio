import { Link } from "react-router-dom"

function Logo() {
  return (
    <div className="w-auto h-full flex items-center gap-9 lg:gap-12">
      <div className="relative">
        <div className="w-6 h-6 lg:w-8 lg:h-8 rounded-full bg-black/80 absolute -top-2 left-0"></div>
        <div className="w-6 h-6 lg:w-8 lg:h-8 rounded-full bg-primary absolute -top-2 left-3 lg:left-4"></div>
      </div>

      <Link to="/" className="text-4xl lg:text-6xl font-bold text-black/80">Sahar</Link>
    </div>
  )
}

export default Logo
