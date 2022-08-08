function compare(a,b){
    let temp = 1
    if(a>b){
        temp = -1
    }
    return temp;
}
function solution(n) {
    let answer = 0
    arr = String(n).split('')
    len_arr = arr.length
    
    arr.sort(compare)
    arr = arr.join('')
    console.log(arr)
    
    
    return Number(arr);
}