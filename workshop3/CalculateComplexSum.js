const getGets = (arr) => {
    let index = 0;

    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
// this is the test
const test = [
    '3',
    '2'
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

let n = +gets();
let n1 = +gets();
var total1 = 1;
let sum = 0;

for(let j = 1; j < n+1; j++){
    total1 = total1 * j;
    sum += (total1/Math.pow(n1, j))
}
print((sum + 1).toFixed(5))