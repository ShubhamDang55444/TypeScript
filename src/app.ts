//console.log("HI");
interface Greetable
{
    name: string;
    //age: number;
    greet(phrase:string):void;
}
let user1:Greetable;

class Person implements Greetable
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
user1= new Person("Dang");
console.log(user1);

 


