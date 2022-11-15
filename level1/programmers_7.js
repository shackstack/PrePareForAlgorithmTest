function solution(absolutes, signs) {
    
    
    for(let i=0;i<signs.length;i++){
        if(signs[i]==true){
            signs[i] = 1 
        }
        else{
            signs[i] = -1}
    }
    
    let answer = 0
    
    for(let j=0;j<signs.length;j++){
     answer = answer + absolutes[j]*signs[j]   
    }
    
    
    return answer;
}