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
  '20'
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

let money = +gets();
let tip = "0.1" * money;

console.log(money + tip);