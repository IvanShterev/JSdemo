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
    'January',
    '1'
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

let month = gets();
let day = +gets();




if(month == 'March' || month == 'April' || month == 'May' || month == "June"){
    if(month == 'March' && day >= 20){
        print('Spring')
    }
    else if(month == 'March' && day < 20){
        print('Winter');
    }
    else if(month == 'June' && day < 21){
    print('Spring');
    }
    else if(month == 'June' && (day > 21 && day < 31)){
        print('Summer');
    }
    else if(month == 'April' || month == 'May' && (day > 1 && day < 31)){
        print('Spring');
    }
}

if(month == 'July' || month == 'August' || month == 'September'){
    if(month == 'September' && day < 22){
        print('Summer')
    }
    else if(month == 'September' && day > 21){
        print('Autumn')
    }
    else if(month == 'July' || month == 'August' && (day > 1 && day < 31)){
        print('Summer');
    }
}
if(month == 'October' || month == 'November' || month == 'December'){
    if(month == 'December' && day < 21){
        print('Autumn')
    }
    else if(month == 'December' && day > 20){
        print('Winter')
    }
    else if(month == 'October' || month == 'November' && (day > 1 && day < 31)){
        print('Autumn');
    }
}
if(month == 'January' || month == 'February' || month == 'March'){
    
    if(month == 'January' || month == 'February' && (day > 1 && day < 31)){
        print('Winter');
    }
}