import { RBIRegulations } from "./interface";

abstract class Basebank implements RBIRegulations{
    
    auditTrnx(): void {
        console.log("Auditing all the accounts");
    }
    
    openAccount(): void {
       console.log("Open account for 1000 applicants");
       // Implemented methods
    }

    abstract withdrawMoney(): void // Unimplemented methods
    abstract interestRatePolicy(): number  // Unimplemented methods



}



export class SBIbank extends Basebank{

    withdrawMoney(): void {
        console.log("Withdrawal limit is 1000");        
    } 
    
    // Only have implemented methods
    interestRatePolicy(): number {
       return 5
    }

    depositMoney(){
        console.log("Money deposited limit 100000");
        
    }

   


}

class HDFC extends Basebank{
    interestRatePolicy(): number {
    return 10
    }

      withdrawMoney(): void {
        console.log("Withdrawal limit is 10000");
        
    }

    depositMoney(){
        console.log("Money deposited limit 200000");
        
    }
   

    
}

class AXIS extends Basebank{
    interestRatePolicy(): number {
       return 7
    }

    withdrawMoney(): void {
        console.log("Withdrawal limit is 15000");
        
    }

    depositMoney(){
        console.log("Money deposited limit 300000");
        
    }

    
}


/* Notes:
interface can have only => rules unimplemented methods / method signature
abstract class => can have both implemented as well as unimplemeted methods
class can have only implemented methods

Cannot create an objetc for abstract class and interface 
*/