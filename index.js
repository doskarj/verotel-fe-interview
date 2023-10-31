// Úkol 1: Použij API, GET na https://dog.ceo/api/breeds/image/random na získání náhodného obrázku psa.

window.onload = function () {
  generateDog();
};

async function generateDog() {
  try {
    var response = await fetch("https://dog.ceo/api/breeds/image/random");
    var data = await response.json();

    // TODO: ask what data.status exactly does?
    if (data.status) {
      console.log(data);
      document.getElementById("dog-image").src = data.message;
    } else {
      throw "Something went wrong!";
    }
  } catch (error) {
    console.error(error);
  }
}
