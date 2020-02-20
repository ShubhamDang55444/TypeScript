//console.log("HI");

function AddFunction  (n1:number,n2:number):number
{
    return n1+n2;
}

//type AddFunction2 = (n1:number,n2:number)=>number;
 let add_main:AddFunction2;

 add_main= (n1:number,n2:number):number=> n1+n2;

 interface AddFunction2
 {
     (n1:number,n2:number):number;
 }


interface Greetable
{
    name: string;
    //age: number;
    greet(phrase:string):void;
}
let user1:Greetable;

class Person_main implements Greetable
{
    name: string;     
    constructor(_name:string)
    {
        this.name=_name;
    }
    greet(phrase: string): void 
    {
       console.log("Hi I am", phrase);
    }    
}
user1= new Person_main("Dang");
console.log(user1);

 


