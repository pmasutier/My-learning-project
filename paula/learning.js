// Tools of a programmer


// variables 

const constantVariableExample = 'This value should not be changed';
// constantVariableExample = 'this new thisisisis';
let letVariable = 'This value can be changed';
// string

const myString = 'this is a string';

// numbers 

const age = 25;

// arrays are lists of items 
 
const thisIsAnArray = [1,2,3,4,5,6]; // This is an array of numbers 

const otherArray = ['hello', 'goodbye', 'what is up']; // This is an array of strings 

// Objects are 

const sean = {
  firstName: 'Sean',
  secondName: 'Dillon',
  age: 25,
  nationality: 'American',
}

const thisObject = {
  innerObject: {
    innerInnerObject : {
      name: 'sean',
    },
    age: 12,
  }
}


// functions 

const paulasFunction = (parameter1, parameter2) => {


  const ourObject = {
    firstInput: parameter1,
    secondInput: parameter2,
  }

  return ourObject;

}


console.log(
  paulasFunction(2,3)
)

// loops


