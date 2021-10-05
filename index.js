//1
function fizzBuzz(){
  for(let i=1;i<=100;i++){
      if(i%3===0 && i%5===0){
          console.log("FizzBuzz");
      }
      else if(i%3===0){
          console.log("Fizz");
      }
      else if(i%5===0){
          console.log("Buzz");
      }
      else {
          console.log(i);
      }
  }
}

//2
function fizzBuzz(number){
    const fizzBuzzArray = [];
   for(let i=1;i<=number;i++){
      if(i%3===0 && i%5===0){
          fizzBuzzArray.push("FizzBuzz");
      }
      else if(i%3===0){
          fizzBuzzArray.push("Fizz");
      }
      else if(i%5===0){
          fizzBuzzArray.push("Buzz");
      }
      else {
          fizzBuzzArray.push(i.toString());
      }
  }
  return fizzBuzzArray;
}



// fizzBuzz();
//  console.log(fizzBuzz(3))        // returns ["1","2","Fizz"]
// console.log(fizzBuzz(5))        // returns ["1","2","Fizz","4","Buzz"]
// console.log(fizzBuzz(15))       // returns ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]