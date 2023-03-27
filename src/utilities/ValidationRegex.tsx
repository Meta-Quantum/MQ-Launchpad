export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const birthdayRegex = /^(19|20)\d{2}\/(0[1-9]|1[0-2])\/([12]\d|0[1-9]|3[01])$/;
export const fileExtensionRegex = /\.(jpg|jpeg|png|pdf)$/;
export const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!-?%&<>£$;^]).{10,}$/;

export const VALIDATION_REGEXES = {
  emailRegex: emailRegex,
  birthdayRegex: birthdayRegex,
  fileExtensionRegex: fileExtensionRegex,
  passwordRegex: passwordRegex
};
