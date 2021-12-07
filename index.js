// Only change code below this line
function slugger(title) {
  // split the string
  let split = title.split(" ");
  let lowerCasedSplit = [];

  // loop through them and turn them to lowercase
  for (let i = 0; i < split.length; i++) {
    lowerCasedSplit.push(split[i].toLowerCase());
  }

  // join them with '-'
  return lowerCasedSplit.join("-");
}
// Only change code above this line

console.log(slugger("Hello World"));
