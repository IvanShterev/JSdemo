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
  '5',
  '13'
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

let line1 = +gets();
let line2 = +gets();

print(line1 + line2);