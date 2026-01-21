import { Link } from 'react-router-dom'

function Navbar() {
  return (

    <nav className="sticky top-0 z-50 flex items-center justify-between px-[5%] py-4 bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg">
      <div className="flex-shrink-0 transition-transform hover:scale-105">
        <img src="/logo.png" alt="Expense Tracker Logo" className="h-[clamp(30px,5vh,50px)] object-contain" />
      </div>
      <ul className="flex items-center gap-8">
        <li>
          <Link to="/" className="font-semibold text-white hover:text-white/80 transition-all text-base">Home</Link>
        </li>
        <li>
          <Link to="/login" className="font-semibold text-white hover:text-white/80 transition-all text-base">Login</Link>
        </li>
        <li>
          <a href="#" className="bg-white text-indigo-600 px-5 py-2 rounded-full font-semibold hover:bg-indigo-50 transition-all shadow-md hover:shadow-lg active:scale-95">Sign Up</a>
        </li>
      </ul>
    </nav>

  )
}

export default Navbar