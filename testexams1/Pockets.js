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
  '53 20 1 30 2 40 3 10 1'
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

let nums = gets();
let arr = nums.split(' ').map(Number);

function isPeak(index){
    if(index == 0 || index == arr.length - 1){
        return false;
    }
    else if(arr[index] > arr[index - 1] && arr[index] > arr[index + 1]){
        return true;
    }
}
let peaks = [];
arr.forEach(function(num,ind){
    if(isPeak(ind) == true){
        peaks.push(ind)
    }
})
let sum = 0;

for(let i = 1; i < arr.length - 1; i++){
    if(peaks.indexOf(i-1) >= 0 && peaks.indexOf(i + 1) >= 0){
        sum += arr[i];
    }
}
print(peaks)
print(sum)