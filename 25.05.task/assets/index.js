let row =document.querySelector("#dinamic-row")
let search = document.querySelector("#search");
let sortBtn = document.querySelector("#sortBtn")


function createCard(arr){
    row.innerHTML=``;
    arr.forEach(element => {
        row.innerHTML+=`
        <div class="col mx-3 col-lg-3">
            <div class="card" style="width: 16rem;">
              <img src="${element.img}" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="text-center">${element.name}</h5>
                <p class="card-text text-center">${element.title}</p>
                <p>${element.price}</p>
                <button class=" my-3">VIEW DETAILS</button>
                <div class="card-icon">
                  <i class="fa-regular fa-pen-to-square"></i>
                  <i class="fa-solid fa-trash"></i>
                  <i class="fa-regular fa-star"></i>
                  <i class="fa-solid fa-plus"></i>
                </div>
                

              </div>
            </div>
          </div>

        `
        
    });
}
axios(`http://localhost:8600/robots`).then(res=>{
    createCard(res.data)
})




sortBtn.addEventListener("click", function () {
    if (sortBtn.innerHTML == `ascending`) {
      axios(`http://localhost:8600/robots`).then((res) => {
        let ascSort = res.data.sort((a, b) => a.price - b.price);
        createCard(ascSort);
      });
      sortBtn.innerHTML = `descending`;
    } else if (sortBtn.innerHTML == `descending`) {
      axios(`http://localhost:8600/robots`).then((res) => {
        let desSort = res.data.sort((a, b) => b.price - a.price);
        createCard(desSort);
      });
      sortBtn.innerHTML = `ascending`;
    } 
  });
  





  search.addEventListener("input", function (e) {
    axios(`http://localhost:8600/robots`).then((res) => {
      let filteredData = res.data.filter((el) =>
        el.name.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
      );
      createCard(filteredData);
    });
  });