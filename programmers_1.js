
function solution(num) {
    var answer = '';
    if(num%2==1 || -num%2==1){
        var answer = 'Odd'
    }
    else if(num%2==0){
        var answer = 'Even'
    }
    
   
    return answer;
}
