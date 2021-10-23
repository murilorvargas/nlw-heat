const userSocialMedia = {
  github: `murilorvargas`,
  youtbe: `RocketSeat`,
  instagram: `muri_raubach`,
  facebook: `murilo.raubach`,
  twitter: `MuriloRVargas`
}

const changeSocialMediaLinks = () => {
  for (let li of socialLinks.children) {
    const social = li.getAttribute(`class`)
    li.children[0].href = `https://www.${social}.com/${userSocialMedia[social]}`
  }
}

const getGithubProfileInfos = () => {
  const url = `https://api.github.com/users/${userSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userAvatar.src = data.avatar_url
      userName.textContent = data.name
      userGithubLink.href = data.html_url
      userGithubLink.lastChild.textContent = data.login
      userBio.textContent = data.bio
    })
}

changeSocialMediaLinks()
getGithubProfileInfos()
