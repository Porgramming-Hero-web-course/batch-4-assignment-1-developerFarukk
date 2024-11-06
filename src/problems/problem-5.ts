
{
    // ******  <  Problem 5  >  *********

    interface Person {
        name: string;
        age: number;
    }

    const getProperty = <X, Y extends keyof X>(obj: X, key: Y) => {
        return obj[key];
    };



    const person: Person = { name: "Alice", age: 30 };
    // const person: Person = { name: "Ami", age: 20 };


    const personName = getProperty(person, "name");
    console.log(personName);

    const personAge = getProperty(person, "age");
    console.log(personAge);


    // 
}