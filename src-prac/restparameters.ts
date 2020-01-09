

//  const Addd = (num1:number,num2:number) => {

// return num1+num2;

// }

 const Addd = (num1:number,num2:number) =>   num1+num2;
const Print=(output:string|number)=> console.log(output)
   
    
    
console.log(Addd(5,5));

const myHobbies=['a','b'];
const myActiveHobbies=['c'];

myActiveHobbies.push(...myHobbies);
console.log(myActiveHobbies);

const Person={
    age:30,
    sal:3000
}

const copiedPerson = {...Person}

// function AddUsingRP(...numbers:number[])
// {
    
//     return numbers.reduce((curRes,curValue)=>{
//         return curRes+curValue;
//    },0)
    
// };

function AddUsingRP(...numbers:number[])
{
    
    return numbers.reduce(function Aa(curRes,curValue){
        return curRes+curValue;
   },0)
    
};




const AddedNos= AddUsingRP(3,5,4,5,3);
console.log(AddedNos);