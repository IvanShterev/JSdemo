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
    '2.5',
    '1.25',
    '3',
    '1'
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

let n = +gets();
let n1;
let sum = 0;

for(let j = 0; j < n; j++){
     n1 = +gets();
    sum += n1;
}

print((sum/n).toFixed(2));



// 2Th Way

// let n1 = gets().map(Number);
// let total = 0;
// let average = 0;

// for(let i = 0; i < n; i++){
//     total += n1[i];
//     average = total / n;
// }
// print(average.toFixed(2))
