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
    '31',
    '6'
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

let messages = +gets();
let minutes = +gets();

let mess = messages - 20;
let mins = minutes - 60;
let firstLine;
let secLine;
let bill = 12;


if(messages > 20 && minutes > 60){
    firstLine = mess *0.06;
    secLine = mins * 0.10;
    let percent = (firstLine + secLine) * 0.2;
    let sum = firstLine + secLine + percent + bill;
    print(mess + " additional messages for " + firstLine.toFixed(2) + " levas");
    print(mins + " additional minutes for " + secLine.toFixed(2) + " levas");
    print(percent.toFixed(2) + " additional taxes"); 
    print(sum.toFixed(2) + " total bill" );
}


if(messages <= 20 && minutes <= 60){
    print("0 additional messages for 0.00 levas");
    print("0 additional minutes for 0.00 levas");
    print("0.00 additional taxes");
    print(bill + ".00 total bill")
}

if(messages > 20 && minutes <= 60){
    print(mess + " additional messages for " + (mess *0.06).toFixed(2) + " levas");
    print("0 additional minutes for 0.00 levas");
    print(((mess *0.06) * 0.2).toFixed(2) + " additional taxes ");
    print((((mess *0.06) * 0.2) +(mess* 0.06) + bill).toFixed(2) + " total bill");
}
if(messages <= 20 && minutes > 60){
    print("0 additional messages for 0.00 levas");
    print((mins + " additional minutes for " + ( mins * 0.10).toFixed(2) + " levas"))
    print((( mins * 0.10) * 0.2).toFixed(2) + " additional taxes ");
    print(((( mins * 0.10) * 0.2) + (mins * 0.10)+ bill).toFixed(2) + " total bill");
}
