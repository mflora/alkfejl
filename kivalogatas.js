"use strict"

const szamok = [2, 4, 3, 6, -4, 3, -42, -1];

function kivalogatas(arr, tulFn) {
    
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if(tulFn(arr[i])){
            result.push(arr[i]);
        }
    }

    return result;        

}

console.log(kivalogatas(szamok, function(p){
    return p < 0;
}))


//rövidebben
console.log(szamok.filter(function negativE(p){
    return p < 0;
}));

//még rövidebben
console.log(szamok.filter(p =>  p < 0));