import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface User {
  email: string;
  name: string;
  picture?: string; // For OAuth profile pictures
}

interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  authType: 'email' | 'oauth' | null;
  login: (email: string, password: string) => boolean;
  loginWithOAuth: (user: User) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      user: null,
      authType: null,

      login: (email: string, password: string) => {
        // Validate credentials (demo credentials)
        if (email === 'test@gmail.com' && password === '123456') {
          set({
            isAuthenticated: true,
            authType: 'email',
            user: {
              email,
              name: 'Demo User',
            },
          });
          return true;
        }
        return false;
      },

      loginWithOAuth: (user: User) => {
        set({
          isAuthenticated: true,
          authType: 'oauth',
          user,
        });
      },

      logout: () => {
        set({
          isAuthenticated: false,
          authType: null,
          user: null,
        });
      },
    }),
    {
      name: 'auth-storage', // Key in localStorage
    }
  )
);
