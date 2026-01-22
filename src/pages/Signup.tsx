import { Link } from "react-router-dom";
import SignupForm from "../components/forms/SignupForm";
import GoogleOAuthButton from "../components/auth/GoogleOAuthButton";

function Signup() {
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
              </svg>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Create Account</h1>
            <p className="text-white/80 text-sm md:text-base">Join us and start managing your dashboard</p>
          </div>

          {/* Google OAuth Button */}
          <GoogleOAuthButton />

          {/* Divider */}
          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-white/20"></div>
            <span className="text-white/60 text-sm font-medium">OR</span>
            <div className="flex-1 h-px bg-white/20"></div>
          </div>

          {/* Signup Form */}
          <SignupForm />

          {/* Additional links */}
          <div className="mt-6 text-center">
            <p className="text-white/70 text-sm">
              Already have an account?{' '}
              <Link to="/login" className="text-white font-semibold hover:underline transition-all">
                Sign in
              </Link>
            </p>
          </div>

          {/* Terms and Privacy */}
          <div className="mt-8 pt-6 border-t border-white/20">
            <p className="text-white/50 text-xs text-center">
              By signing up, you agree to our{' '}
              <a href="#" className="text-white/70 hover:text-white transition-colors underline">
                Terms of Service
              </a>{' '}
              and{' '}
              <a href="#" className="text-white/70 hover:text-white transition-colors underline">
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
