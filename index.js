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

function createTimeInEvent(employeeRecord, dateStamp){
    employeeRecord.timeInEvents[0] = {
        type: "TimeIn",
        hour: Number.parseInt(dateStamp.slice(11)),
        date: dateStamp.slice(0, 10)
    }
    return employeeRecord
}

function createTimeOutEvent(employeeRecord, dateStamp){
    employeeRecord.timeOutEvents[0] = {
        type: "TimeOut",
        hour: Number.parseInt(dateStamp.slice(11)),
        date: dateStamp.slice(0, 10)
    }
    return employeeRecord
}

function hoursWorkedOnDate(employeeRecord, date){
    
}

let employeeDetails = ['Shouto', 'Todoroki', 'Fridge', 10]
let employeeRecord = createEmployeeRecord(employeeDetails)
createTimeInEvent(employeeRecord, "2014-02-28 1400")
createTimeOutEvent(employeeRecord, "2014-02-28 1700")
console.log(employeeRecord)