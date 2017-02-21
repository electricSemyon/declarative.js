const humanize = (text) => {
  const wordArr = text.split('_');
  wordArr[0] = wordArr[0].charAt(0).toUpperCase() + wordArr[0].slice(1);

  return wordArr.join(' ');
};

export default humanize;
