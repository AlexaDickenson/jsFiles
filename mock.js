//Users array
const users = [
    { id: 1, name: 'Alexa', email: 'alexa@example.com' },
    { id: 2, name: 'Kevin', email: 'kevin@example.com' },
    { id: 3, name: 'Mikal', email: 'mikal@example.com' },
  ];
  
  //fetchUserById function
  function fetchUserById(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const user = users.find(user => user.id === id);
        if (user) {
          resolve(user);
        } else {
          reject(`User with ID ${id} not found`);
        }
      }, 1000);
    });
  }
  
  //fetchUserById to fetch user with ID 1
  fetchUserById(1)
    .then(user => console.log(user))
    .catch(error => console.log(error));
  
  //fetchUserById call to fetch user with ID 2
  fetchUserById(2)
    .then(user => console.log(user))
    .catch(error => console.log(error));
  