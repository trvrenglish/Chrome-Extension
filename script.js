const API_KEY = "coYAD2TZ6spxj5ghFwIPjMnIHJnkdhNXtOmdhxPp";
async function fetchData() {
  res = fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
    .then((response) => response.json())
    .then((data) => {
      const title = data["title"];
      const imageUrl = data["url"];
      const copyright = data["copyright"];
      const explanation = data["explanation"];
      const date = data["date"];
      console.log(data);
      document.getElementById("title").innerHTML =
        `<h1 class="display-4">${title}<h1>`;
      document.getElementById("copyright").innerHTML =
        `<p><b>© Copyright by ${copyright}. ${date}. All rights reserved.</b></p>`;
      document.getElementById("explanation").innerHTML = `<p>${explanation}<p>`;

      document.getElementById("image_url").innerHTML =
        `<img class="img-fluid" src="${imageUrl}" alt="Image">`;
    })
    .catch((error) => console.error(error));
}

fetchData();
