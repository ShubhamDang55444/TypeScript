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
    constructor()
    {
        super(1,"Accounts")
    }
}
const itDept= new ITDept(["MAX"]);
//itDept.describe();
//itDept.printEmployeeInfo();
const accounting= new AccountDpt();


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
