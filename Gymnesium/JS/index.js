let BASE_JSON = ` http://localhost:8700/gym`;
let row = document.querySelector("#card");
let searchInput = document.querySelector("#search");
let loadMore = document.querySelector("#load");
let sort = document.querySelector("#sort");
// let maxLength = 3;
let allData = [];
let searchData = [];
// let sortedData = [];

async function createCard(arr) {
  row.innerHTML = ``;
  arr.forEach((element) => {
    row.innerHTML += `
         <span class="card  col col-12 col-md-6 col-lg-4">
                    <img src="${element.img}" alt=""><br>
                    <h2 class="text-center">${element.name}</h2>
                    <p class="text-center">${element.title}</p>
                    <p class="text-center">${element.price}</p>
                     <a class="btn btn-success" href="add.html?id=${element.id}"><i aria-col  class="fa-regular fa-pen-to-square "></i></a>
                    <i class="fa-solid fa-heart btn btn-primary my-3" onclick=favFunc(${element.id})></i>
                    <i class="fa-solid fa-trash-can btn btn-danger" onclick=deleteFunc(${element.id},this) ></i>
                </span> `;
  });
}
async function getAllData() {
  let res = await axios(BASE_JSON);
  let data = res.data;
  allData = data;
  searchData = searchInput.value ? searchData : allData;
  createCard(searchData);
}
getAllData();

async function deleteFunc(id, btn) {
  await axios.delete(`${BASE_JSON}/${id}`);
  btn.closest("span").remove();
}

// loadMore.addEventListener("click", async function () {
//   maxLength = maxLength + 4;
//   if (maxLength >= searchData.length) {
//     loadMore.style.display = "none";
//   } else {
//     getAllData();
//     console.log(maxLength);
//   }
// });

sort.addEventListener("click", function () {
  if (sort.innerHTML === "ascending") {
    searchData = searchData.sort((a, b) => a.price - b.price);
    sort.innerHTML = "descending";
  } else if (sort.innerHTML === "descending") {
    searchData = searchData.sort((a, b) => b.price - a.price);

    sort.innerHTML = "ascending";
  }
  // getAllData()
  createCard(searchData.slice(0, maxLength));
});

searchInput.addEventListener("input", function (e) {
  searchData = allData;
  searchData = searchData.filter((element) =>
    element.name.toLowerCase().includes(e.target.value.toLowerCase())
  );
  createCard(searchData.slice(0, maxLength));
});
