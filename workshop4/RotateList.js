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
    '2,1,3,4',
    '5'
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

let list = gets();
let arr = list.split(',');
let n = +gets();
for(let i = 0; i < n; i++){
arr.push(arr.shift());
}
print(arr.toString())
