const button = document.querySelector('button')

const table = document.getElementById('inventory');

button.addEventListener('click',function(e) {
  console.log(e)
  document.querySelector('h1').classList.toggle('sumiu')
})

button.addEventListener('click',function(e) {
let name = prompt('Por favor, escreva seu nome!')

if (name) {
  let row = table.insertRow(-1)
  let cell = row.insertCell(0)
  
  cell.textContent = `Boas vindas, ${name}!`

  document.body.appendChild(cell)


} else {
  console.log("Você não digitou um nome.")
}
})
