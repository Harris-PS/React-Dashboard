export async function loginAction(
  prevState: { error: string | null },
  formData: FormData
) {
  const email = formData.get("email");
  const password = formData.get("password");

  if (email !== "test@gmail.com" || password !== "123456") {
    return { error: "Invalid credentials" };
  }

  return { error: null };
}