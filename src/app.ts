class Department
{
    private readonly id:number
    private  name:string
    private employees:string[]=[];
    constructor(_id:number,_name:string)
    {
        this.id=_id;
        this.name=_name;
        
    }

    describe(this:Department)
    {
        console.log(`Dept (${this.id}): ${this.name}`);
    }

    addEmployee(employee:string)
    {
        this.employees.push(employee);
    }

    printEmployeeInfo()
    {
        //console.log(this.employees.length);
        console.log(this.employees);
    }


}

class ITDept extends Department
{
    admins: string[];
    constructor(_admins:string[])
    {
        super(2,"IT");
        this.admins=_admins;
        
    }
    
}

class AccountDpt extends Department
{
    //private readonly id:string;
    //private lastReport:string; 
    private reports:string[]=[];
    constructor(id:string,_reports:string[])
    {
        super(5,"Accounts")
      
        // this.lastReport=_reports[0]
        this.reports=_reports;
        //this.id=_id;
    }

    addReport(text:string)
    {
        this.reports.push(text);
      //  this.lastReport=text;
    }
    printReports() {
        console.log(this.reports);
      }
}
const itDept= new ITDept(["MAX"]);
//itDept.describe();
//itDept.printEmployeeInfo();
const accounting= new AccountDpt('d1',[]);
accounting.addReport('Something went wrong...');
accounting.printReports();

itDept.addEmployee("Dang")
itDept.addEmployee("XYZ")
itDept.describe();
itDept.printEmployeeInfo();
console.log(itDept);
console.log(accounting);


// const copyOfDept=
// {
//    name:'s', describe:accounting.describe
// };

//copyOfDept.describe();
//console.log(depName);
