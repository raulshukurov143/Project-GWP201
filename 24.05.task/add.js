let form = document.querySelector("#form");
let addBtn=document.querySelector("#add")
let fileInput = document.querySelector("#file");
let nameInput = document.querySelector("#name");
let titleInput = document.querySelector("#title");
let priceInput = document.querySelector("#price");
let BASE_JSON = `http://localhost:8500/Works`;

form.addEventListener("submit", async function (e) {
  e.preventDefault();
  let obj = {
    img: `./img/${fileInput.value.split("\\")[2]}`,
    name: nameInput.value,
    title: titleInput.value,

    price: priceInput.value,
  };

  await axios.post(BASE_JSON, obj);

  window.location.href = `./index.html`;
});
