const stringLength = (string) => {
  const { length } = string;

  if (length < 1) {
    throw new Error('String must be at least 1 character long.'); // if string is at least  char.lenght
  }

  if (length > 10) {
    throw new Error('String cannot be longer than 10 characters.'); // if string is >10 throw error
  }

  return length;
};

module.exports = stringLength;
