'use strict';

document.addEventListener('DOMContentLoaded', () => {

    const API = 'https://www.acefrontend.com/c/critter/feed.json';

    function createCardTemplate(userData, month, number) {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
        <div class="card-top">
        <img src="${userData.user.avatar}" alt="${userData.user.username}">
        <h3 class="username">${userData.user.username}</h3>
        <h3 class="created">${month} ${number}</h3>
        </div>
        <div class="card-body">
            <article>
                <p>
                    ${userData.text}
                </p>
            </article>
        </div>
        <div class="card-footer">
            <h4>Likes: ${userData.likes}</h4>
        </div>
        `;
        document.getElementById('creets').appendChild(card);
    }

    async function getUsersData(api) {
        const userData = await fetch(api);
        const responseData = await userData.json();
        responseData.feed.forEach((data) => {
            const string = data.created_at;
            const date = string.split(' ');
            const month = date[1];
            const number = date[2];
            createCardTemplate(data, month, number);
        });
    }

    getUsersData(API);

});