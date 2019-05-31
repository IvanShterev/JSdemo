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
  '2,3,1',
  '5,2,3'
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

let list1 = gets();
let list2 = gets();

let arr1 = list1.split(',');
let arr2 = list2.split(',');
let sum = [];
for(let i = 0; i < arr1.length; i ++){
 sum.push(arr1[i] + ',' + arr2[i]);
}
print(sum.toString())