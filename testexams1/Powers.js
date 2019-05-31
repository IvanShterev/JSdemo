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
  '10 3',
  '1 9 1 9 1 9 1 9 1 9'
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

let k = gets().split(' ')[1];
let arr = gets().split(' ').map(Number);
function transform(num, left, right){
    if(num == 0){
        return Math.abs(left - right)
    }
    else if(num % 2 == 0){
        return Math.max(left,right)
    }
    else if(num == 1){
        return left + right;
    }
    else{
        return Math.min(left,right)
    }
}
let sum = 0;
let currentTransformation = [];
for(let i = 0 ; i < k ; i++){
    for(let j = 0; j < arr.length ; j++){
    let nextValue;
        if(j == 0){
        	nextValue = transform(arr[j], arr[arr.length - 1],arr[1] )
        }
        else if(j == arr.length - 1){
            nextValue = transform(arr[j], arr[j - 1], arr[0])
        }
        else{
            nextValue = transform(arr[j], arr[j-1], arr[j+1])
        }
        currentTransformation.push(nextValue)
    }
    arr = currentTransformation;
    print(currentTransformation)
}

for (const iterator of currentTransformation) {
    sum += iterator;
}
// print(sum)