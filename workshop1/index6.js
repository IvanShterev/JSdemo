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
  '3'
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

let n = +gets();

let sum = n*(n+1)/2;
console.log(sum);