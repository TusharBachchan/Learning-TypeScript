let myName: string = "Tushar";
let noOfZeross: number;
let isAvailable: boolean;
let response: any; // Kind of defeating Typescript's Purpose but can be handy whre we don't know the type of response that will come

noOfZeross = 10;

isAvailable = false;

response = 10;

response = true;

//const sum = (a, b) => a + b; // Illegal => Typescript cant infer the return type as it senses a and b to be of type 'any'
// correct code shown below :

const sum = (a: number, b: number) => a + b; // Typescript can now infer the return type as a number

// Union Type => more than one data type

let empId: string | number;
let isActive: number | boolean;

let re: RegExp = /\w+/g;

// If not sure about the data type use intellisense hover
