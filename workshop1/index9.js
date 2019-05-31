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
  '20'
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

let m = +gets();
let gallon = "4.54";
let mile = "1.6";

print(Math.floor(((1 / m)*gallon)/mile*100),"litres per 100 km");
