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
  '10',
  '10'
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;


let bottle1 = gets()*0.1;
let bottle2 = gets()*0.25;
let n = bottle1 + bottle2;


console.log(n.toFixed(2));