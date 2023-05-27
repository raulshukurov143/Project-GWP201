let BASE_JSON=`http://localhost:8000/users`
let form=document.querySelector("form")
let firstInput=document.querySelector("#name")
let lastInput=document.querySelector("#sur")
let emailInput=document.querySelector("#email")
let photoInput=document.querySelector("#photo")

let id = new URLSearchParams(window.location.search).get("id");

console.log(id);

axios(BASE_JSON,id).then((res) => {
firstInput.value = res.data.firstname;
 lastInput.value = res.data.lastname;
 emailInput.value = res.data.email;

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    let editedTable = {
      firstname: firstInput.value,
    
       
        lastname: lastInput.value,
        email: emailInput.value,
      
    };

    axios.patch(
      BASE_JSON,id,
      editedTable
    );

    window.location.href = "index.html";
  });
});