// name validation
export const isValidLengthName = (name) => {

  if (name.length < 3) {
    return 'Minimum length of name is 3 characters';
  }

  if (name.length > 15) {
    return 'Maximum length of name is 15 characters';
  }

};
