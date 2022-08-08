function solution(n) {
    
    let n1 = n**(1/2) // n1은 n의 2제곱근
    if(Number.isInteger(n1) == true){ 
        n1 = (n1+1)**2   // n1이 정수라면 n+1의 제곱을 리턴
    }
    else{
        n1 = -1  // 그렇지 않다면 -1 리턴
    }
    
    let answer = n1
    return answer;
}