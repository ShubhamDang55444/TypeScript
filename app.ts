function add(n1:number,n2:number,showResult:boolean,phrase:string)
{
    const res=n1+n2;
    if(showResult)
    {
        console.log(phrase + res);
        
    }
    else
    return n1+n2 ;
   
}


const number1=5;
const number2=7.66;
const viewResult=true;
const phrase= "The Result is:";

add(number1,number2,viewResult,phrase);
