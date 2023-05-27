let container=document.querySelector("#con")



async function createFavCard(arr){
    arr.forEach(el => {
        container.innerHTML+=`
        <div class="card" style="width: 16rem;">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${el.firstname}</h5><hr>
          <p class="card-text">${el.lastname}</p>
          <p class="card-text">${el.email}</p>
          <a href="#" class="btn btn-primary">Remove fav</a>
        </div>
      </div>

        `
        
    });


}
axios(`http://localhost:8000/users`).then((res)=>{
    createFavCard(res.data)
})