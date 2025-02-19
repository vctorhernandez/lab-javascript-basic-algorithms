// Iteration 1: Names and Input
let hacker1 = "abc"
console.log("The driver's name is", hacker1);
let hacker2 = "abc"
console.log("The navigator's name is", hacker2);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log("The driver has the longest name, it has", hacker1.length, "characters.");
} else if (hacker2.length > hacker1.length) {
    console.log("It seems that the navigator has the longest name, it has", hacker2.length, "characters.");
} else {
    console.log("Wow, you both have equally long names", hacker2.length, "characters!");
}

// Iteration 3: Loops
let driverNameWithSpaces = "";
for (let i=0; i<hacker1.length; i++) {
    driverNameWithSpaces += hacker1[i].toUpperCase();
    if (i < hacker1.length - 1) {
        driverNameWithSpaces += " ";
    }
}
console.log(driverNameWithSpaces);

let reverseNaviagatorName = "";
for (let i=hacker2.length-1; i >= 0; i--) {
    reverseNaviagatorName += hacker2[i];
}
console.log(reverseNaviagatorName);

if (hacker1 < hacker2) {
    console.log("The driver's name goes first.")
} else if (hacker1 > hacker2) {
    console.log("Yo, the navigator goes first, definitely.");
} else {
    console.log("What?! You both have the same name?")
}

// Bonus Time!
// Bonus 1
let longText = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ipsum mi, congue rhoncus ultrices vel, dapibus nec neque. Nulla facilisi. Fusce et neque quis lorem tincidunt efficitur. Phasellus sed orci urna. Quisque laoreet mauris a augue iaculis, quis tristique enim vestibulum. Aliquam consectetur nisi at ligula dictum sagittis. Maecenas tincidunt turpis lacus, sit amet lobortis orci tempor quis. Nam eu pulvinar dui. Nam rhoncus lectus purus, sed semper purus rhoncus vitae. Praesent porttitor augue in mi consectetur vehicula. Duis eu lacus tellus.

Sed condimentum consectetur ipsum, et viverra dui ullamcorper quis. Nullam vehicula interdum tortor, id fermentum elit finibus ut. Mauris finibus congue consectetur. Proin mattis dictum ex, ut tempor nisi ultrices a. Nulla facilisi. Praesent libero justo, feugiat id lectus quis, suscipit ullamcorper libero. Curabitur augue velit, eleifend ac lorem vel, tempor condimentum risus. Nam elit massa, sodales in urna eu, laoreet mollis enim. Mauris et luctus magna, at rhoncus tellus. Nulla eget nisl id ipsum congue sodales. Sed non metus quis felis pulvinar sollicitudin sed et nisl. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec porttitor sagittis elit nec posuere. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.

Sed vitae scelerisque elit, eu malesuada ligula. Cras viverra nisi id tellus viverra aliquet. Mauris hendrerit consectetur sollicitudin. Curabitur convallis pulvinar facilisis. Praesent vulputate enim non leo viverra mollis. Mauris erat nisl, ultrices ut mi non, luctus mattis nulla. Phasellus porttitor faucibus mi, vel sagittis odio consequat at. Donec vehicula luctus ante. Quisque id cursus arcu, sagittis sagittis nisl.
`;
let wordList = longText.trim().split(/\s+/)
let wordCount = wordList.length;
console.log("Word count:", wordCount);

// Bonus 2

function checkPalindrome(text){
    newText = text.toLowerCase().replace(/\s+/g, "");
    for(let i=0; i < newText.length-1; i++) {
        console.log("Este:", newText[i], "- Este:", newText[newText.length-1-i]);
        if (newText[i] != newText[newText.length-1-i]){
            return false;
        }
    }
    return true;
}

console.log(checkPalindrome(`Was it a car or a cat I saw`));