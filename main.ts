let box = document.getElementById('box')

box.addEventListener('click',function(){
    console.log('2')
})

function add(a:number,b:number){
    return a + b
}
console.log(add(1,2)) 

function sort<T>(arr: T[]): T[]{
    arr.push(5)
    return arr.reverse()
}
console.log(sort([1,2,3],5) )