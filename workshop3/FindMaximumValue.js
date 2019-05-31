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
  '5',
  '2',
  '1',
  '1',
  '6',
  '3'
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

let nums = gets();
let n1;
let sum = [];
for(let i = 0; i < nums; i++){
    n1 = +gets();
    sum.push(n1)
}
print(Math.max(...sum))

