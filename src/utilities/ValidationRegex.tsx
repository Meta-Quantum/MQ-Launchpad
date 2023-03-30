export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const dateRegex = /^(19|20)\d{2}\-(0[1-9]|1[0-2])\-([12]\d|0[1-9]|3[01])$/;
export const fileExtensionRegex = /\.(jpg|jpeg|png|pdf)$/;
export const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!-?%&<>£$;^]).{10,}$/;
export const linkRegex = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
export const tokenPriceRegex = /^\d+(\.\d{1,2})?$/;
export const tokenSupplyReegx = /^\d+$/;
export const tokenCapRegex = /^\d+(\.\d{1,2})?$/;

export const VALIDATION_REGEXES = {
  emailRegex: emailRegex,
  dateRegex: dateRegex,
  fileExtensionRegex: fileExtensionRegex,
  passwordRegex: passwordRegex,
  websiteRegex: linkRegex, 
  tokenPriceRegex: tokenPriceRegex,
  tokenSupplyRegex: tokenSupplyReegx,
  tokenCapRegex: tokenCapRegex,

};
