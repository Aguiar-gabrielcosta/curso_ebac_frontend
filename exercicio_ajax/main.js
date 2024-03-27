document.addEventListener('DOMContentLoaded', () => {
    const avatar = document.querySelector('.profile-avatar')
    const name = document.querySelector('.profile-name')
    const username = document.querySelector('.profile-username')
    const nRepo = document.querySelector('#nRepositorios')
    const nFollowers = document.querySelector('#nSeguidores')
    const nFollowing = document.querySelector('#nSeguindo')
    const gitLink = document.querySelector('.profile-link')

    const url = 'https://api.github.com/users/Aguiar-gabrielcosta'

    fetch(url)
    .then((res) => {
        if (res.status === 200) {
            return res.json()
        } else {
            throw new Error ('Não foi possível recuperar os dados do usuário, tente novamente mais tarde.')
        }
    })
    .then((data) => {
        avatar.src = data.avatar_url
        name.innerText = data.name
        username.innerText = data.login
        nRepo.innerText = data.public_repos
        nFollowers.innerText = data.followers
        nFollowing.innerText = data.following
        gitLink.href = data.html_url
    })
    .catch((e) => {
        alert(e);
    })
})