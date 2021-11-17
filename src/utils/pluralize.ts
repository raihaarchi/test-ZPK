const pluralize = (num = 0, declensions: string[]) => {
  let count = +num % 100;
  if (count >= 5 && count <= 20) {
    return declensions[2];
  }
  count = count % 10;
  if (count === 1) {
    return declensions[0];
  }

  if (count >= 2 && count <= 4) {
    return declensions[1];
  }
  return declensions[2];
};

export default pluralize;
