// Create a function createGreeting that takes two parameters, name and age, and returns a greeting message using a template literal. The message should be in the format: "Hello, my name is {name} and I am {age} years old."

function createGreeting(name, age) {
  console.log(`Hello, my name is ${name} and I am ${age} years old.`);
}
// createGreeting("md", 28);

// Create a function calculateArea that takes two parameters, length and width. If the width is not provided, it should default to the value of length (making it a square). The function should return the area of the rectangle.
function calculateArea(length, width = length) {
  return length * width;
}
// console.log(calculateArea(5)); // Output: 25
// console.log(calculateArea(5, 10)); // Output: 50

// Given an object user with an optional nested structure, create a function getStreetName that returns the street name if it exists, otherwise returns "Street not found".
function getStreetName(user) {
  if (user.address.street) {
    let {
      address: {
        street: { name },
      },
    } = user;
    return name;
  }
  return "Street not found";
}
const user = {
  address: {
    street: {
      name: "CR Dutta Road",
    },
  },
};

const userWithoutStreet = {
  address: {},
};

// console.log(getStreetName(user)); // Output: CR Dutta Road
// console.log(getStreetName(userWithoutStreet)); // Output: Street not found

// Create a function cleanUpString that takes a string, trims any leading or trailing whitespace, and replaces all occurrences of the word "white" with "red".
function cleanUpString(str) {
  return str.trim().replaceAll("white", "red");
}
// console.log(cleanUpString("   white is white   ")); // Output: red is red

// Create a function processArray that takes an array of strings. Each string contains a name and age separated by a hyphen (e.g., "Zohan-25"). The function should:
// Split each string into a name and age.
// Filter out the ones where the age is less than 18.
// Return an array of objects with the properties name and age.

function processArray(arr) {
  const keys = ["name", "age"];
  let newArr = arr.map((item) =>
    item.split("-").reduce((obj, value, index) => {
      obj[keys[index]] = value;
      return obj;
    }, {})
  );
  return newArr;
}
const input = ["Zohan-25", "Wafi-17", "Saher-19"];
// console.log(processArray(input));
// Output: [{ name: "Zohan", age: 25 }, { name: "Saher", age: 19 }]
