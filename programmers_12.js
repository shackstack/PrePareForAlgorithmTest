function solution(price, money, count) {
    
    for(let i = 1 ; i<=count ; i++){
        money = money - i*price
    }
    if (money>0){
        money=0
    }
    var answer = -money

    return answer;
}