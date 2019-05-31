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
    '2',
     '18',
    '13.5'
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

// let n = +gets();
// let n1 = gets();
// let sum;
// let disc;

// for (let i = 0; i < n1.length; i++){
//      if(n1 [i]> 0){

//     sum = (n1[i] * 0.65).toFixed(2);
//     disc = n1[i] - sum;
//     print(disc.toFixed(2)); 
//      }
// }


let n = +gets();
let n1 ;
let sum;
let disc;
for(let j = 0; j < n; j++){
    n1 = +gets();
    sum = n1 * 0.65;
    disc = n1 - sum;
    print((+(Math.round(disc + "e+2")  + "e-2")).toFixed(2));
}


