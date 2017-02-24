const range = (start, end, step) => {
  if(!isValid(start) || !isValid(end) || !isValid(step)) {
    throw new Error ('One of the args is not valid')
  }

  const array = [];

  for (let i = start; i < end; i += step) {
    array.push(i);
  }

  return array;
}

const isValid = (value) => {
  return (!isNaN(value));
}

export  default range;
