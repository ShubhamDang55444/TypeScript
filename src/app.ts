function Logger(str:string)
{
    return function(constructor:Function)
    {
        console.log(str);
        console.log(constructor);
    };
    
}

@Logger("Logging")
class Person_D
{     
    constructor()
    {
        console.log("Constructor");
    }
}
