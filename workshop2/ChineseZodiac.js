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
    '2080',
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

let year = +gets();
let years = ["2000", "2001", "2002", "2003", 
"2004", "2005", "2006", "2007", "2008", "2009", "2010"
, "2011"].map(Number);

let animals = ["Dragon","Snake","Horse","Sheep","Monkey","Rooster"
,"Dog","Pig","Rat"
,"Ox","Tiger","Hare"];
    
for(let i = 0; i < years.length ; i ++){
    if(year == years[i]){
        print(animals[i])
        break;
    }
    if(year == (years[i] + years.length)){
        print(animals[i]);
        break;
    }
    if(year == (years[i] - 12)){
        print(animals[i]);
        break;
    }
    let first = years[i] - 12;
    let second = years[i] - 24;
    let third = years[i] - 36;

    
    let first1 = years[i] + 12;
    let second2 = years[i] + 24;
    let third3 = years[i] + 36;

    for(let j = 1951; j < 2050; j ++){
        if(year == j){
            if(year == first || year == second || year == third ||
                year == first1 || year == second2 || year == third3  ){
                print(animals[i]);
            }
        }
    }
}


