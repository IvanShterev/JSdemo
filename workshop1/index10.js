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
  '4',
  '3',
  '11',
  '40'
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

let day = +gets()*"86400";
let hour = +gets()*"3600";
let minute = +gets()*"60";
let sec = +gets();
let all = day + hour + minute + sec;

print(all);
