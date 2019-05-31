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
    '123.123'
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;


let num = gets();
let nums = num.split('');
let result = num;

while(result.length > 1){
    let sum = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] === '-' || nums[i] === '.'){
            continue;
        }    
        sum = sum + +nums[i];
    }
    result = sum.toString();
    nums = result.split('');
}
print(result);

