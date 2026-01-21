function Navbar() {
  return (

    <nav className="sticky top-0 z-50 flex items-center justify-between px-[5%] py-4 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="flex-shrink-0 transition-transform hover:scale-105">
        <img src="/logo.png" alt="Expense Tracker Logo" className="h-[clamp(30px,5vh,50px)] object-contain" />
      </div>
      <ul className="flex items-center gap-8">
        <li>
          <a href="#" className="font-medium text-slate-600 hover:text-indigo-600 transition-colors">Home</a>
        </li>
        <li>
          <a href="#" className="font-medium text-slate-600 hover:text-indigo-600 transition-colors">Login</a>
        </li>
        <li>
          <a href="#" className="bg-indigo-600 text-white px-5 py-2 rounded-full font-medium hover:bg-indigo-700 transition-all shadow-md hover:shadow-lg active:scale-95">Sign Up</a>
        </li>
      </ul>
    </nav>

  )
}

export default Navbar