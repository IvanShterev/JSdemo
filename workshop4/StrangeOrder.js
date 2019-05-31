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
    '-1,-123,-123,-1,-12'
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

let num = gets();
let arr = num.split(',').map(Number);
let str = [];
let str1 = [];
let str2 = [];

for(let i = 0; i < arr.length; i++){
    if(arr[i] < 0){
        str .push(arr[i]);
    }
    else if(arr[i] == 0){
        str1.push(arr[i])
    }
    else{
        str2.push(arr[i])
    }
}
if(str.length > 0 && str1.length > 0 && str2.length > 0){
print((str + ',' +str1 + ',' + str2).toString());
}
if(str.length > 0 && str1.length <= 0 && str2.length <= 0){
    print(str.toString())
}
if(str.length <= 0){
print((str1 + ',' + str2).toString());
}
if(str1.length <= 0 && str2 > 0){
print((str + ',' + str2).toString());
}

