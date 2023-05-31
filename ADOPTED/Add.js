let form=document.querySelector("#form")
let fileInput=document.querySelector("#file")
let nameInput=document.querySelector("#name")
let ageInput=document.querySelector("#age")


// function check(){
//     if(fileInput.value && nameInput.value && ageInput.value){
//         submitBtn.removeAttribute("disabled","")
//     }else{
//         submitBtn.setAttribute("disabled","")
//     }
// }
// check();
// fileInput.addEventListener("input",function(){
//     check();
// })
// nameInput.addEventListener("input",function(){
//     check();
// })
// ageInput.addEventListener("input",function(){
//     check();
// })
form.addEventListener("submit",async function(e){
    e.preventDefault();
    let obj={
        img:`./img/${fileInput.value.split("\\")[2]}`,
        name:nameInput.value,
        age:ageInput.value,
        
    };
    
    await axios.post(`http://localhost:8400/Users`,obj)

    window.location.href=`./index.html`
    })