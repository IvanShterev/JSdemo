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
    '3',
    '1,2,3,4,5',
    '1,2,8,9,9',
    '1,2,2,3,2'
]
;

const gets = this.gets || getGets(test);
const print = this.print || console.log;

// const tries = gets();
// let sorted = '';
// for (i = 0; i < tries; i++) {
//     let list = gets().split(',');
//     for (j = 0; j < list.length ; j++) {
//         if (list[j] > list[j + 1]) {
//             sorted = 'false';
//         } else {
//             sorted = 'true';
//         }
    // }}
let num = +gets();
let sorted = '';
for(let i = 0; i < num; i++){
    let list = gets();
   let arr = list.split(',').map(Number);
    for(let j = 0; j < arr.length - 1; j++){
        if(arr[j] > arr[j+1]){
            sorted = 'false';
            break;
        }else{
            sorted = 'true'; 
        }
    }
    print(sorted)
}
// // print(arr1)
// // if(arr1[2].sort() == arr1[2]){
// //     print(true)
// // }
// print(arr1)
// let arr3 =[];
// for(let i = 0; i < arr1.length; i++){
//     arr3.push(arr1[i].sort())
// }
// print(arr3)