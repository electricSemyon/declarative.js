const keys = (obj) => {
  if(!obj || typeof obj != 'object') {
    throw new Error('Argument is not an object');
  }
  
  return Object.keys(obj);
}

export default keys;