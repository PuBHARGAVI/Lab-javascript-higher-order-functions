//Array slice()
const foods = ['pizza', 'burger', 'fingerChips', 'donuts', 'springRoll'];
console.log(foods.slice(1,4));

//Array splice()
const modifiedfood = ['pizza', 'burger', 'fingerChips', 'donuts', 'springRoll'];
modifiedfood.splice(2,0,'noodles','icecream');
console.log(modifiedfood);

//Filter
const numberArray = [12,324,213,4,2,3,45,4234];
//isEven()
function isEven(numberArray){
var arr=[];
for(var i=0;i<numberArray.length;i++){
if((numberArray[i]%2)==0){
arr.push(numberArray[i]);
}
}
return arr;
}
//isPrime()
function isPrime(number){
    for(var i=2;i<=number/2;i++)
      if(number%i==0) 
        return false;
    return true;
}
var evenlist=isEven(numberArray);
console.log("Even numbers list:",evenlist);
var prime_number=numberArray.filter(isPrime);
console.log("Prime number:",prime_number);

//Reject()
function nonPrime(numberArray){
    var res=[];
    for(var i=0;i<numberArray.length;i++){
       if(!(isPrime(numberArray[i]))){
        res.push(numberArray[i]);
        }
    }
    return res;
}
var nonprimes=nonPrime(numberArray);
console.log("Non Prime numbers list:",nonprimes);

//lambda()
var res=numberArray.filter(item=>item%2==0);
console.log("even numbers using lambda:"+ res);
//map()

const myArray = [11, 34, 20, 5, 53, 16];
function findSquareOfNumbers(myArray){
    return myArray.map(value=>value**2);
}
console.log("SquaresofNumbers",findSquareOfNumbers(myArray));

//reduce()
function multiply(array)
{
    var prevvalue=1;
    return array.reduce((prevvalue,currentvalue)=>prevvalue*currentvalue,prevvalue);
}
array=[2, 3, 5, 10]
console.log(multiply(array));