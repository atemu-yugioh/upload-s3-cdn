//!! 100k users in DB and 10 online users
// const { users } = require("./users.json");
// const sessions = new Array(10);
// for (let start = 1; start <= 10; start++) {
//   sessions[start] = start;
// }
// const onlineUserSet = new Set(sessions);

// console.time("includes");
// users.filter((user) => {
//   return sessions.includes(user.id);
// });
// console.timeEnd("includes");
// console.time("set");
// users.filter((user) => {
//   return onlineUserSet.has(user.id);
// });
// console.timeEnd("set");

// 100k users in DB and 100 online users
// const { users } = require("./users.json");
// const sessions = new Array(100);
// for (let start = 1; start <= 100; start++) {
//   sessions[start] = start;
// }
// const onlineUserSet = new Set(sessions);

// console.time("includes");
// users.filter((user) => {
//   return sessions.includes(user.id);
// });
// console.timeEnd("includes");
// console.time("set");
// users.filter((user) => {
//   return onlineUserSet.has(user.id);
// });
// console.timeEnd("set");

// 100k users in DB and 1k online users
const { users } = require("./users.json");
const sessions = new Array(1000);
for (let start = 1; start <= 1000; start++) {
  sessions[start] = start;
}
const onlineUserSet = new Set(sessions);

console.time("includes");
users.filter((user) => {
  return sessions.includes(user.id);
});
console.timeEnd("includes");
console.time("set");
users.filter((user) => {
  return onlineUserSet.has(user.id);
});
console.timeEnd("set");
