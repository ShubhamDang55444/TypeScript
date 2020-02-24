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

type Combinable = string | number;

function Add(a:number,b:number):number //function overload
function Add(a:string,b:number):string //function overload
function Add(a:string,b:string):string //function overload
function Add(a:Combinable,b:Combinable)
{
         if(typeof(a)== 'string' || typeof(b)== 'string')
         {
             return a.toString()+ b.toString();
         }
         return a+b;
}

console.log(Add(2,3));
console.log(Add('sand',4));
console.log(Add('s','q')); 


type Unknown = Admin | Employee

function PrintEmployeeInfo(emp:Unknown)
{
    console.log('Name:-' + emp.name);
    if('priveleges' in  emp)
    {
        console.log('Privelegs:-', emp.priveleges);
    }
    if('date' in  emp)
    {
        console.log('StartDate:-', emp.date);
    }

}

PrintEmployeeInfo(e1);
PrintEmployeeInfo({name:'Manu', priveleges:'koi ni'});


class Car
{
    drive()
    {
        console.log("driving");
    }
}

class Truck
{
    drive()
    {
        console.log('driving');
    }

    loadCargo(amount:number)
    {
        console.log("Loading:",amount)
    }
}

type Vehicle = Truck | Car;

const v1=new Car();
const v2=new Truck();

// v1.drive();
// v2.drive();

function useVehicle(vehicle:Vehicle)
{
    vehicle.drive();
    if(vehicle instanceof Truck)
    {
        (vehicle.loadCargo(22))
    }
}

useVehicle(v2);
useVehicle(v1);

interface Bird
{
     type:'bird'
    flyingSpeed:number;
}

interface Horse
{
    type:'horse'
    runningSpeed:number;
}

type Animal=Bird | Horse;
 
function AnimalSpeed(animalType:Animal)
{
    let speed;
    switch(animalType.type)
    {
        case 'bird':
        {
            speed= animalType.flyingSpeed;
            break;
        }
        case 'horse':
        {
            speed= animalType.runningSpeed;
        }
        
        
    }
    console.log('Speed is:',speed);
}


AnimalSpeed({type: 'bird', flyingSpeed:10});
