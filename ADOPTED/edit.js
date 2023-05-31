let form=document.querySelector("#form")
let fileInput=document.querySelector("#file")
let nameInput=document.querySelector("#name")
let ageInput=document.querySelector("#age")


let id = new URLSearchParams(window.location.search).get("id");

axios(`http://localhost:8400/Users`).then(res=>{


nameInput.value=res.data.name
ageInput.value=res.data.age
})
form.addEventListener("click",function(e){
    e.preventDefault()
    let editCard={
        img:`./img/${fileInput.value.split("\\")[2]}`,
        name:nameInput.value,
        age:ageInput.value,
    }
    axios.patch(`http://localhost:8400/Users/${id}`,editCard)
    window.location=`./index.html`
})