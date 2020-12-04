/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
axios
  .get(`https://dog.ceo/api/breed/pug/images/random/12`)
  .then((res) => {
    console.log(res);
    // const images = res.data;
  })
  .catch((res) => {
    debugger;
  })

// axios
//   .get(`https://dog.ceo/api/breed/pug/images/random/15`)
//   .then((res) => {
//     const images = res.data.message;
//     // loop over the array of images
//     images.forEach((image) => {
//       // create dog card
//       const newDogCard = dogCardMaker({ imageURL: image, breed: "pug" });
//       // console log done
//       console.log("done");
//       // append to entry point
//       entryPoint.appendChild(newDogCard);
//     });
//   })
//   .catch((err) => {
//     debugger;
//   });
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card"> //card
      <img src={image url of user} /> // cardImage
      <div class="card-info">  // cardInfo
        <h3 class="name">{users name}</h3> // cardTitle
        <p class="username">{users user name}</p> // cardUsename
        <p>Location: {users location}</p> // cardLocation
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>  // cardProfileURL
        <p>Followers: {users followers count}</p>  //cardFollowers
        <p>Following: {users following count}</p>  //CardFollowing
        <p>Bio: {users bio}</p>  // cardBio
      </div>
    </div>
*/
function panelMaker({ title }) {

  //create
  const card = document.createElement("div");
  const cardImage = document.createElement("img");
  const cardInfo = document.createElement("div");
  const cardName = document.createElement("h3");
  const cardUsername = document.createElement("p");
  const cardLocation = document.createElement("p");
  const cardProfileURL = document.createElement("p");
  const cardFollowers = document.createElement("p");
  const cardFollowing = document.createElement("p");
  const cardBio = document.createElement("p");

  //setup

  card.appendChild(cardImage);
  card.appendChild(cardInfo);
  cardInfo.appendChild(cardName);
  cardInfo.appendChild(cardUsername);
  cardInfo.appendChild(cardLocation);
  cardInfo.appendChild(cardProfileURL);
  cardInfo.appendChild(cardFollowers);
  cardInfo.appendChild(cardFollowing);
  cardInfo.appendChild(cardBio);
  //classname
  card.classList.add("card");
  cardInfo.classList.add("card-info");
  cardName.classList.add("name");
  cardUsername.classList.add("username");


  //textContext


}


/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
