// Your code here
function createEmployeeRecord(array){
    const employeeRecord = {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    return employeeRecord;
}

function createEmployeeRecords(arrayOfArrays){
    const arrayOfObjects = [];
    arrayOfArrays.map(nestedArray => {arrayOfObjects.push(createEmployeeRecord(nestedArray))});
    
    return arrayOfObjects;
}

let twoRows = [
    ["moe", "sizlak", "barkeep", 2],
    ["bartholomew", "simpson", "scamp", 3]
  ]

console.log(createEmployeeRecords(twoRows))