import posts from './posts';
import projects from './projects';

const postContainer = document.getElementById('regular-posts');
const pinnedPostContainer = document.getElementById('pinned-posts');

posts.forEach((post) => {
  const postEntry = document.createElement('div');
  postEntry.setAttribute('id', 'post-entry');

  const postDateElement = document.createElement('span');
  postDateElement.innerHTML = `${post.fdate}`;
  postDateElement.setAttribute('class', 'post-date');

  const postTitleElement = document.createElement('a');
  postTitleElement.innerHTML = `${post.title}`;
  postTitleElement.href = post.path;
  postTitleElement.setAttribute('id', 'post-title');

  if (post.pin) {
    const pinDiv = document.createElement('span');
    pinDiv.setAttribute('class', 'post-date');
    const pinSvg = document.createElement('img');
    pinSvg.src = './assets/img/pin.svg';
    pinSvg.setAttribute('id', 'pin-svg');
    pinDiv.appendChild(pinSvg);
    postEntry.appendChild(pinDiv);
  } else {
    postEntry.appendChild(postDateElement);
  }

  postEntry.appendChild(postTitleElement);
  if (post.pin) {
    pinnedPostContainer.append(postEntry);
  } else {
    postContainer.appendChild(postEntry);
  }
});
// Inject projects under projects div
const projectContainer = document.getElementById('projects');
projectContainer.innerHTML += projects.reduce((prev, curr) => prev + curr, '');
