let person = {
    firstName: "Simen",
    lastName: "Lien",
    age: 31,
    city: "Bergen",
    hobbies: ["Gaming", "Mountain hikes"]
}

person.age = 32 // :(

console.log(person.firstName) // Simen
console.log(person.lastName) // Lien
console.log(person.length) // undefined
console.log(Object.keys(person).length); // 4