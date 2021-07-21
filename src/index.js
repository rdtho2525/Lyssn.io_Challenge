const users = require('../src/data.json');

const usersList = document.getElementById('usersList');

const formatNames = (name) => {
  return name.charAt(0).toUpperCase() + name.slice(1);
}

const displayUsers = () => {
  const allTherapists = users.data.map(user => {
    const lastName = formatNames(user.lname);
    const firstName = formatNames(user.fname);
    return `<li class="user-name">${lastName}, ${firstName}</li>`
  });

  usersList.innerHTML = allTherapists.join('');
}

window.addEventListener('load', () => {
  displayUsers();
})