let row = document.querySelector("#rowId");
let search = document.querySelector("#search");
let sortBtn = document.querySelector("#sortBtn");

function createCard(arr) {
  row.innerHTML = ``;
  arr.forEach((element) => {
    row.innerHTML += `
    <div class="col col-12 col-md-6 col-lg-4 " id="cardId">
            <span class="card" style="width: 18rem;">
                <img src="${element.img}" class="card-img-top" alt="...">
                <div class="card-body d-flex gap-3">
                  <p class="card-text">${element.name}</p>
                  <p class=>${element.age} yrs.old</p>
                  
                  </div>
                  <div>
                  <button class="btn btn-danger" onclick=deleteFun(${element.id},this) id=${element.id}>DELETE</button>
                  <a href="./edit.html" class="btn btn-success" onclick=editFun(${element.id} id=${element.id})>Edit</a>
                  <a href="" class="btn btn-primary">Fav  </a>
                  
                  
                  </div>
              </span>
        </div>
    `;
  });
}
axios(`http://localhost:8400/Users`).then((res) => {
  createCard(res.data);
});

async function deleteFun(id, btn) {
  await axios.delete(`http://localhost:8400/Users/${id}`).then((res) => {
    btn.closest("span").remove();
  });
}

search.addEventListener("input", function (e) {
  axios(`http://localhost:8400/Users`).then((res) => {
    let filteredData = res.data.filter((el) =>
      el.name.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
    );
    createCard(filteredData);
  });
});
sortBtn.addEventListener("click", function () {
  if (sortBtn.innerHTML == `ascending`) {
    axios(`http://localhost:8400/Users`).then((res) => {
      let ascSort = res.data.sort((a, b) => a.age - b.age);
      createCard(ascSort);
    });
    this.innerHTML = `descending`;
  } else if (sortBtn.innerHTML == `descending`) {
    axios(`http://localhost:8400/Users`).then((res) => {
      let desSort = res.data.sort((a, b) => b.age - a.age);
      createCard(desSort);
    });
    this.innerHTML = `default`;
  } else {
    axios(`http://localhost:8400/Users`).then((res) => {
      createCard(res.data);
    });
    this.innerHTML = `Ascending`;
  }
});

