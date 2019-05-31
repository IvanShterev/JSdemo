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
  '8',
  '28 6 21 6 -7856 73 73 -56',
  '73'
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

let n = +gets();
let nums = gets().split(' ').map(Number);
let arr = [];
let n1 = +gets();

for(let i = 0; i < n; i++){
    arr.push(nums[i])
}
let sum = 0;
for(let i = 0; i < arr.length; i++){
    if(n1 == arr[i]){
        sum += 1;
    }
}
print(sum)