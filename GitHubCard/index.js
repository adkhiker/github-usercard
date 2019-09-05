/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
// Make a request for a user with a given ID

// axios.get('https://api.github.com/users/adkhiker');

axios
  .get("https://api.github.com/users/adkhiker")
  .then(data => {
    const user = data.data;
    const container = document.querySelector(".cards");
    container.appendChild(gitHubCard(user));
    console.log("API Data", data.data);
  })
  .catch(error => {
    console.log("API Error", error);
  });


const followersArray = [
  "https://api.github.com/users/fskeen",
  "https://api.github.com/users/ehalsmer",
  "https://api.github.com/users/DeejayEaster",
  "https://api.github.com/users/lisaMTayl",
  "https://api.github.com/users/BNMoyers"
];

followersArray.forEach(follower => {
  axios
    .get(follower)
    .then(data => {
      const user = data.data;
      const container = document.querySelector(".cards");
      container.appendChild(gitHubCard(user));
      console.log("API Data", data.data);
    })
    .catch(error => {
      console.log("API Error", error);
    });
});

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>
*/

function gitHubCard(user) {
  const card = document.createElement("div");
  const userImg = document.createElement("img");
  const userInfo = document.createElement("div");
  const usersName = document.createElement("h3");
  const usersUserName = document.createElement("p");
  const userLocation = document.createElement("p");
  const userProfile = document.createElement("p");
  const userProfileLink = document.createElement("a");
  const userFollowers = document.createElement("p");
  const userFollowing = document.createElement("p");
  const userBio = document.createElement("p");

  card.classList.add("card");
  userInfo.classList.add("card-info");
  usersName.classList.add("name");
  usersUserName.classList.add("username");

  userImg.src = user.avatar_url;
  usersName.textContent = user.name;
  usersUserName.textContent = user.login;
  userLocation.textContent = user.location;
  userProfile.textContent = "Profile: ";
  userProfileLink.textContent = user.html_url;
  userProfileLink.href = user.html_url;
  userFollowers.textContent = `Followers: ${user.followers}`;
  userFollowing.textContent = `Following: ${user.following}`;
  userBio.textContent = user.bio;

  userProfile.appendChild(userProfileLink);
  userInfo.appendChild(usersName);
  userInfo.appendChild(usersUserName);
  userInfo.appendChild(userLocation);
  userInfo.appendChild(userProfile);
  userInfo.appendChild(userFollowers);
  userInfo.appendChild(userFollowing);
  userInfo.appendChild(userBio);

  card.appendChild(userImg);
  card.appendChild(userInfo);

  return card;
}

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
