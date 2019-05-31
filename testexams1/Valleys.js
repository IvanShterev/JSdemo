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
  '5,1,7,6,5,6,4,2,3,8'
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

let num = gets();
let arr = num.split(',').map(Number);

function isPeak(index){
    if(index == 0 || index == arr.length - 1){
        return true;
    }
    else if(arr[index] > arr[index - 1] &&  arr[index] > arr[index + 1]){
        return true;
    }
    else{
        return false;
    }
}

let peaks = [];
arr.forEach(function(num, ind){
    if(isPeak(ind) == true){
        peaks.push(ind)
    }
})
let sum = 0;
for(let i = 1; i < peaks.length; i++){
    let startIndex = peaks[i-1];
    let endIndex = peaks[i];

    let valleySum = 0;
    for(let j = startIndex; j <= endIndex; j++){
        valleySum += arr[j];
    }
    if(sum < valleySum){
        sum = valleySum;
    }
}

print(sum)





