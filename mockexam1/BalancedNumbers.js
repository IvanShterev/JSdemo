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
    '275',
'693',
'110',
'742'
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

let nums ;

let sum = 0;

while(number = gets()){
    if((+String(number).charAt(2) + +String(number).charAt(0)) == String(number).charAt(1)  ){
        sum += +number;
    }
    else{
        break;
    }
}
print(sum)


