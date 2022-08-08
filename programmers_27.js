function solution(num) {
    let count = 0
    
    while(num != 1 && count != 500){   //num이 1이 되거나 count가 500이 되면 중단합니다.
        if (num%2 == 0){
            num = parseInt(num/2)     //num이 짝수라면 2로 나눕니다.
        }
        else if(num%2 == 1){
            num = num*3 + 1            //num이 홀수라면 3을 곱하고 1을 더합니다.
        }
        count++;                     //작업이 끝날 때 마다 작업수가 1만큼 증가합니다.
    }
    if (count == 500){       //count가 500이라면(작업을 500번 반복했다면) -1로 바꿔줍니다.
        count = -1
    }
    return count;
}