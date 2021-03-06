const run = (n) => {
  if ((!n || isNaN(n)) && n !== 0) {
    throw new Error('Argument is null/undefined');
  }

  return {
    times(callback) {
      for (let i = 0; i < n; i++) {
        callback(i);
      }
    },
  };
};

export default run;
