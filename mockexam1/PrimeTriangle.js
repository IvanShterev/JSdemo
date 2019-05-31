const getGets = (arr) => {
    let index = 0;

    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
// this is the test
const   test = [
    '27'
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

let n = +gets();
let result = '';
for(let i = 1; i <= n; i++){
    let maxDivider = Math.sqrt(i);
    let isPrime = true;
    for(let j = 2; j <= maxDivider; j++){
        if(i%j == 0){
            isPrime = false;
        }
    }
if(isPrime){
    result += '1';
    print(result);
}else{
    result += '0';
}
    }

