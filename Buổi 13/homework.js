// Ex-1
const calSum = () => {
  let x = Number(document.getElementById('num-1').value)
  let y = Number(document.getElementById('num-2').value)
  document.getElementById('sum').innerHTML = x + y
}

// Ex-2
function changeColor() {
  const test = document.getElementById('test')
  if(test.style.backgroundColor == 'red') {
    test.style.backgroundColor = 'green'
  } else {
    test.style.backgroundColor = 'red'
  }
}


// Ex-3
const obj = {
  laptop: ['Macbook','Dell','Lenovo','Asus'],
  phone: ['Apple','SamSung','Nokia'],
  tivi: ['LG','Sony']
}
const dienmayxanh = document.getElementById('dienmayxanh')
dienmayxanh.addEventListener('change',function() {
  show(dienmayxanh.value)
})
show('laptop')
function show(a) {
  document.getElementById('showOpt').innerHTML = ''
  obj[a].forEach(element => {
    document.getElementById('showOpt').innerHTML += `<li>${element}</li>`
  })
} 


// Ex-4 
const toggler = document.getElementsByClassName('title')
for (i = 0; i < toggler.length; i++) {
  toggler[i].addEventListener('click', function() {
    this.parentElement.querySelector('.nested').classList.toggle("active")
  })
}
