function firstWord(s) {
  // your code here
	let s = prompt("Enter a string:");
	let words = s.split(" ");
	return words[0];
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
