var sentence = "Hello world";
function findCount(sentence) {
  var obj = {};
  for (var i = 0; i < sentence.length; i++) {
    var char = sentence.charAt(i);
    if (obj[char]) {
      obj[char]++;
    } else {
      obj[char] = 1;
    }
  }

  return obj;
}

console.log(findCount(sentence));
