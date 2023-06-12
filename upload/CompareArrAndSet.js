const users = [
  { id: 1, name: "AvisBoehm", email: "Garry.Cartwright@gmail.com" },
  { id: 2, name: "MagnoliaLabadie", email: "Gwendolyn46@gmail.com" },
  { id: 3, name: "RylanAnkunding", email: "Cora53@gmail.com" },
  { id: 4, name: "ChelsieReynolds", email: "Jaylen_Hilll32@gmail.com" },
  { id: 5, name: "VerdieCole", email: "Lilliana.Altenwerth@yahoo.com" },
  { id: 6, name: "IsaacWeissnat", email: "Casimir.Johns@gmail.com" },
  { id: 7, name: "ClayMarquardt", email: "Dandre66@hotmail.com" },
  { id: 8, name: "LilyanMacejkovic", email: "Tyra20@gmail.com" },
  { id: 9, name: "VivianneSchimmel", email: "Everette60@hotmail.com" },
  { id: 10, name: "FeltonGreenfelder", email: "Katherine25@gmail.com" },
];
console.time("includes");
const sessions = [2, 10];
const onlineUsersArr = users.filter((user) => {
  return sessions.includes(user.id);
});
console.timeEnd("includes");
console.time("set");
const onlineUserSet = new Set(sessions);
const onlineUsersSet = users.filter((user) => {
  return onlineUserSet.has(user.id);
});
console.timeEnd("set");
