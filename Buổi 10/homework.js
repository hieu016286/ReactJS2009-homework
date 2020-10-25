//Bài 1
const Multi = number =>{
    for(i=1;i<11;i++){
        console.log(`${number} x ${i} = ${number*i}`)
    }
}


//Bài 2
const EvenNumber = number =>{
    if(number<=30){
        for(i=1;i<=number;i++){
            if(i%2==0){
                console.log(i)
            }
        }
    }
    else{
        return false
    }
}

//Bài 3
const Sum = number =>{
    let sum=0
    if(number>0 && number<=30){
        for(i=1;i<=number;i++){
            sum+=i
        }
        return sum
    }
    else{
        return false
    }
}

//Bài 4
const Factorial = number =>{
    let factorial = 1
    if(number<=30 && number>0){
        for(i=1;i<=number;i++){
            factorial*=i
        }
        return factorial
    }
    else{
        return false
    }
}

//Bài 5
const EvenCount = (arr=[])=>{
    let count=0
    for(i=0;i<arr.length;i++){
        if(arr[i]%2==0){
            count++
        }
    }
    return count
}

//Bài 6
const Remove = (arr=[])=>{
    var newarr=[]
    arr.forEach(function(item,index){
        if(arr.indexOf(item)===index){
            newarr.push(item)
        }
    })
    return newarr
}


//Bài 7
const studentNames = [
    { id: 1, name: 'Nguyễn Thị Tèo' },
    { id: 2, name: 'Phạm Văn Bưởi' },
    { id: 3, name: 'Hoàng Văn Nam' },
    { id: 4, name: 'Vũ Ngọc Duy' },
    { id: 5, name: 'Nguyễn Minh Nhật' },
    { id: 6, name: 'Phí Duy Quân' },
    { id: 7, name: 'Trần Minh Minh' }
]
const studentScores = [
    { id: 1, score: 9.2 },
    { id: 2, score: 2.3 },
    { id: 3, score: 3.7 },
    { id: 4, score: 6.9 },
    { id: 5, score: 5.2 },
    { id: 6, score: 9.6 },
    { id: 7, score: 6.1 }
]

const Connect = (studentNames,studentScores)=>{
    ArrConnect=[]
    studentNames.forEach(itemA=>{
        studentScores.forEach(itemB=>{
            if(itemA.id===itemB.id){
                itemA.score=itemB.score
                ArrConnect.push(itemA)
            }
        })
    })
    return ArrConnect
}

//Bài 8
const students = [
    { id: 1, name: 'Nguyễn Thị Tèo', score: 9.2 },
    { id: 2, name: 'Phạm Văn Bưởi', score: 2.3 },
    { id: 3, name: 'Hoàng Văn Nam', score: 3.7 },
    { id: 4, name: 'Vũ Ngọc Duy', score: 6.9 },
    { id: 5, name: 'Nguyễn Minh Nhật', score: 5.2 },
    { id: 6, name: 'Phí Duy Quân', score: 9.6 },
    { id: 7, name: 'Trần Minh Minh', score: 6.1 }
]
const Score = students =>{
    theBest=[]
    theBad=[]
    max=students[0].score
    min=students[0].score
    students.forEach(item=>{
        if(item.score>max){
            max=item.score
        }
    })
    console.log(max)
    students.forEach(item=>{
        if(item.score<min){
            min=item.score
        }
    })
    console.log(min)
    for(i=0;i<students.length;i++){
        if(students[i].score===max){
            theBest.push(students[i])
        }
        if(students[i].score===min){
            theBad.push(students[i])
        }
    }
    let result={}
    result.theBad=theBad
    result.theBest=theBest
    return result
}