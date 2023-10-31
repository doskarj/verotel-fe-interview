var dogData;

async function generateDogButton() {
  try {
    var response = await fetch("https://dog.ceo/api/breeds/image/random");
    dogData = await response.json();

    // Save fetched data to local storage as JSON
    localStorage.setItem("dogData", JSON.stringify(dogData));
  } catch (error) {
    console.error(error);
  }
}
