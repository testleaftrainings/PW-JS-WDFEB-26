


export class EmployeeSignUp {

    public eName: string  // Global public accessmodifiers
    public static eid : string
    protected readonly ephno : number 
    private eSalary : number
   

    constructor() { // First the special method called constructor is invoked will creating an object with new keyword
        this.eName = "Hari"
        EmployeeSignUp.eid = "Emp123"
        this.ephno = 6876786
        this.eSalary = 565656
     
    }

    printDetails() {
        console.log(`The Emp details ${this.eName} : ${EmployeeSignUp.eid}  : ${this.ephno} : ${this.eSalary}`);
    }

    public get readData(){ // This block is to read data of a private accessmodifier property 
        return this.eSalary
    }

    public set writeData(newSal:number){ // This block is to wrie/modify data of a private accessmodifier property 
        this.eSalary=newSal
    }


}

//const emp = new EmployeeSignUp();
// emp.printDetails()
// console.log(emp.readData)  // eSalary = 565656
// emp.writeData=898989
// console.log(emp.readData); // new eSalary = 898989









