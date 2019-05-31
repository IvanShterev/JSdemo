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
  '100'
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

let integer = +gets();
let primeArray = [];
for(let i = 2; i <= integer; i++){
    while((integer % i) == 0){
        primeArray.push(i);
        print(primeArray)
        integer /= i;
    }
}
for (var k = 0; k < primeArray.length; k++) {
  print(primeArray[k]);
}