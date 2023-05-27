let BASE_JSON=`http://localhost:8000/users`
let form=document.querySelector("form")
let firstInput=document.querySelector("#name")
let lastInput=document.querySelector("#sur")
let emailInput=document.querySelector("#email")
let photoInput=document.querySelector("#photo")


 
async function CreateUser(){
    let obj={
        photo: `${photoInput.value.split("\\")[2]}`,
        firstname: firstInput.value,
        lastname:lastInput.value,
        email:emailInput.value,
       
    }
    await axios.post(BASE_JSON,obj)
    createTable()
}
form.addEventListener("submit",async function(e){
    e.preventDefault()
    CreateUser()
    window.location.href=`index.html`
    })