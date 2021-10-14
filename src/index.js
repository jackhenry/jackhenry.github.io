import posts from './posts';

const postContainer = document.getElementById('posts');

posts.forEach(post => {
    const postEntry = document.createElement('div');
    postEntry.setAttribute('id', 'post-entry');

    const postDateElement = document.createElement('span');
    postDateElement.innerHTML = `${post['fdate']}`
    postDateElement.setAttribute('id', 'post-date')

    const postTitleElement = document.createElement('a');
    postTitleElement.innerHTML = `${post['title']}`;
    postTitleElement.href = post['path'];
    postTitleElement.setAttribute('id', 'post-title')

    postEntry.appendChild(postDateElement);
    postEntry.appendChild(postTitleElement);
    postContainer.appendChild(postEntry);
})