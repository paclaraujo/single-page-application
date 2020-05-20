import routes from './routes.js';

const container = document.querySelector('#root');

const init = () => window.addEventListener('hashchange', renderPage);
const validateHash = (hash) => hash === ""  ? 'home' : hash.replace('#', '');

const renderPage = () => {
  const page = validateHash(window.location.hash);
  container.innerHTML = '';
  container.appendChild(routes[page]);
}

window.addEventListener('load', ()=> {
  renderPage();
  init();
});