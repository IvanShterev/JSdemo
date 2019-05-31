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
    '3',
    '1',
    '5',
    '2'
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;


let n = +gets();
let ses = [];
let sum = 0;
for(let j = 0; j < n; j++){
    n1 = +gets();
     sum += n1;
     ses[j] = n1;
    }

print("min=" + Math.min(...ses).toFixed(2))
print("max=" + Math.max(...ses).toFixed(2))
print("sum=" + sum.toFixed(2));
print("avg=" + (sum/n).toFixed(2));


// if(n1 != 0 && n2 == 0 && n3 != 0){
    
//     print("min=" + Math.min(n1,n3).toFixed(2))
//     print("max=" + Math.max(n1,n3).toFixed(2))
//     print("sum=" + (n1 + n2 + n3).toFixed(2));
//     print("avg=" + ((n1 + n2 + n3)/2).toFixed(2));
//     }

//     if(n1 != 0 && n2 != 0 && n3 == 0){
    
//         print("min=" + Math.min(n1,n2).toFixed(2))
//         print("max=" + Math.max(n1,n2).toFixed(2))
//         print("sum=" + (n1 + n2 + n3).toFixed(2));
//         print("avg=" + ((n1 + n2 + n3)/2).toFixed(2));
//         }    

//         if(n1 == 0 && n2 == 0 && n3 != 0){
    
//             print("min=" + n3.toFixed(2))
//             print("max=" + n3.toFixed(2))
//             print("sum=" + (n1 + n2 + n3).toFixed(2));
//             print("avg=" + ((n1 + n2 + n3)/1).toFixed(2));
//             }

//             if(n1 != 0 && n2 == 0 && n3 == 0){
    
//                 print("min=" + n1.toFixed(2))
//                 print("max=" + n1.toFixed(2))
//                 print("sum=" + (n1 + n2 + n3).toFixed(2));
//                 print("avg=" + ((n1 + n2 + n3)/1).toFixed(2));
//                 }

//                 if(n1 == 0 && n2 != 0 && n3 == 0){
    
//                     print("min=" + n2.toFixed(2))
//                     print("max=" + n2.toFixed(2))
//                     print("sum=" + (n1 + n2 + n3).toFixed(2));
//                     print("avg=" + ((n1 + n2 + n3)/1).toFixed(2));
//                     }
//     if(n1 != 0 && n2 != 0 && n3 != 0){
// print("min=" + Math.min(n1,n2,n3).toFixed(2));
// print("max=" + Math.max(n1,n2,n3).toFixed(2));
// print("sum=" + sum.toFixed(2));
// print("avg=" + (sum/n).toFixed(2));
//     }