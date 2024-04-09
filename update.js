
const queryString = window.location.search;
const params = new URLSearchParams(queryString)
const chosenSong = params.get("song")



// function updateSong(song) {
//     const rollDetail = rolls[roll];
//     const rollName = roll;
//     console.log(roll);
//     const rollPrice = rollDetail.basePrice;
//     const rollImagePath = rollDetail.imageFile;

//     document.querySelector(".chosen-image").src = "images/products/" + rollImagePath; 
//     document.querySelector(".title").textContent = rollName + " Cinnamon Roll";
//     document.querySelector(".price").textContent = "$" + rollPrice


// }

// updateRoll(chosenSong)