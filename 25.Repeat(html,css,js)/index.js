let tBody=document.querySelector("tbody")

async function createTable(arr){
    arr.forEach(element => {
        tBody.innerHTML+=`
        <tr>
                <td>${element.id}</td>
                <td><img src="" alt=""></td>
                <td>${element.firstname}</td>
                <td>${element.lastname}</td>
                <td>${element.email}</td>
                <td>5/14/2023,4:12:58 PM</td>
                <td>
                    <button class="btn btn-success" href="editUser.html?id=${element.id}">Edit</button>
                    <button class="btn btn-danger" id=${element.id} onclick=deleteFun(${element.id},this)>Delete</button>
                    <button class="btn btn-primary" id=${element.id} onclick=addFav(${element.id})>Add Fav</button>
                </td>
            </tr>

        `
        
    });


}
axios(`http://localhost:8000/users`).then((res)=>{
    createTable(res.data)
})

async function deleteFun(id){
    await axios.delete(`http://localhost:8000/users/${id}`)
}

async function addFav(){
  window.location.href=`AddFav.html`
}
async function editFun(){
  window.location.href=`editUser.html`
}