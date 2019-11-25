function Add(n1:number,n2:number)
{
    return n1+n2;
}

function PrintResult(num:number):void
{
    console.log('Result:' + num)
}

let combinedAges: (name1:number,name2:number) => number;
combinedAges=Add;
//combinedAges=PrintResult;


//let result= combinedAges(4,4);

//console.log(result);