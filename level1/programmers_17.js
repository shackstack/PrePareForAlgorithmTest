function solution(s) {
    
    let answer = false       //일단 answer의 디폴트값을 false로 설정
    let a = s.split('')      //a를 원소하나씩 쪼개자
    let len_a = a.length     //a의 길이를 len_a라고 하자
    if(len_a == 4 || len_a == 6){   //a의 길이가 4거나 6이라면
        answer = true               //answer의 디폴트값을 true라고하자
        for(let i=0; i<len_a; i++){
            if (isNaN(a[i])== true)  //a의 원소중 숫자가 아닌 원소가 있다면
                answer = false       //answer은 최종적으로 false
            } 
        }
    
    
    return answer;
}