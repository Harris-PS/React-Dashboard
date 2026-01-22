import { Link, useNavigate } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import { useAuthStore } from '../../store/authStore'

function Navbar() {
  const { user, logout: zustandLogout, authType } = useAuthStore();
  const { logout: auth0Logout } = useAuth0();
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear Zustand store
    zustandLogout();

    // If using OAuth, also logout from Auth0
    if (authType === 'oauth') {
      auth0Logout({
        logoutParams: {
          returnTo: window.location.origin + '/login'
        }
      });
    } else {
      // For email/password, just navigate to login
      navigate('/login');
    }
  };

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-[5%] py-4 bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg">
      <div className="flex-shrink-0 transition-transform hover:scale-105">
        <img src="/logo.png" alt="Dashboard Logo" className="h-[clamp(30px,5vh,50px)] object-contain" />
      </div>
      <div className="flex items-center gap-6">
        {/* User Info */}
        <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-xl border border-white/20">
          {user?.picture ? (
            <img src={user.picture} alt={user.name} className="w-8 h-8 rounded-full" />
          ) : (
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
          )}
          <span className="text-white font-medium text-sm">{user?.name || 'User'}</span>
        </div>

        {/* Navigation Links */}
        <ul className="flex items-center gap-6">
          <li>
            <Link to="/" className="font-semibold text-white hover:text-white/80 transition-all text-base">
              Dashboard
            </Link>
          </li>
          <li>
            <button
              onClick={handleLogout}
              className="bg-white/20 backdrop-blur-sm text-white px-5 py-2 rounded-xl font-semibold hover:bg-white/30 transition-all shadow-md hover:shadow-lg active:scale-95 border border-white/30 flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              Logout
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar