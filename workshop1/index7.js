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
  '2000'
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

let cash = +gets();
let onCash = "0.05"* cash;
let cash1 = cash + onCash;
let onCash1 = "0.05"* cash1 + cash1;
let onCash2 = "0.05"* onCash1 + onCash1; 

console.log(cash1.toFixed(2));
console.log(onCash1.toFixed(2));
console.log(onCash2.toFixed(2));
