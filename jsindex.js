const button = document.querySelector("#searchButton");
const image = document.querySelector("#catImage");

button.addEventListener("click", e => {
  e.preventDefault();
  displayImage();
});

const getData = async () => {
  const apiCall = await fetch(`https://api.thecatapi.com/v1/images/search`)
    .then(res => {
      return res.json();
    })
    .then(jsonRes => {
      return jsonRes;
    })
    .catch(err => console.log("error", err));
  return apiCall;
};

displayImage = () => {
  getData().then(res => {
    image.src = res[0].url;
  });
};
