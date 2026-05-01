export const checkValidation = (email, password) => {
  const isEmailValid =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isPasswordValid =
    /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/.test(
      password,
    );

  if (!isEmailValid) return "Invalid Email";
  if (!isPasswordValid) return "Invalid Password";
  return null ;
};
