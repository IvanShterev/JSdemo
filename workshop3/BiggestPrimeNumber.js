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
  '13',
  '126',
  '26'
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

let numbers = [];
function isPrime(num) {
    if(num < 2) return false;
    for (var i = 2; i < num; i++) {
        if(num%i==0)
            return false;
    }
    return true;
}
let max = 0;
while(number = gets()){
   for(let i = 1 ; i <= number; i++){
       if(isPrime(i) == true){
           numbers.push(i)
        }
        if(i == number){
            print(Math.max(...numbers))
            numbers = [];
        }
   }
}