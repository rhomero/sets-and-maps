//question 1
console.log(new Set([1,1,2,2,3,4])); // set{1,2,3,4}
//question 2
[...new Set("referee")].join("") //the set would be {r,e,f} then is turned to array [r,e,f] then joined to "ref"
//quetsion 3
let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);

console.log(m)// { [ 1, 2, 3 ] => true, [ 1, 2, 3 ] => false }
//note the reason the same array can be used as the key is they have different reference types

//hasDulpicate function
const hasDuplicate = (arr) => new Set(arr).size !== arr.length;
console.log(hasDuplicate(([1,3,2,1])));
console.log(hasDuplicate(([1,5,-1,4])));

//vowelCount
function isVowel(char){
  return "aeiou".includes(char);
}

function vowelCount(str){
  const vowelMap = new Map();
  for(let char of str){
    let lowerCaseChar = char.toLowerCase()
    if(isVowel(lowerCaseChar)){
      if(vowelMap.has(lowerCaseChar)){
        vowelMap.set(lowerCaseChar, vowelMap.get(lowerCaseChar) + 1);
      } else {
        vowelMap.set(lowerCaseChar, 1);
      }
    }
  }
  return vowelMap;
}

console.log(vowelCount('awesome'));
