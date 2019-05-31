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
  '3'
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

let n = +gets();
for (var i = 1; i <= n; i++) {
    var result = "";
    for (var j = 1; j <= n; j++) {
      result += (i + j - 1)+ ' ';
    }
    print(result)
  }
