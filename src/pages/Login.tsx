import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate, Link } from "react-router-dom";
import { useAuthStore } from "../store/authStore";
import LoginForm from "../components/forms/LoginForm";
import GoogleOAuthButton from "../components/auth/GoogleOAuthButton";

function Login() {
  const { isAuthenticated: auth0Authenticated, user: auth0User, isLoading } = useAuth0();
  const navigate = useNavigate();
  const loginWithOAuth = useAuthStore((state) => state.loginWithOAuth);

  // Handle Auth0 authentication
  useEffect(() => {
    if (auth0Authenticated && auth0User) {
      loginWithOAuth({
        email: auth0User.email || '',
        name: auth0User.name || 'User',
        picture: auth0User.picture,
      });
      navigate('/');
    }
  }, [auth0Authenticated, auth0User, loginWithOAuth, navigate]);

  if (isLoading) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 -right-40 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute -bottom-40 left-1/3 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Glassmorphism card */}
      <div className="relative z-10 w-full max-w-md mx-4">
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8 md:p-12">
          {/* Logo/Brand section */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl mb-4 shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Welcome Back</h1>
            <p className="text-white/80 text-sm md:text-base">Sign in to access your dashboard</p>
          </div>

          {/* Google OAuth Button */}
          <GoogleOAuthButton />

          {/* Divider */}
          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-white/20"></div>
            <span className="text-white/60 text-sm font-medium">OR</span>
            <div className="flex-1 h-px bg-white/20"></div>
          </div>

          {/* Login Form */}
          <LoginForm />

          {/* Additional links */}
          <div className="mt-6 text-center">
            <p className="text-white/70 text-sm">
              Don't have an account?{' '}
              <Link to="/signup" className="text-white font-semibold hover:underline transition-all">
                Sign up
              </Link>
            </p>
          </div>

          {/* Demo credentials hint */}
          <div className="mt-8 pt-6 border-t border-white/20">
            <p className="text-white/60 text-xs text-center mb-2">Demo Credentials (Email/Password):</p>
            <div className="bg-white/5 rounded-xl p-3 text-center">
              <p className="text-white/90 text-sm font-mono">test@gmail.com</p>
              <p className="text-white/90 text-sm font-mono">123456</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
