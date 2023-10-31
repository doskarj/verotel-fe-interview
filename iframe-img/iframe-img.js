window.addEventListener("message", function (event) {
  generateDogImage(event.data);
});

async function generateDogImage(data) {
  try {
    if (data.status == "success") {
      document.getElementById("dog-image").src = data.message;
    } else {
      throw "Something went wrong!";
    }
  } catch (error) {
    console.error(error);
  }
}
