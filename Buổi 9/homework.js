//Bài 1

function Salary(a){
    if(typeof(a)=='number'){
        if(a>=15000000){
            console.log('Salary is :',(a-(a*(30/100))))
        }
        else if(a>=7000000){
            console.log('Salary is :',(a-(a*(20/100))))
        }
        else if(a>0){
            console.log('Salary is :',(a-(a*(10/100))))
        }
        else{
            console.log('Not Salary')
        }
    }
    else{
        console.log('error')
    }
}



//Bài 2
function Year(a){
    if(typeof(a)=='number'){
        if(a>=16){
            console.log('Đủ Điều Kiện')
        }
        else{
            console.log('Không Đủ Điều Kiện')
        }
    }
    else{
        console.log('error')
    }
}



//Bài 3
function CheckNumber(a){
    if(typeof(a)=='number'){
        if(a>100){
            console.log(`${a} > 100`)
        }
        else if(a==100){
            console.log('Bằng nhau')
        }
        else{
            console.log(`${a} < 100`)
        }
    }
    else{
        console.log('error')
    }
}

//Bài 4
function MaxNumber(a,b,c){
    if(typeof(a,b,c)=='number'){
        var max = a
        if(b>max){
            max = b
            if(c>max){
                max=c
                console.log(max)
            }
            else{
                console.log(max)
            }
        }
        else{
            console.log(a)
        }
    }
    else{
        console.log('error')
    }
}

//Bài 5
function Rank(a){
    if(typeof(a)=='number'){
        if(a>=9 && a<=10){
            console.log('Rank A')
        }
        else if(a>=7 && a<9){
            console.log('Rank B')
        }
        else if(a>=5 && a<7){
            console.log('Rank C')
        }
        else if(a>0 && a<5){
            console.log('Rank F')
        }
        else{
            console.log('Not Rank')
        }
    }
    else{
        console.log('error')
    }
}


//Bài 6
function Equation(a,b,c){
    if(typeof(a,b,c)=='number'){
       if(a==0){
           if(b==0){
               if(c==0){
                   console.log('PT VÔ SỐ NGHIỆM')
               }
               else{
                   console.log('PT VÔ NGHIỆM')
               }            
           }
       }
       if(a!=0){
           denta=(b*b)-4*a*c
           if(denta<0){
               console.log('PT VÔ NGHIỆM')
           }
           else if(denta==0){
               console.log(`PT CÓ NGHIỆM KÉP X1 = X2 = ${-b/(2*a)}`)
           }
           else{
               console.log(`PT CÓ 2 NGHIỆM PHÂN BIỆT X1 = ${(-b+Math.sqrt(denta))/(2*a)} VÀ X2 = ${(-b-Math.sqrt(denta))/(2*a)}`)
           }
       }
    }
    else{
        console.log('error')
    }
}


//BÀI 7
function Rosie(a){
    if(typeof(a)=='number'){
        if(a>0){
            if(a<=100000000){
                console.log(`TIỀN HOA HỒNG : ${a*(5/100)}`)
            }
            else if(a<=300000000){
                console.log(`TIỀN HOA HỒNG : ${a*(10/100)}`)
            }
            else{
                console.log(`TIỀN HOA HỒNG : ${a*(20/100)}`)
            }
        }
        else{
            console.log('error')
        }
    }
    else{
        console.log('error')
    }
}

//BÀI 8
function Phone(a){
    if(typeof(a)=='number'){
        if(a>=0){
            CDT=25000
            if(a<=50){
                console.log(`CƯỚC ĐIỆN THOẠI : ${CDT+(600*a)}`)
            }
            else if(a>50 && a<=200){
                console.log(`CƯỚC ĐIỆN THOẠI : ${CDT+(400*a)}`)
            }            
            else if(a>200){
                console.log(`CƯỚC ĐIỆN THOẠI : ${CDT+(200*a)}`)
            }     
        }
        else{
            console.log('error')
        }
    }
    else{
        console.log('error')
    }
}