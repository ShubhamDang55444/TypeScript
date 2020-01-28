//console.log("HI");

interface Person
{
    name: string;
    age: number;

    greet(phrase:string):void;
}

let user1:Person;

user1=
{
    name:'Dang',
    age:34,

    greet(phrase:string):void{
        console.log(phrase + '' + this.name)
    }

}




