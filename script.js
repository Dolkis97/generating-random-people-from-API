const getUsers = (e) => {
  e.preventDefault();
  const userGender = document.querySelector('.generator__select').value;
  const userNumbers = document.querySelector('.generator__input').value;

  const url = `https://randomuser.me/api/?results=${userNumbers}&gender=${userGender}`;
  fetch(url)
    .then((response) => {
      if (response.status !== 200) {
        throw Error('coś poszło nie tak...');
      } else {
        return response.json();
      }
    })
    .then((res) => showUser(res.results))
    .catch((err) => console.log(err));
};
const showUser = (users) => {
  const div = document.querySelector('.userList');
  users.forEach((user) => {
    console.log(user);
    const item = document.createElement('div');
    item.className = 'user';
    item.innerHTML = `
   <img class="user__image" src="${user.picture.medium}" alt="picture">
   <div class='user_name'>${user.name.title.toUpperCase()} ${user.name.first} ${
      user.name.last
    }</div>
   `;
    div.append(item);
    console.log(item);
  });
};
document.querySelector('.generator').addEventListener('submit', getUsers);
