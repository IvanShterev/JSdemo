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
    '3,-12,0,0,13,5,1,0,-2'
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;


let nums = gets();
let arr = nums.split(',').map(Number);
let sum = 0;
let below = [];
let above = [];


for(let i = 0;i < arr.length; i++){
    sum += arr[i];
}
let avg = sum/arr.length;
for(let i = 0; i < arr.length; i++){
    if(arr[i] < avg){
        below.push(arr[i])
    }
    else if(arr[i] == avg){
        continue
    }
    else{
        above.push(arr[i])
    }
}

print('avg: ' + avg.toFixed(2))
print('below: ' + below.toString())
print('above: ' + above.toString())