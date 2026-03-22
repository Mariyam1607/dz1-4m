const cardList = document.querySelector(".card-list")

const BASE_API = 'https://jsonplaceholder.typicode.com/posts'

async function getPosts () {
    try {
        const response = await fetch(BASE_API)
        const data = await response.json()

        const limitedPosts = data.slice(0, 6)

        renderCards(limitedPosts)
    } catch (e) {
        console.log(e)
    }
}

function renderCards(posts) {
    cardList.innerHTML = posts.map(post => `
    <div class="card">
    <div class="photo">
    <img src="https://pohcdn.com/sites/default/files/styles/paragraph__hero_banner__hb_image__1880bp/public/hero_banner/bosphorus.jpg?random=${post.id}" alt="img">
    </div>
    <h3>${post.title}</h3>
    <p>${post.title}</p>
</div>
    `).join('')
}
getPosts()