enum Role {
  ADMIN = 5,
  READONLY,
  AUTHOR = 'AUTHOR'
};

const person = {
    name: 'John',
    age: 25,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN,
};

console.log(person.role);