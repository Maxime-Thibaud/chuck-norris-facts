function fetchGitHubProfileJSON() {
  const username = 'defunkt';
  const url = `https://api.github.com/users/${username}`;
  fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(profile) {
      const profileHtml = `
        <p><strong>${profile.name}</strong></p>
        <img src="${profile.avatar_url}" />
      `;
      document.querySelector('#github-profile').innerHTML = profileHtml;
    });
}

fetchGitHubProfileJSON();