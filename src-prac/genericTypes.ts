console.log("Heello");


function Merge<T extends object ,U extends object>(obj1:T, obj2:U)
{
   return Object.assign(obj1,obj2)

}

let mergedRes = Merge({name: 'max'},{age:40});
console.log(mergedRes.age);

interface Lengthy
{
    length:number
}

function CountAndDescribe<T  extends Lengthy>(element:T): T
{
    if(element.length<1)
    {
        console.log("Got no values");
    }

    else
    console.log("Got" + " "+ element.length +" "+ "values");

    return element;
}
(CountAndDescribe(['aa','b']));


//*Keyof Constraint//
function ExtractAndConvert<T extends object,U extends keyof T>(obj1:T,key:U )
{
    return obj1[key];
}

console.log(ExtractAndConvert({name:'MAX',age:'undefined'},'age'));

class DataStorage<T extends number|string|boolean>
{
    private data:T[]=[];

    addItem(item:T)
    {
        this.data.push(item);
    }

    removeItem(item:T)
    {
        this.data.splice(this.data.indexOf(item),1)
    }

    getItemData()
    {
        return this.data;
    }
}

let numberStorage= new DataStorage<number>();
numberStorage.addItem(5);
numberStorage.addItem(22323);
numberStorage.addItem(2);
numberStorage.addItem(3);
console.log(numberStorage.getItemData());
numberStorage.removeItem(5);
console.log(numberStorage.getItemData());

let stringStorage=new DataStorage<string>();
stringStorage.getItemData();

