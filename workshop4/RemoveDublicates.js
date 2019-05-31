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
    '1,2,4,5,5,6,6,6,6'
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

let nums = gets();
let arr = nums.split(',');
let newArr = [...new Set(arr)];
print(newArr.toString())