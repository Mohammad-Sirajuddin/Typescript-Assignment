var EmployeeList = [];
var Employee1 = {
    name: "Alice",
    tasks: "Build Login Page",
    taskStatus: "Inprogress",
    priority: "High",
    role: "Devloper"
};
var Employee2 = {
    name: "Bob",
    tasks: "Create Logo",
    taskStatus: "Inprogress",
    priority: "High",
    role: "Designer"
};
EmployeeList.push(Employee1);
EmployeeList.push(Employee2);
function EmployeeData(name) {
    for (var i = 0; i < EmployeeList.length; i++) {
        var Name = EmployeeList[i].name;
        if (Name.toLowerCase() === name.toLocaleLowerCase()) {
            console.log("Employee: ".concat(name, " (").concat(EmployeeList[i].role, ") "));
            console.log("Task:\n- ".concat(EmployeeList[i].tasks, "[").concat(EmployeeList[i].taskStatus, ",").concat(EmployeeList[i].priority, "]   "));
            break;
        }
    }
    return "Employee doesn't exist";
}
EmployeeData("Alice");
