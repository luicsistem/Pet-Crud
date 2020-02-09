import Pet from "./scripts/pet.js"

//instanciando objects


const elem = document.getElementById("comics")

// muestra pets en el dom
function showPets (pet){
    const son = document.createElement("div")
    son.classList.add("m-3")
son.innerHTML = `
<div class="card" style="width: 18rem;">
  <img src="${pet.getPoster()}" class="card-img-top " alt="">
  <div class="card-body">
   
    <p class="card-text"> <strong> Name</strong>: ${pet.getName()} </p>
    <p class="card-text"> <strong> LastName</strong>: ${pet.getLastName()} </p>
    <a href="#" class=" btn btn-danger "  name="delete" >Delete</a>
   
  </div>
</div>
`
elem.appendChild(son)

}

const forms = document.getElementById('pet-form')
forms.addEventListener("submit", e => {
e.preventDefault()
const target = e.target
const pet1 = new Pet(target.name.value, target.url.value, target.lastname.value)
 showPets(pet1)
// console.log(target.name.value);
// console.log(target.lastname.value);
// console.log(target.url.value);



})
 


document.getElementById("year").innerHTML = new Date().getFullYear();