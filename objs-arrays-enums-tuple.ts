// const person:{
//     name:string
//     age:number
//     role:[string,number];
//     hobbies:string[];

// }={

//     name: "dang",
//     age: 123,
//     hobbies: ["dang","dang"],
//      role:["3",5]              //Role is a tuple

// };

enum Role{ADMIN,READONLY,AUTHOR}

const person={

    name: "dang",
    age: 123,
    hobbies: ["dang","dang"],
  //   role:["3",5]     //Role is a tuple
    role: Role.ADMIN         

};



console.log(person.name)
console.log(person.hobbies[0]);
for(const hobby of person.hobbies)
{
    console.log(hobby);
}

