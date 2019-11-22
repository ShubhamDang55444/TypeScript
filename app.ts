combine(30,26);

console.log("hello");

function combine(n1:number | string,n2:number|string,resultString)
{
    let result;

    if(typeof n1 =="number" && typeof n2=="number")
    {
        result=n1+n2;
    }
   else
   result=n1.toString()+n2.toString();
  
  console.log(result); 
}




