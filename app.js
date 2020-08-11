// Important Note - No Built-in functions to be used
// Progression 1: Names and Input

// 1.1 Create a variable `ProGrad-1` with the driver's name.
let ProGrad_1 ="joshua";

// 1.2 Print `"The driver's name is XXXX"`.
console.log(`The drivers name is ${ProGrad_1}`);
// 1.3 Create a variable `ProGrad-2` with the navigator's name.
ProGrad_2="joel"
// 1.4 Print `"The navigator's name is YYYY"`.
console.log("The navigators name is "+ProGrad_2)

// Progression 2: Control Statements - 1
// 2.1. Depending on which name is longer, print:
let len1=ProGrad_1.length;
let len2=ProGrad_2.length;
// - The driver has the longest name, it has XX characters. or
if(len1>len2){
    console.log(`The driver has the longest name,it has ${len1} characters`)
}
// - It seems that the navigator has the longest name, it has XX characters. or
else if(len1<len2){
    console.log(`The navigator has the longest name,it has ${len2} characters`)
}
// - Wow, you both have equally long names, XX characters!.
else{
    console.log("both have equally long name")
}

// 2.2. Check if the string contains vowels or not.
// - If it contains vowels, print the name, and also print the vowel letters along with the vowel index. or
let x="joshua";
for(let i=0;i<x.length;i++){
  if(x.charAt(i)=="a"||x.charAt(i)=="e"||x.charAt(i)=="i"||x.charAt(i)=="o"||x.charAt(i)=="u"){
    console.log(`${x} ${x.charAt(i)} ${i}`)

  }
  console.log("no-vowels")
}
// - print no vowels
// - for example. In String ProGrad - o and a are vowels. Print ProGrad o a 2 5. 

// 2.3. Check if the string contains uppercase and lowercase characters Xx
let x="JoshUA";
let uppercount=0;
let lowercount=0;
for(let i=0;i<x.length;i++){
  if(x.charAt(i)==x.charAt(i).toUpperCase()){
    uppercount++;
    
  }
  if(x.charAt(i)==x.charAt(i).toLowerCase()){
    lowercount++;
  }

}
console.log("lowercase "+lowercount)
console.log("uppercase "+uppercount)
// - Print the number of upper case characters
// - Print the number of lower case characters


// Progression 3: Control Statements - 2
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "ProGrad"
let x="joshua"
let i =0;
while(i<x.length){
  console.log(`${x.charAt(i).toUpperCase()} \n`);
  i++;

}

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "darGorP"
let x="joshua"
let i =x.length;
while(i>0){
  console.log(x.charAt(i));
  i--;

}

// 3.3 Merge both the characters such that driver is followed by Navigator like "ProGrad FACEPrep"
// - Now bring the FACEPrep to the start and send ProGrad to the back like "FACEPrep ProGrad"
let x='ProGrad'
let y="FacePrep"
if(x.charAt(0).toLowerCase()<y.charAt(0).toLowerCase()){
    console.log(y+x)
}
else if(x.charAt(o).toLowerCase()>charAt(0).toLowerCase()){
    console.log(x+y)
}
else{
    console.log("both have same name")
}


// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?

// Bonus Time!
// Bonus 1:
// Go to lorem ipsum generator and:
// Generate 3 paragraphs. Store the text in a variable type of string.
// Make your program count the number of words in the string.
// Make your program count the number of times the Latin word et appears.
// Bonus 2:
// Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome. Here are some examples of palindromes:

// "A man, a plan, a canal, Panama!"
// "Amor, Roma"
// "race car"
// "stack cats"
// "step on no pets"
// "taco cat"
// "put it up"
// "Was it a car or a cat I saw?" and "No 'x' in Nixon".

// Hint: If you use Google to help you to find solution to this iteration, you might run into some solutions that use advanced string or array methods (such as join(), reverse(), etc.). However, try to apply the knowledge you currently have since you can build pretty nice solution with just using for loop, if-else statements with some break and continue... Just sayin' 
