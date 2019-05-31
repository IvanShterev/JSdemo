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
    '5',
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

let hy = +gets();
let dy;


if(hy <= 2) {
    dy = hy * 10;
}      
else{
    dy = 20 + 4*(hy -2);
}
print(dy); 
