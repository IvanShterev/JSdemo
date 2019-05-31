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
    '185'
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

let num = gets();
let n1 = +String(num).charAt(0);
let n2 = +String(num).charAt(1);
let n3 = +String(num).charAt(2);
let first = n1*n2*n3;
let second = n1*n2+n3;
let third = n1+n2*n3;
let forth = n1+n2+n3;

print(Math.max(first,second,third,forth))