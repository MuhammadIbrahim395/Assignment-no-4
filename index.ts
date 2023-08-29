console.log("Q no 1");

//  Create a function that takes an array, an index, and a value as parameters. Inside the function, use the splice method to insert the value at the specified index in the array. Return the modified array 

let gets=(array:number[],anIndex:number, aValue:number)=>{
    array.splice(anIndex,0,aValue)
    console.log(array);
    
}
gets([0,787,878,7890],1,4);



console.log("Q no 2");
//Implement a simple shopping cart program using an array. Create functions to add items, remove items, and update quantities using the splice method. Print the cart's contents after each operation
 let pile:string[]=["biscuit","flour","beans"]

function updateItems(index:number,remove:number, add:string ){
    pile.splice(index,remove,add )
}

updateItems(0,0,"rice");
console.log(pile);

console.log("Q no 3");
//Write a program that uses a while loop to print the first 25 integers.
  let num:number=0;
  while(num<25 ) {
    num++
    console.log(num);
    
  } 

  console.log("Q no 4");
 // Write a program that uses a while loop to print the first 10 even numbers.

let num1:number=0;
while(num1<=10){
    console.log(num1);
    num1+=2
}
 console.log("Q no 5");
//Create a function that takes a positive integer as parameter and uses a while loop to calculate and return the factorial of that number

 function positiveInteger(integer:number){
    // let integer1:number=0;
    if(integer>0){
 console.log("yes you write a right integer" );
}
else {
    console.log("please write a posiive integer")
}
let b:number=integer
let dec:number=1;
 while(b>0){

 dec= dec*b
b--
}
console.log(dec);
}
positiveInteger(4)

console.log("Q no 6");

//- Write a program having an array of numbers if the number is negative it should remove the negative number from the array.

let array:number[]=[3,4,-5,-4,-4,3,-7,-923,222222222224,]
for(let i:number=array.length-1; i>=0; i--){
    array[i];
    if(array[i] <=-i){
        array.splice(i,1)
    }
    
}
console.log(array);

console.log("Q no 7");
// Create a function that takes an array of numbers as parameter. Use a while loop to calculate and return the sum of all the numbers in the array.

function getsNumber(arr:number[]){
    let sum:number=0;
    let i:number =0;
    while(i=arr.length-1){

    arr[i]
    sum=sum+ arr[i]
    i--
   } 
   console.log(sum);
   
   console.log(arr);
}

getsNumber([3,3,3,3])

console.log("Q no 8");

//Implement a program that takes a list of temperatures in Celsius as input from the user. Convert each temperature to Fahrenheit using the formula F = (C * 9/5) + 32 and store the converted temperatures in an array. Use a while loop to perform the conversion for each temperature
 let tempInFah:number[]=[]
function tempInCelsius(input:number[]){
let i:number=0;
    while(i<input.length){
   input[i]
 if(input[i]>0){
  let b:number=  9/5*input[i]+32
  i++;
  tempInFah.push( b)
  
//   console.log(b);
 }
 }

console.log(tempInFah);
}
tempInCelsius([23,24])
