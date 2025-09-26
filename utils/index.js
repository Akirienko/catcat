// name validation
export const isValidLengthName = (name) => {

  if (name.length < 3) {
    return 'Minimum length of name is 3 characters';
  }

  if (name.length > 15) {
    return 'Maximum length of name is 15 characters';
  }

};

export const isFirstCharacterLetter = (name) => {
  const firstChar = name.charAt(0);
  return firstChar;
}

export function generateRandomId(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}