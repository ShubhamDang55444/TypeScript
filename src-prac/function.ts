function Add(n1:number,n2:number)
{
    return n1+n2;
}

function PrintResult(num:number):void
{
    console.log('Result:' + num)
}

let combinedAges1: (name1:number,name2:number) => number;
combinedAges1=Add;
//combinedAges=PrintResult;


//let result= combinedAges(4,4);

//console.log(result);


// function sendRequest(data: string, cb: (response: any) => void) {
//     // ... sending a request with "data"
//     return cb({data: 'Hi there!'});
//   }
   
//   sendRequest('Send this!', (response) => { 
//     console.log(response);
//     return true;
//    });