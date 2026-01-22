export async function loginAction(
  prevState: { error: string | null; success?: boolean },
  formData: FormData
) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  // Import is done dynamically to avoid issues with server actions
  const { useAuthStore } = await import("../store/authStore");
  const login = useAuthStore.getState().login;

  const success = login(email, password);

  if (!success) {
    return { error: "Invalid credentials", success: false };
  }

  return { error: null, success: true };
}