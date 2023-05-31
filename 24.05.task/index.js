let row = document.querySelector("#cardRow");
let search = document.querySelector("#searchInput");
let sortBtn = document.querySelector("#sort");
let BASE_JSON = `http://localhost:8500/Works`;

function createCard(arr) {
  row.innerHTML = ``;
  arr.forEach((element) => {
    row.innerHTML += `
        <div class="col col-12 col-md-6 col-lg-3">
        <span class="card">
          <div class="img">  <img src="${element.img}" alt=""></div><br><br>
            <h2>${element.name}</h2>
            <p>${element.title}</p>
            <p>${element.price}</p>
            <button class="button" >More Details</button><br>
            <button id class="btn btn-danger" onclick=deleteFun(${element.id},this) id=${element.id} > Delete</button><br>
            <button id class="btn btn-primary" onclick=FavFun(${element.id},this) id=${element.id} > Fav</button><br>
            <a href="add.html?${element.id}" class="btn btn-success "> edit</a>

            
            
        </span>
    </div>`;
  });
}
axios(BASE_JSON).then((res) => {
  createCard(res.data);
});

search.addEventListener("input", function (e) {
  axios(BASE_JSON).then((res) => {
    let filteredData = res.data.filter((el) =>
      el.name.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
    );
    createCard(filteredData);
  });
});

sortBtn.addEventListener("click", function () {
  if (sortBtn.innerHTML == "ascending") {
    axios(BASE_JSON).then((res) => {
      let ascSort = res.data.sort((a, b) => a.price - b.price);
      createCard(ascSort);
      console.log("if", ascSort);
    });
    sortBtn.innerHTML = "descending";

  } else if (sortBtn.innerHTML == "descending") {
    axios(BASE_JSON).then((res) => {
      let desSort = res.data.sort((a, b) => b.price - a.price);
      createCard(desSort);
      console.log("else", desSort);
    });
    sortBtn.innerHTML = "ascending";
  }

});

async function deleteFun(id, btn) {
  await axios.delete(`${BASE_JSON}/${id}`);
  btn.closest(`span`).remove();
}
