// utils/validate.js
export const validate = (email, password, userName,logInPage) => {
  
  const emailValidation = /^\S+@\S+\.\S+$/.test(email);
  const passwordValidation =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
      password
    );

  if (!logInPage && !userName.trim()) return "Username is required!";
  if (!emailValidation) return "Email is not valid!";
  if (!passwordValidation)
    return "Password must be 8+ chars, include uppercase, lowercase, number & special character!";

  return null;
};
