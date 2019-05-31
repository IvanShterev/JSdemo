const getGets = (arr) => {
    let index = 0;

    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
// this is the test
const test = [
  '2346'
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;


let number1 = gets();
print(+number1[0]+ +number1[1]+ +number1[2]+ +number1[3]);

