const ASCIIVal = (string) => {
    let count = 0;
    let val = string.toLowerCase();
    for (let i = 0; i < val.length; i++) {
      count += val.charCodeAt(i);
    }
    return count;
  };

  module.exports = {ASCIIVal};