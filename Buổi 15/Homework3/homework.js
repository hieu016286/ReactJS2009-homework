const pokemons = [
  { id: 1, name: 'Charmander', hp: 39, atk: 52, image: "charmander.jpg" },
  { id: 2, name: 'Pikachu', hp: 35, atk: 55, image: "pikachu.jpg" },
  { id: 3, name: 'Squirtle', hp: 44, atk: 48, image: "squirtle.jpg" },
  { id: 4, name: 'Bulbasaur', hp: 45, atk: 49, image: "bulbasaur.jpg" },

  { id: 5, name: 'Mew', hp: 100, atk: 100, image: "mew.jpg" },
  { id: 6, name: 'Pidgey', hp: 40, atk: 45, image: "pidgey.jpg" },
  { id: 7, name: 'Abra', hp: 25, atk: 20, image: "abra.jpg" },
  { id: 8, name: 'Snorlax', hp: 160, atk: 110, image: "snorlax.jpg" },

  { id: 9, name: 'Caterpie', hp: 45, atk: 30, image: "caterpie.jpg" },
  { id: 10, name: 'Dratini', hp: 41, atk: 64, image: "dratini.jpg" },
  { id: 11, name: 'Eevee', hp: 55, atk: 55, image: "eevee.jpg" },
  { id: 12, name: 'Jigglypuff', hp: 115, atk: 45, image: "jigglypuff.jpg" }
]



const renderPokemon = (div, pokemons) => {
  pokemons.forEach((element, index)=> {
      const smallDiv = document.createElement('div')
      smallDiv.innerHTML = `<img data-count="${index}" class="style-img" onclick="Zoom(this)" src="${element.image}">`
      smallDiv.classList.add('col-md-3')
      div.appendChild(smallDiv)
  })
}


const Zoom = (imgSelect) => {
  const count = imgSelect.getAttribute('data-count')
  const info = document.getElementById('info-pokemon')
  info.innerHTML = `<img class="style-img-info rounded mx-auto d-block mt-2" src="${pokemons[count].image}">
                    <p class="text-center">${pokemons[count].name}</p>
                    <p class="text-center">HP : ${pokemons[count].hp}</p>
                    <p class="text-center">ATK : ${pokemons[count].atk}</p>
                    <button data-count="${count}" type="button" class="btn btn-success center" onclick="addPokemon(this)">ADD</button>`                     
}

const addPokemon = (btnAdd) => {
  const y = btnAdd.getAttribute('data-count')
  const x = document.querySelectorAll('#selectPokemon > .col-md-2')
  
  for(i=0;i<x.length;i++) {
      if(!x[i].hasChildNodes()) {
          x[i].innerHTML = `<img class="style-img-info-2 absolute" src="${pokemons[y].image}">`
          break
      }
  }
}


const renderMenu = () => {
  const div = document.createElement('div')
  div.classList.add('row')
  renderPokemon(div, pokemons)
  const menu = document.getElementById('menu')
  menu.appendChild(div)
}
renderMenu()