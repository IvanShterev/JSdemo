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
  '2',
  '3',
  '0',
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

    let nums = gets();
    let n1 ;
    let sum = [];
    for(let i = 0; i < nums; i++){
        n1 = +gets()
        sum.push(n1);
    }
    let arr = sum.sort(function(a, b){return a - b});
    let arr1 = arr.reverse();
    print(arr[0]+', '+arr[1] + ' and ' + arr[2])