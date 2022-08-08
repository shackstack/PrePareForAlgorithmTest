function solution(n) {
    let arr = String(n).split('')
    arr = arr.reverse()
    
    arr = arr.map(x => Number(x))
    
    
    return arr;
}