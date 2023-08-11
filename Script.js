async function getUser() {
  const userInput = document.querySelector("#text").value;
  const apiUrl = `https://api.github.com/users/${userInput}`;
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new error("User not found");
    }
    const data = await response.json();
    console.log(data);
    displayUser(data);
  } catch (error) {
    alert(error);
  }
}
function displayUser(git) {
  document.querySelector("section").innerHTML = `
    <div class="profile-cont">
    <div class="img-cont">
        <img src="${git.avatar_url}" />
        <a href="${git.html_url}">View profile</a>
    </div>
    <div class="profile-details">
        <h1 class="name">${git.name}</h1>
        <h3 class="username">${git.login}</h3>
        <p class="bio">${
          git.bio ? data.bio : "This account does not have bio"
        }</p>
        <div class="stats">
            <div>
                <div class="stats-name">Public repos</div>
                <div class="stats-name">${git.public_repos}</div>
            </div>
            <div>
                <div class="stats-name">Followers</div>
                <div class="stats-name">${git.followers}</div>
            </div>
            <div>
                <div class="stats-name">Following</div>
                <div class="stats-name">${git.following}</div>
            </div>
        </div>
        <div class="media">
            <div>
                <i class="fas fas fa-map-marker-alt"></i>
                <h4 class="media_name">${
                  git.location ? data.location : "Not available"
                }</h4>
            </div>
            <div>
                <i class="fas fa-link"></i>
                <h4 class="media_name">${
                  git.blog ? data.blog : "Not available"
                }</h4>
            </div>
            <div>
                <i class="fab fa-twitter"></i>
                <h4 class="media_name">${
                  git.twitter ? data.twitter : "Not available"
                }</h4>
            </div>
            <div>
                <i class="fas fas fa-building"></i>
                <h4 class="media_name">${
                  git.location ? data.location : "Not available"
                }</h4>
            </div>
        </div>
    </div>
</div>
    `;
}
// console.log(Section);
