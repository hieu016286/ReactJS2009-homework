const deepMenu = [
  {
    title: 'Home',
    subTitle: 'sweet home',
    link: '/home',
    icon: 'fa fa-home',
  },
  {
    title: 'About us',
    subTitle: 'sweet home',
    link: '/about-us',
    icon: 'fa fa-edit',
    isActive: true
  },
  {
    title: 'Features',
    subTitle: 'sweet home',
    link: '/features',
    icon: 'fa fa-gift',
  },
  {
    title: 'News',
    subTitle: 'sweet home',
    link: '/news',
    icon: 'fa fa-globe',
  },
  {
    title: 'Blog',
    subTitle: 'what they say',
    link: '/blog',
    icon: 'fa fa-comments-o',
    children: [
      {
        title: 'Mission',
        link: '/blog/mission',
        icon: 'fa fa-globe',
      },
      {
        title: 'Our Team',
        link: '/blog/our-team',
        icon: 'fa fa-group',
        children: [
          {
            title: 'Leyla Sparks',
            link: '/blog/our-team/leyla-sparks',
            icon: 'fa fa-female',
          },
          {
            title: 'Gleb Ismailov',
            link: '/blog/our-team/gleb-ismailov',
            icon: 'fa fa-male',
            children: [
              {
                title: 'About',
                link: '/blog/our-team/gleb-ismailov/about',
                icon: 'fa fa-leaf',
              },
              {
                title: 'Skills',
                link: '/blog/our-team/gleb-ismailov/skills',
                icon: 'fa fa-tasks',
              }
            ]
          },
          {
            title: 'Viktoria Gibbers',
            link: '/blog/our-team/viktoria-gibbers',
            icon: 'fa fa-female',
          },
        ]
      },
    ]
  },
  {
    title: 'Portfolio',
    subTitle: 'sweet home',
    link: '/portfolio',
    icon: 'fa fa-picture-o',
  },
  {
    title: 'Contacts',
    subTitle: 'drop a line',
    link: '/contacts',
    icon: 'fa fa-envelope-o',
  },
]

const createMenu = (parent, deepMenu) => {
  deepMenu.forEach( element => {
    const li = document.createElement('li')
    if (element.subTitle !== undefined) {
      li.innerHTML = `<i class="${element.icon}"></i>
                      <a>${element.title}</a><br>
                      <small>${element.subTitle}</small>`
    } else {
      li.innerHTML = `<i class="${element.icon}"></i>
                      <a>${element.title}</a>`
    }
    if(element.children) {
      const ul = document.createElement('ul')
      createMenu(ul, element.children)
      li.appendChild(ul)
      li.addEventListener('click', function() {
        if(this.lastChild.display = 'none') {
          this.lastChild.style.display = 'block'
        }
      })
    }
    li.addEventListener('mouseover', function() {
      this.classList.add('highlight')
    })
    li.addEventListener('mouseout', function() {
      this.classList.remove('highlight')
    })
    parent.appendChild(li)
  })
}

const createInput = (lastDiv) => {
  lastDiv.innerHTML = `<input placeholder="Search..." class="input"></input>
                       <i class="fas fa-search icon"></i>`
}

const renderMenu = () => {
  const parent = document.createElement('ul')
  createMenu(parent, deepMenu)
  const lastDiv = document.createElement('div')
  createInput(lastDiv)
  const menu = document.getElementById('menu')
  menu.appendChild(parent)
  menu.appendChild(lastDiv)
}
renderMenu()



