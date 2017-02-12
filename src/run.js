const run = (n) => {
  return {
    times(callback) {
      for(let i = 0; i < n; i++) {
        callback(i);
      }
    }
  }
}

export default run;
