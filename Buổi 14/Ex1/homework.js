const menuDeep = [
	{
			title: 'Dashboard',
			children: [
					{
							title: 'Tool',
					},
					{
							title: 'Report',
					},
					{
							title: 'Analytics',
					},
					{
							title: 'Code Blocks',
					},
			]
	},
	{
			title: 'Sales',
			children: [
					{
							title: 'News Sales',
					},
					{
							title: 'Expired Sales',
					},
					{
							title: 'Sales Reports',
					},
					{
							title: 'Deliveries',
					},
			]
	},
	{
			title: 'Messages',
			children: [
					{
							title: 'Inbox',
					},
					{
							title: 'Outbox',
					},
					{
							title: 'Sent',
					},
					{
							title: 'Archived',
					},
			]
	},
	{
			title: 'Users',
			children: [
					{
							title: 'New Users',
					},
					{
							title: 'User Groups',
					},
					{
							title: 'Permissions',
					},
					{
							title: 'Passwords',
					},
			]
	},
	{
			title: 'Settings',
			children: [
					{
							title: 'Databases',
					},
					{
							title: 'Design',
					},
					{
							title: 'Change User',
					},
					{
							title: 'Log Out',
					},
			]
	}
]


const createMenu = (parent, menuDeep) => {
  menuDeep.forEach(element => {
    const li = document.createElement('li')
    li.innerText = element.title
    if(element.children) {
      const ul = document.createElement('ul')
      createMenu(ul,element.children)
      li.addEventListener('click', function() {
        if(this.lastChild.display = 'none') {
          this.lastChild.style.display = 'block'
        }
      })
      li.appendChild(ul)
    }
    parent.appendChild(li)
  })
}

const renderMenu = () => {
	const parent = document.createElement('ul')
	createMenu(parent ,menuDeep)
	const menu = document.getElementById('menu')
	menu.appendChild(parent)
}
renderMenu()

