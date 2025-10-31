type Employee = {
    name:string
    tasks:string
    taskStatus:"Inprogress"|"Pending"|"completed"|undefined
    priority:"High"|"Medium"|"Low"
    role:string
}

let EmployeeList:Employee[] = [];

let Employee1:Employee = {
    name: "Alice",
    tasks:"Build Login Page",
    taskStatus: "Inprogress",
    priority:"High",
    role: "Devloper"
}

let Employee2:Employee = {
    name: "Bob",
    tasks:"Create Logo",
    taskStatus: "Inprogress",
    priority:"High",
    role:"Designer"
}

EmployeeList.push(Employee1);
EmployeeList.push(Employee2);

function EmployeeData(name:string):string{
    for(let i = 0; i<EmployeeList.length; i++){
        let Name = EmployeeList[i].name;
        if(Name.toLowerCase() === name.toLocaleLowerCase() ){
            console.log(`Employee: ${name} (${EmployeeList[i].role}) `);
            console.log(`Task:\n- ${EmployeeList[i].tasks}[${EmployeeList[i].taskStatus},${EmployeeList[i].priority}]   `)
            break;
        }
    }
    return "Employee doesn't exist";
}

EmployeeData("Alice");