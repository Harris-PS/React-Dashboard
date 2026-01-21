function Navbar() {
  return (

    <nav className="navbar">
      <div className="logo">
        <img src="/logo.png" alt="Expense Tracker Logo" />
      </div>
      <ul className="navlist">
        <li className="navitem">Home</li>
        <li className="navitem">Login</li>
        <li className="navitem">Sign Up</li>
      </ul>
    </nav>

  )
}

export default Navbar