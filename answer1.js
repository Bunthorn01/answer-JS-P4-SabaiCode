function filterUsersByAge(users) {
    let filteredUsers = [];
    for (let i = 0; i < users.length; i++) {
        if (users[i].age > 18) {
            filteredUsers.push(users[i]);
        }
    }
    return filteredUsers;
}
const users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 17 },
    { name: 'Charlie', age: 30 },
    { name: 'Charlie', age: 30 }
];
const filteredUsers = filterUsersByAge(users);
console.log(filteredUsers);
