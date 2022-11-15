function solution(x) {
    let count = 0
    let x1 = x         //x의 클론
    let x2 = x         //x의 클론
    let sum = 0 
    let answer = 0
    let arr = new Array();
    
    
    while(x1 != 0){
        x1 = parseInt(x1/10)        //x의 자릿수를 알아내기 위해 while문 사용
        count ++;
    }
    for(let i=0; i<count; i++){
        arr[i] = parseInt(x2 % 10);   //x의 자릿수만큼 for문을 돌리고 나머지를 arr에 입력
        x2=parseInt(x2/10)            
        sum = sum + arr[i]            //sum은 arr원소의 합       
    }
    
    if(Number.isInteger(x/sum) == true){    //x를 각 자릿수의 합으로 나눈 것이 정수라면
        answer = true                       //true를 반환해라
    }
    else{
        answer = false                      //그게 아니면 false를 반환해라
    }
    return answer;
}