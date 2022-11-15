function solution(n){
    let a = 0
    while(true){
        if(n/10 == 0){
            break;}
        a = n%10 + a
        n = parseInt(n/10)
        
    }
    
    return a;
}