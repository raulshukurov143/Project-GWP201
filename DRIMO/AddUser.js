let form =document.querySelector("#form")
let allInputs=document.querySelector(".form-control")
// let submitBtn=document.querySelector("#submitBtn")


let id = new URLSearchParams(window.location.search).get("id");


function check(){
    if(allInputs[0].value && allInputs[1].value && allInputs){
        submitBtn.removeAttribute("disabled","")
    }else{
        submitBtn.setAttribute("disabled","")
    }
}
check();
allInputs[0].addEventListener("input",function(){
    check();
})
allInputs[1].addEventListener("input",function(){
    check();
})
form.addEventListener("submit",async function(e){
    e.preventDefault();
    let obj={
        info:allInputs[0].value,
        tittle:allInputs[1].value,
        img:`./img/${allInputs[2].value.split("\\")[2]}`,
        price:allInputs[3].value
    };
    
    await axios.post(`http://localhost:8200/Users`,obj)

    window.location.href=`./index.html`
    })
