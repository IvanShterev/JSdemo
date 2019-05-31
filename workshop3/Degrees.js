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
  '0 15 30'
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

let arr = gets();
let arr1 = arr.split(' ').map(Number);

arr1.forEach(element => {
    print(Math.round((element * 1.8) + 32));
});