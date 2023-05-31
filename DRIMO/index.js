let row=document.querySelector("#createRow")
let sortBtn=document.querySelector("#sort")
let searchInput=document.querySelector("#searchInput")



function createCard(arr){
    row.innerHTML=``;
arr.forEach(element => {
    row.innerHTML+=`<div class="col col-12  col-md-6 col-lg-4  my-3">
    <img src="${element.img}" alt="">
    <h4 class="text-center h4">${element.info}</h2>
        <p class="classP">${element.tittle}</p>
        <p class="classP">${element.price} </p>
<button class="btn btn-danger" onclick=deleteFun(${element.id},this) id=${element.id}>delete</button>
<button class="btn btn-primary" > Add Fav</button>
</div>`
    
});
}
axios(`http://localhost:8200/Users`).then(res=>{
    createCard(res.data)
})

sortBtn.addEventListener("click", function () {
    if (this.innerHTML == "Ascending") {
      axios("http://localhost:8200/Users").then((res) => {
        let sortAsc = res.data.sort((a, b) => a.price - b.price);
       createCard(sortAsc);
      });
      this.innerHTML = "Descending";
    } else if (this.innerHTML == "Descending") {
      axios("http://localhost:8200/Users").then((res) => {
        let sortAsc = res.data.sort((a, b) => b.price - a.price);
       createCard(sortAsc);
      });
      this.innerHTML = "Default";
    } else {
      axios("http://localhost:8200/Users").then((res) => {
        createCard(res.data);
      });
      this.innerHTML = "Ascending";
    }
  });

  
searchInput.addEventListener("input", function (event) {
    axios("http://localhost:8200/Users").then((res) => {
      console.log(event.target.value);
      let filteredData = res.data.filter((item) =>
        item.info
          .toLocaleLowerCase()
          .includes(event.target.value.toLocaleLowerCase())
      );
  
      createCard(filteredData);
    });
  });
async function deleteFun(id,btn){
    await axios.delete(`http://localhost:8200/Users/${id}`);
    btn.closest("div").remove()
}