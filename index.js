/* Your Code Here */
function createEmployeeRecord([firstName,familyName,title,payPerHour,timeInEvents,timeOutEvents]){
    return {
        firstName:firstName,
        familyName:familyName,
        title:title,
        payPerHour:payPerHour,
        timeInEvents:[],
        timeOutEvents:[],
    }
}

function createEmployeeRecords(employeeRecords){
    return employeeRecords.map(createEmployeeRecord)
}

function createTimeInEvent(dateTime){
this.timeInEvents.push ({   
    type:"TimeIn",
    hour:parseInt(dateTime.split(" ")[1]),
    date:dateTime.split(" ")[0]
})
    return this
}

function createTimeOutEvent(dateTime){
    this.timeOutEvents.push({
        type:"TimeOut",
        hour:parseInt(dateTime.split(" ")[1]),
        date:dateTime.split(" ")[0]
    })
    return this
}

function hoursWorkedOnDate(date){
    const timein =this.timeInEvents.find(e=> e.date===date).hour
    const timeOut=this.timeOutEvents.find(e=>e.date===date).hour
    return (timeOut-timein)/100
}

function wagesEarnedOnDate(date){
    const hours = hoursWorkedOnDate.call(this,date)
    return hours* this.payPerHour
}

function findEmployeeByFirstName(srcArray,firstName){
    return srcArray.find(r=>r.firstName===firstName)
}

function calculatePayroll(employeeRecords){
    return employeeRecords.reduce((total, record) => total + allWagesFor.call(record), 0);
}
/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

