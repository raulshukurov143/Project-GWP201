
let form=document.querySelector("#form")
let fileInput=document.querySelector("#fileInput")
let nameInput=document.querySelector("#nameInput")
let title=document.querySelector("#title")
let price=document.querySelector("#price")
let addBtn=document.querySelector("#add")
let BASE_JSON=` http://localhost:8700/gym`
let id=new URLSearchParams(window.location.search).get("id")

if(id){
    addBtn.innerHTML=`Edit`;
    axios(`${BASE_JSON}/${id}`).then(res=>{
        // fileInput.value=res.data.img,
        nameInput.value=res.data.name,
        title.value=res.data.title,
        price.value=res.data.price
    })
}



form.addEventListener("submit",async function(e){
    e.preventDefault();
    let obj={
        id:Date.now(),
        img:`../img/${fileInput.value.split("\\")[2]}`,
        name:nameInput.value,
        title:title.value,
        price:price.value,
        
    };
    if(!id){
      
      fetch(BASE_JSON,{
        method:"POST",
        headers:{
            "Content-Type":"application.json",
        },
        body:JSON.stringify(obj),
      }).then(()=>{
        window.location.href="./index.html"
      })
    }else{
        fetch(BASE_JSON,{
            method:"PATCH",
            headers:{
                "Content-Type":"application.json",
            },
            body:JSON.stringify(obj),
          }).then(()=>{
            window.location.href="./index.html"
          })

    }
    
    });
