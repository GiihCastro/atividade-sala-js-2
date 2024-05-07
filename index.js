const button = document.querySelector('button')

button.addEventListener('click',function(e) {
  console.log(e)
  document.querySelector('h1').classList.toggle('sumiu')
})

let name = prompt('Por favor, escreva seu nome!')

if (name) {
  p = document.createElement("p");
  
  p.textContent = `Boas vindas, ${name}!`

  document.body.appendChild(p)

} else {
  console.log("Você não digitou um nome.")
}