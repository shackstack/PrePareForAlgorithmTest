function solution(arr) {
    let answer = [];
    let min = arr[0]
    let min_index = 0
    for (let i=1; i<arr.length; i++){  //원소갯수만큼 for문을 돌려
        if(min>arr[i]){                //arr[i]가 min보다 작으면 min은 arr[i]
            min = arr[i]       
            min_index = i              //min_index는 min에 해당하는 원소의 인덱스
            
        }
    }
    arr.splice(min_index,1)            //min_index부터 1개의 원소를 없애라    
    console.log(arr)
    if(arr.length==0){             //예시 2처럼 원소가 하나면 -1을 반환해라
        arr[0] = -1
    }
    
    return arr;
}