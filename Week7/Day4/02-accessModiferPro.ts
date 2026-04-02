import { EmployeeSignUp } from "./01-accessModifiers";


class HR extends EmployeeSignUp{ // Single Inheritance

    dep:string  // Property that is specific to HR class

    constructor(){

       super()
        this.dep="QA"
    }




    empUpdate(){
        console.log(this.ephno,this.dep); // 6876786 read protected properties using inheritance
     //   this.ephno=989898
         console.log(this.ephno);// 989898 modify protected properties using inheritance
        
    }


}

const hr = new HR()
hr.empUpdate()





