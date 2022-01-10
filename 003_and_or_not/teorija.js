function rand (min, max) {

    min = Math.ceil(min);
    
    max = Math.floor(max);
    
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


//--------TERNARY (PRISKIRIMAS)---------------

let priskirta = rand (0, 1) ? true : false;

console.log(priskirta)

let trys = rand(0, 2) ? (rand(0, 1) ? 'green' : 'blue' ) : 'red';

console.log(trys)


//------------------LOGINIAI OPERATORIAI------------------------------

// AND &&
// OR ||
// NOT !

console.log('1 && 1', 1 && 1)
console.log('1 && 1', 1 && 0)
console.log('1 && 1', 0 && 1)

console.log('1 || 1', 1 || 1)
console.log('1 || 1', 1 || 0)
console.log('1 || 1', 0 || 1)
console.log('1 || 1', 0 || 0)




