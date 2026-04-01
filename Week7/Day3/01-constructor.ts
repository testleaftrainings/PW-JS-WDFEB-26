

// //Scenario1 => Basic creation of class and calling the method


// class Employee {

//     empName = "Hari" // Property of the class

//     payroll() { // Method 

//         console.log(`Employee payroll process of ${this.empName}`);

//     }
// }

// const emp = new Employee()
// emp.empName
// emp.payroll()



// //Scenario2 => Methods with parameter (Local Variable)

// class Employee1 {

//     // empName1 = "Ravi" // 
//     // empId1 = "Emp123" // Hard coding the values in a global variable

//     empDetails(empName1:string,empId1:string) { // Here we are passing the value as argument to the methods assigned to the local variable
//                                 // empName1 = Ravi, empId1 = Emp123

//         console.log(`Employee Name is ${empName1}, id is ${empId1}`);

//     }

// }

// const emp1 = new Employee1()
// emp1.empDetails("Ravi","Emp123") // Pass as an argument

//Scenario3 => Special method called "constructor"


// class Employee3 {

//     payroll() {
//         console.log(`Emplyee payroll`)
//     }

//     constructor() { // Default constructor
//         console.log("This is a special method called as Default constructor");
//     }
// }

// new Employee3() // Object creation
// //emp3.payroll()

//Scenario4 => Parmaterized constructor

class Employee4 {

    empName: string // GLobal variable
    empId: string

    constructor(name: string, id: string) { // Parametrized constructor name and id local variable // name = "Hari" and id = "Emp456"
     console.log(`Parametrized constructor ${name} and id ${id}`);
        this.empName = name // Hari
        this.empId = id
           

        //Note here the local variable value is assigned to the global varibale empName inorder to expose the value to other methods

    }

    printEmployeeDetails() {
        console.log(`Employee Name is ${this.empName} and id ${this.empId}`);

    }


}

const emp4 = new Employee4("Hari", "Emp456") // Object creation // values passed to constructor
emp4.printEmployeeDetails()