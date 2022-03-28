/*
Write a function called `findUserByUsername` which accepts an array of objects, each with a key of username, and a string. The function should return the first object with the key of username that matches the string passed to the function. If the object is not found, return undefined.

const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

findUserByUsername(users, 'mlewis') // {username: 'mlewis'}
findUserByUsername(users, 'taco') // undefined
*/

const users = [
    {username: 'mlewis'},
    {username: 'akagen'},
    {username: 'msmith'}
  ];
  
  const findUserByUsername = function(usersArray, username) {
    return usersArray.find(function(aValue) {
        return aValue.username === username;
    })
  };
  // console.log(findUserByUsername(users, 'mlewis'));
  // console.log(findUserByUsername(users, 'taco'));
  
  /*
  Write a function called `removeUser` which accepts an array of objects, each with a key of username, and a string. The function should remove the object from the array. If the object is not found, return undefined.
  
  const users = [
    {username: 'mlewis'},
    {username: 'akagen'},
    {username: 'msmith'}
  ];
  
  removeUser(users, 'akagen') // {username: 'akagen'}
  removeUser(users, 'akagen') // undefined
  */
  
  const removeUser = function(usersArray, username) {
  if (usersArray.findIndex(function(aValue) {
      return aValue.username === username;
  }) === -1
  ) {
    return undefined;
  } else {
      return usersArray.splice((usersArray.findIndex(function(aValue) {
          return aValue.username === username;
      })
    ), 1);
  }
  };
  // console.log(removeUser(users, "taco"));
  // console.log(users, users.length);
  // console.log(removeUser(users, "mlewis"));
  // console.log(users, users.length);
  