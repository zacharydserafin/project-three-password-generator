# project-three-password-generator

Referenced this line of code from user "Rubinous" at https://stackoverflow.com/questions/9719570/generate-random-password-string-with-requirements-in-javascript

const generatePassword = (
  passwordLength = 12,
  passwordChars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
) =>
  [...window.crypto.getRandomValues(new Uint32Array(passwordLength))]
    .map(x => passwordChars[x % passwordChars.length])
    .join('');