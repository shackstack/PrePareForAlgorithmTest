function solution(s) {
    s = s.split(' ')
    
    let len=s.length
    for(let i=0; i<len; i++){
        s[i] = s[i].split('')
    }
    for(let j=0; j<len; j++){
        for(let k=0; k<s[j].length; k=k+2){
            s[j][k] = s[j][k].toUpperCase()
        }
        for(let k=1; k<s[j].length; k=k+2){
            s[j][k] = s[j][k].toLowerCase()
        }
        s[j] = s[j].join('')
    }
    s = s.join(' ')
    
    return s;
}