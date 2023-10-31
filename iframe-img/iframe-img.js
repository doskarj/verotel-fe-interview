// Listen for localStorage change to generate new dog img
window.addEventListener("storage", () => {
  generateDogImage();
});

// Init first image load
generateDogImage();

async function generateDogImage() {
  var parsedData = JSON.parse(window.localStorage.dogData);
  try {
    if (parsedData.status == "success") {
      document.getElementById("dog-image").src = parsedData.message;
    } else {
      throw "Something went wrong!";
    }
  } catch (error) {
    console.error(error);
  }
}
