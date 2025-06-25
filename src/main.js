const input = document.querySelector('.search__input');
const button = document.querySelector('.search__button');
const themeBtn = document.querySelector('.header__theme-btn');
const body = document.body;

const avatar = document.querySelector('.profile__avatar');
const name = document.querySelector('.profile__name');
const username = document.querySelector('.profile__username');
const bio = document.querySelector('.profile__bio');
const repos = document.querySelector('.profile__repos');
const followers = document.querySelector('.profile__followers');
const following = document.querySelector('.profile__following');

themeBtn.addEventListener('click', () => {
  body.classList.toggle('dark');
  themeBtn.textContent = body.classList.contains('dark') ? 'Light' : 'Dark';
});

button.addEventListener('click', async () => {
  const usernameInput = input.value.trim();
  if (!usernameInput) return;

  const res = await fetch(`https://api.github.com/users/${usernameInput}`);
  const data = await res.json();

  avatar.src = data.avatar_url;
  name.textContent = data.name;
  username.textContent = `@${data.login}`;
  bio.textContent = data.bio;
  repos.textContent = data.public_repos;
  followers.textContent = data.followers;
  following.textContent = data.following;
});
