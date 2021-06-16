const anotherHobbies = ['Reading', 'Cooking', 'Yoga', 'Meditation', 'Walking'];

//GETTING ELEMTNS ONE BY ONE
// const hooby1 = hobbies[0];
// const hooby2 = hobbies[1];
// const hooby3 = hobbies[2];

//ARRAY DESTRUCTURING
const [hooby1, hooby2, hooby3, ...remainingHobbies] = anotherHobbies;
console.log("hooby1: " + hooby1);
console.log("hooby2: " + hooby2);
console.log("hooby3: " + hooby3);
console.log("remainingHobbies: " + remainingHobbies);

const somePerson = {
    personName: 'Ana',
    personAge: '89'
}

const { personName, personAge } = somePerson;
console.log("personName: " + personName);
console.log("personAge: " + personAge);