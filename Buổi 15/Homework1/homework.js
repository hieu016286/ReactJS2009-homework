const ListPeople = [
    {
        ID: 1,
        Fullname : 'Trần Trung Hiếu',
        Gender : 'Nam',
        Age: 20,
        Action: [
            {
                Action_1: 'Edit'
            },
            {
                Action_2 : 'Delete'
            }
        ]
    },
    {
        ID: 2,
        Fullname : 'Nguyễn Quang Hà',
        Gender : 'Nam',
        Age: 20,
        Action: [
            {
                Action_1: 'Edit'
            },
            {
                Action_2 : 'Delete'
            }
        ]
    },
    {
        ID: 3,
        Fullname : 'Bùi Huy Trịnh',
        Gender : 'Nữ',
        Age: 20,
        Action: [
            {
                Action_1: 'Edit'
            },
            {
                Action_2 : 'Delete'
            }
        ]
    },
]



const Delete = (BtnDelete) => {
  const btn = BtnDelete.getAttribute('data-count')
  if(btn){
  ListPeople.splice(btn,1)
  document.getElementById('menu').innerHTML=''
  renderContent()
  }
  else{
    const x =  BtnDelete.parentNode.parentNode.rowIndex
    document.getElementById('myTable').deleteRow(x)
  }
}

const DeleteAll = () => {
  const lengthArr = ListPeople.length
  ListPeople.splice(0,lengthArr)
  document.getElementById('menu').innerHTML=''
  renderContent()
}

const Save = (btn_Save) => {
  const h = btn_Save.getAttribute('data-count')
  const parent = btn_Save.parentNode.parentNode
  if(h!='null') {
  const x = parent.querySelectorAll('input')
  const y = parent.querySelectorAll('select')
  ListPeople[h].Gender = y[0].value
  ListPeople[h].Fullname = x[1].value
  ListPeople[h].Age = x[2].value
  } else {
    console.log(2)
    const x = parent.querySelectorAll('input')
    const y = parent.querySelectorAll('select')
    const obj = {
        ID: x[0].value,
        Fullname : x[1].value,
        Gender : y[0].value,
        Age: x[2].value,
        Action: [
            {
                Action_1: 'Edit'
            },
            {
                Action_2 : 'Delete'
            }
        ]
    }
    ListPeople.push(obj)
  }
  document.getElementById('menu').innerHTML= ''
  renderContent()
}

const Cancel = (btnCancel) => {
  const f = btnCancel.getAttribute('data-count')
  const btnEdit = document.createElement('button')
  btnEdit.setAttribute('class', 'btn btn-primary')
  btnEdit.setAttribute('onclick', 'Edit(this)')
  btnEdit.setAttribute('data-count',f)
  btnEdit.innerText = 'Edit'
  btnCancel.parentNode.prepend(btnEdit)
  btnCancel.previousSibling.remove()
  const parent = btnCancel.parentNode.parentNode
  const y = parent.querySelectorAll('input')
  for(i = 0; i < y.length; i++) {
    y[i].disabled = true
  }
  const z = parent.querySelectorAll('select')
  for(i = 0; i < z.length; i++) {
    z[i].disabled = true
  }
  btnCancel.remove()
}


const Edit = (buttonEdit) => {
  const f = buttonEdit.getAttribute('data-count')
  const btn_Save = document.createElement('button')
  btn_Save.setAttribute('class', 'btn btn-success')
  btn_Save.setAttribute('onclick', 'Save(this)')
  btn_Save.setAttribute('data-count',f)
  btn_Save.innerText='Save'
  const btn_Cancel = document.createElement('button')
  btn_Cancel.setAttribute('class', 'btn btn-warning')
  btn_Cancel.setAttribute('onclick', 'Cancel(this)')
  btn_Cancel.setAttribute('data-count',f)
  btn_Cancel.innerText='Cancel'
  buttonEdit.parentNode.prepend(btn_Cancel)
  buttonEdit.parentNode.prepend(btn_Save)
  const parent = buttonEdit.parentNode.parentNode
  const y = parent.querySelectorAll('input')
  for(i = 0; i < y.length; i++) {
    y[i].removeAttribute('disabled')
  }
  const z = parent.querySelectorAll('select')
  for(i = 0; i < z.length; i++) {
    z[i].removeAttribute('disabled')
  }
  buttonEdit.remove()
}


const AddRow = () => {
  const table = document.getElementById('myTable')
  table.insertRow(table.rows.length).innerHTML = `
                                                  <th scope="col"><input type="number" value=""></th>
                                                  <th scope="col"><input type="text" value=""></th>
                                                  <th scope="col">
                                                    <select name="" id="">
                                                      <option value="Nam">Nam</option>
                                                      <option value="Nữ">Nữ</option>
                                                    </select>
                                                  </th>
                                                  <th scope="col"><input type="number"></th>
                                                  <th scope="col">
                                                    <button type="button" class="btn btn-primary" onclick="Edit(this)">Edit</button>
                                                    <button type="button" class="btn btn-danger" onclick="Delete(this)">Delete</button>
                                                  </th>`
}


const renderTable = (table,ListPeople) => {
  const thead = document.createElement('thead')
  thead.classList.add('design-thead')
  thead.innerHTML = `<tr>
                          <th scope="col">ID</th>
                          <th scope="col">Full Name</th>
                          <th scope="col">Gender</th>
                          <th scope="col">Age</th>
                          <th scope="col">Action</th>
                      </tr>`
  table.appendChild(thead)

  ListPeople.forEach((element, index) => {
    const tr = document.createElement('tr')
    tr.classList.add('design-tr')
    tr.innerHTML = `<th scope="col"><input type="number" value="${element.ID}" disabled></th>
                    <th scope="col"><input type="text" value="${element.Fullname}" disabled></th>
                    <th scope="col">
                    <select name="" id="" disabled>
                        <option value="${element.Gender}" selected>${element.Gender}</option>
                        <option value="Nam">Nam</option>
                        <option value="Nữ">Nữ</option>
                    </select>
                    </th>
                   <th scope="col"><input type="number" value="${element.Age}" disabled></th>`
    if(element.Action) {
      const th = document.createElement('th')
      th.innerHTML = `<th scope="col">
                      <button data-count=${index} type="button" class="btn btn-primary" onclick="Edit(this)">Edit</button>
                      <button data-count=${index} type="button" class="btn btn-danger" onclick="Delete(this)">Delete</button>
                      </th>`
      tr.appendChild(th)
    }
    table.appendChild(tr)
  })
}



const renderContent = () => {
  const table = document.createElement('table')
  table.setAttribute('id','myTable')
  renderTable(table,ListPeople)
  const menu = document.getElementById('menu')
  menu.appendChild(table)
}
renderContent()