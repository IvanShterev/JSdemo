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
  '5',
  '2',
  '1',
  '1',
  '6',
  '3'
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

let nums = gets();

let n1;
let sum = 1;
let sum1 = 1;
for(let i = 1; i <= nums; i++){
     n1 = +gets();
    if(i%2 == 1){
        sum *= n1;
    }
    if(i%2 == 0){
        sum1 *= n1;
    }
    }

if(sum == sum1){
    print ('yes'+ ' ' + sum)
}
else {
    print('no' + ' ' + sum + ' ' + sum1)
}