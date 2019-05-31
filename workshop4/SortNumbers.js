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
  '3, 4, 6, 5, 1, 2, 8, 55'
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

let arr = gets();
  let arr2 = arr.split(', ').map(Number);
  let sort = arr2.sort(function(a, b){return a - b});
  let sort1 = sort.reverse();  
  print(arr2.join(', '))
