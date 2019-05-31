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
  'g',
  '4'
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

let word = gets();
let num = +gets();


if(num%2 == 0 && (word == 'a'|| word == 'c' || word == 'e' || word == 'g')){
    print("light")
}

if(num%2 == 1 && (word == 'a'|| word == 'c' || word == 'e' || word == 'g')){
    print("dark");
}

if(num%2 == 0 && (word == 'b'|| word == 'd' || word == 'f' || word == 'h')){
    print("dark");
}
if(num%2 == 1 && (word == 'b'|| word == 'd' || word == 'f' || word == 'h')){
    print("light");
}
//  else{
//      print("dark");
//  }  




