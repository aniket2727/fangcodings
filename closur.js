


//  clouser in javascript




function creatCounter(){
    let count =0
    return function(){
        count++
        console.log(count)
    }
}


const obj=creatCounter()

obj()
obj()
obj()





