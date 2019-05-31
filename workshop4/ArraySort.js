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
let arr1 =[];

// for(let i = 0; i < arr.length ; i++){
//     if(arr[i] == 0){
//         // arr1.push(arr[i])
//         arr.filter(Number)
//     }
// }
// print(arr)
// print(arr1)
let i = arr.length;
while (i--) {
    if (arr[i] === 0) {
        arr1.push(arr[i])
        arr.splice(i, 1);
    }
}
print((arr + ',' + arr1).toString())