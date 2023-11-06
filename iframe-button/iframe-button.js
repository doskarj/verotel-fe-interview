var dogData;

// Init first image load
generateDogButton();

async function generateDogButton() {
  try {
    var response = await fetch("https://dog.ceo/api/breeds/image/random");
    dogData = await response.json();
  } catch (error) {
    console.error(error);
  }

  var frames = window.parent.frames;
  for (var i = 0; i < frames.length; i++) {
    frames[i].postMessage(dogData, "*");
  }
}
