import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { loginAction } from "../../actions/auth.actions";

const initialState = { error: null };

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      className="w-full bg-white text-indigo-600 py-3.5 px-6 rounded-xl font-semibold text-base shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
    >
      {pending ? (
        <>
          <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Logging in...
        </>
      ) : (
        <>
          Sign In
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </>
      )}
    </button>
  );
}

export default function LoginForm() {
  const [state, formAction] = useActionState(loginAction, initialState);

  return (
    <form action={formAction} className="space-y-5">
      {/* Email Input */}
      <div className="relative group">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <svg className="h-5 w-5 text-white/60 group-focus-within:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
          </svg>
        </div>
        <input
          name="email"
          type="email"
          placeholder="Email address"
          required
          className="w-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 pl-12 pr-4 py-3.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/40 transition-all duration-200 hover:bg-white/15"
        />
      </div>

      {/* Password Input */}
      <div className="relative group">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <svg className="h-5 w-5 text-white/60 group-focus-within:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        </div>
        <input
          name="password"
          type="password"
          placeholder="Password"
          required
          className="w-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 pl-12 pr-4 py-3.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/40 transition-all duration-200 hover:bg-white/15"
        />
      </div>

      {/* Remember me and Forgot password */}
      <div className="flex items-center justify-between text-sm">
        <label className="flex items-center gap-2 cursor-pointer group">
          <input type="checkbox" className="w-4 h-4 rounded border-white/20 bg-white/10 text-white focus:ring-2 focus:ring-white/50 cursor-pointer" />
          <span className="text-white/80 group-hover:text-white transition-colors">Remember me</span>
        </label>
        <a href="#" className="text-white/80 hover:text-white font-medium transition-colors hover:underline">
          Forgot password?
        </a>
      </div>

      {/* Error Message */}
      {state.error && (
        <div className="bg-red-500/20 border border-red-500/50 text-white px-4 py-3 rounded-xl flex items-center gap-3 animate-shake">
          <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-sm font-medium">{state.error}</p>
        </div>
      )}

      {/* Submit Button */}
      <SubmitButton />
    </form>
  );
}