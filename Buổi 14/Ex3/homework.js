const menuDeep = [
  {
      time: 1934,
      qoute: 'QWERTYUIOP'
  },
  {
      time: 1937,
      qoute: 'ASDFGHJKL'
  },
  {
      time: 1940,
      qoute: 'ZXCVBNM'
  }
]

const createTimeLine = (parent, menu) => {
  menu.forEach(element => {
    const li = document.createElement('li')
    li.innerHTML = `<p>${element.time}</p>
                    <p>${element.qoute}</p>`
    const triangle = document.createElement('div')
    if(element.time % 2 == 0) {
      triangle.className = 'triangle-left'
    } else {
      triangle.className = 'triangle-right'
    }
    li.appendChild(triangle)
    parent.appendChild(li)
  })
}


const renderMenu = () => {
  const parent = document.createElement('ul')
  parent.className = 'parent'
  createTimeLine(parent, menuDeep)
  const menu = document.getElementById('menu')
  menu.appendChild(parent)
}
renderMenu()