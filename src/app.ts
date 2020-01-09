class Department
{
    name:string
    constructor(_name:string)
    {
        this.name=_name;
    }

    describe(this:Department)
    {
        console.log("Dept:" + this.name);
    }
}

const depName= new Department("SD")
depName.describe();


const copyOfDept=
{
   name:'s', describe:depName.describe
};

copyOfDept.describe();
//console.log(depName);
