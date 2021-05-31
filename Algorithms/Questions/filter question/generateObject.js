const findASCII = require("./findASCII");

const generateObject = (array) => {
    let val = 0;
    let arr = [];
    for (let i = 0; i < array.length; i++) {
      val = findASCII.ASCIIVal(array[i]);
      arr.push({ name: array[i], value: val });
    }
    return arr;
  };

  module.exports = {generateObject};