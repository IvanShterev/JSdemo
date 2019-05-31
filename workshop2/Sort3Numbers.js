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
    '-5',
    '3',
    '0',
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

let a = +gets();
let b = +gets();
let c = +gets();

if(a > b && a > c && a >= -1000 && a <= 1000){
    if(b >= c){
        print(a, b, c);
    }
    if(b < c){
        print(a, c, b)
    }   
}
if(b > a && b > c && b >= -1000 && b <= 1000){
    if(a >= c){
        print(b, a, c)
    }
    if(a < c){
        print(b, c, a)
    }
}
if(c > a && c > b && c >= -1000 && c <= 1000){
    if(b >= a){
        print(c, b, a);
    }
    if(b < a){
        print(c, a, b)
    }
}
if(a == b && a == c){
    print(a,b,c);
}

