const person={
    name:"Saba",
    age:22,
    friends:["sadia","nadia"],
    country:"Bangladesh",
    familyMembers:
    {
        father : "Abdul Karim",
        mother: "Hosne Ara",
        Sister: "Bushra",
        brother:"Walid"
    }
}
console.log(person.familyMembers)
console.log(person.friends)
console.log(person.name)

// object destructuring
const {name,familyMembers,country,age,friends}=person;
console.log(familyMembers,name,age,country,friends)

console.log(Object.keys(person))
console.log(Object.values(person))