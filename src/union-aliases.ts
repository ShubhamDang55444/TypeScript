

//  let resultString: string
type Combine_stringAnd_number = number |string;
const combinedAges=combine(30,25,"as-number");
console.log(combinedAges);


const combinedNames=combine('4',"4","as-text");
console.log(combinedNames);

function combine(n1:Combine_stringAnd_number, n2:Combine_stringAnd_number,resultString: "as-number" | "as-text")
{
    let result;

    if(typeof n1 === 'number' && typeof n2=== "number"|| resultString==="as-number")
    {
        result= +n1 + +n2;
    }
   else
   result=n1.toString()+n2.toString();
  
  return result;
}


//let res= combine(30,26,"as-text");
//console.log(res);
type User={name:string} | string;
let u1:User={name:'MAX'};
u1='MIC'; 