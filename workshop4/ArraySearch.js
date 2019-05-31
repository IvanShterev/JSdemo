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
    '4,3,2,7,8,2,3,1'
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

let nums = gets();
let arr = nums.split(',').map(Number);
let realArr = arr.sort(function(a,b){return b-a}).reverse();
let arr1 = [];
// if(realArr[0] == 0){
// for(let i = realArr[0]; i <= realArr.length ; i++){
//     if(i != realArr[i]){
//         arr1.push(i)
//     }
// }}else{
//    for(let j = 1; j <= realArr.length; j++){
//         if(j == realArr.every( v => v === realArr[j])){
//             continue;
//         }  
//     if(j != realArr[j-1]){
//             arr1.push(j)
//         }   
//     }
// }
for(let i = 1; i <= realArr.length; i++){
        if(realArr.indexOf(i) == -1){
            arr1.push(i)
        }
    }
print(arr1.toString())
