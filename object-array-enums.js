var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READONLY"] = 1] = "READONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
var person = {
    name: 'John',
    age: 25,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};
console.log(person.role);
