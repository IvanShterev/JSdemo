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
    '4',
    '12',
    '23',
    '34',
    '45'
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

let n = +gets();
let nums = [];

for(let i = 0; i < n ; i++){
    nums.push(gets());
}
    
let mergedNums = '';
let squashedNums = '';
let number ;    
for(let i = 0; i < nums.length; i++){
    number = (+String(nums[i]).charAt(1)+ 
    +String(nums[i+1]).charAt(0)) 
;
if(number > 9){
    number = String(number).charAt(1);
}
    if(i < nums.length -1){
        mergedNums += (String(nums[i]).charAt(1) + String(nums[i+1]).charAt(0)) + ' ';
        squashedNums += String(nums[i]. charAt(0)) + number 
        + String(nums[i+1].charAt(1)) + ' ';
    }
}
print(mergedNums)
print(squashedNums)