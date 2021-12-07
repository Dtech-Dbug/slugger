// Only change code below this line
function slugger(title) {
  let split = title.split(" ");
  let lowerCasedSplit = [];

  for (let i = 0; i < split.length; i++) {
    lowerCasedSplit.push(split[i].toLowerCase());
  }
  return lowerCasedSplit.join("-");
}
// Only change code above this line

console.log(slugger("Hello World"));
