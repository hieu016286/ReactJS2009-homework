//Bài 1
const addElement =( a, number ) => {
  const arr=[]
  for(let i=0; i<number; i++){
    arr.push(a)
  }
  return arr
}

//Bài 2
const sortArr = ( a = [] ) => {
  const newArr = []
    for(let i=a.length-1; i >= 0; i--){
        newArr.push(a[i])
    }
  return newArr
}

//Bài 3
const check = ( arr = [] ) => {
  const newArr = arr.filter( item => typeof(item) === 'number' && item !== 0)
  console.log(newArr)   
}


//Bài 4
const convertToObject = ( arr = [] ) => {
  const x = Object.fromEntries(arr)
  console.log(x)
}

//Bài 5
const sortNumber = ( a = [] ) => {
  a.sort()
  return a 
}


//Bài 6
const checkObject = data => {
  const x = Object.prototype.toString.call(data) == "[object Object]"
  return x
}

//Bài 7
const deleteKey = ( ob = {}, arr = []) => {
  arr.forEach( item => {
    for( const key in ob ) {
      if( item === key ) {
        delete (ob[key])
      }
    }
  } )
  return ob
}

//Bài 8
const deleteValue = ( a = [] ) => {
  a.splice(1,2)
  return a
}


//Bài 9
const students = [
  { id: 1, name: 'Nguyễn Thị Tèo', score: 9.2 },
  { id: 2, name: 'Phạm Văn Bưởi', score: 2.3 },
  { id: 3, name: 'Hoàng Văn Nam', score: 3.7 },
  { id: 4, name: 'Vũ Ngọc Duy', score: 6.9 },
  { id: 5, name: 'Nguyễn Minh Nhật', score: 5.2 },
  { id: 6, name: 'Phí Duy Quân', score: 9.6 },
  { id: 7, name: 'Trần Minh Minh', score: 6.1 }
] 

const checkStudent = students => {
  const newArr = []
  students.forEach( item => {
    const x = item.name.length
    if( item.score > 5 && item.name.lastIndexOf('Duy', x - 4 ) === -1 ) {
      newArr.push('Pass')
    } else {
      newArr.push('Fail')
    }
  } )
  return newArr
}

//Bài 10
const students = [
  { id: 1, name: 'Nguyễn Thị Tèo', score: 9.2 },
  { id: 2, name: 'Phạm Văn Bưởi', score: 2.3 },
  { id: 3, name: 'Hoàng Văn Nam', score: 3.7 },
  { id: 4, name: 'Vũ Ngọc Duy', score: 6.9 },
  { id: 5, name: 'Nguyễn Minh Nhật', score: 5.2 },
  { id: 6, name: 'Phí Duy Quân', score: 9.6 },
  { id: 7, name: 'Trần Minh Minh', score: 6.1 }
]

const calcuScore = students => {
  students.forEach( item => {

    const score = item.score
    const interger = Math.floor(item.score)
    const decimal = (score - interger).toFixed(1) * 10
    let sum = interger + decimal
    if( sum > 5 && sum <= 10 ) {
      console.log(item.name)
    } else if ( sum > 10 ) {
        const a = sum % 10
        if ( a > 5 ) {
        console.log(item.name)
       }
    }
  } )
}