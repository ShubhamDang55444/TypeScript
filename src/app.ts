console.log("Hello");

type Admin=
{
    name:string,
    priveleges:string
}

type Employee=
{
    name:string,
    date:Date
}

type ElevatedEmp = Admin & Employee

const e1: ElevatedEmp =
{
    name:"DANG",
    priveleges: "server",
    date: new Date()
}
  
console.log(e1)

