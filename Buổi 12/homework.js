// Exercise 1
const equalArray = (arr_1 = [], arr_2 = []) => {
  if(arr_1 === arr_2) return true
  if(arr_1.length !== arr_2.length) return false
  for(let i=0; i<arr_1.length; i++) {
    if(arr_1[i] !== arr_2[i]) {
      return false
    }
  }
  return true
}

// Exercise 2
const flatArray = (arr = []) => {
  return arr.flat(2)
}

// Exercise 3
const chunkArray = (arr = [], number) => {
  const new_arr = []
  for(let i=0; i<arr.length; i+=number) {
    new_arr.push(arr.slice(i, number+i))
  }
  return new_arr
}

// Exercise 4
const sameValue = (arr_1 = [], arr_2 =[]) => {
  return arr_1.filter(item => arr_2.includes(item))
}


//Bài 5
const checkSale = date => {
  const dateLastSale = new Date(2020, 10, 30, 12, 30, 32)
  console.log(dateLastSale)
  if(Date.parse(dateLastSale) >= Date.parse(date)) {
    return true
  } else {
    return false
  }
}

// Exercise 6
const checkEmail = email => {
  const indiacateEmail = /^[\w-]{3,30}@[a-z]+.com$/g
  console.log(indiacateEmail.test(email))
}

const checkUser = user => {
  if(user.indexOf('__') === -1) {
    const indiacateUser = /^([\D_]){1}([a-z0-9_]){1,9}$/g
    console.log(indiacateUser.test(user))
  }
  else return false
}