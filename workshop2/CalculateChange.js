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
    '1.92',
    '5'
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

let price =  gets();
let gMoney = gets();
 
let change = (gMoney - price).toFixed(2);



if(String(change).charAt(0) > 0){
    print(Math.floor(change).toFixed(0) + ' x 1 lev')
}
if((String(change).charAt(2)) >= 5){
    print('1 x 50 stotinki');
}


if(((String(change).charAt(2)) < 5) && ((String(change).charAt(2)) > 0 &&
((String(change).charAt(2))%2) == 0)){
    print(((String(change).charAt(2)/2)) + " x 20 stotinki");
}

if(((String(change).charAt(2)) < 5) && ((String(change).charAt(2)) > 0 &&
((String(change).charAt(2))%2) == 1 &&
(String(change).charAt(2)) > 2)){
    print(1 + " x 20 stotinki");
}
if(((String(change).charAt(2)) < 5) && ((String(change).charAt(2)) > 0 &&
((String(change).charAt(2))%2) == 1)){
    print(1 + " x 10 stotinki");
}

if(((((String(change).charAt(2)))%5 > 1)
&&
(((String(change).charAt(2)))%5 < 4) &&
String(change).charAt(2) > 5)
){
      print(1 + " x 20 stotinki");
}if((((((String(change).charAt(2)))%5 >3)&&
((String(change).charAt(2))%2) == 1)
&&
(String(change).charAt(2) > 5))){
    print(2 + " x 20 stotinki");
}

if(((String(change).charAt(2)) > 5 || (String(change).charAt(2)) < 5)
&& (String(change).charAt(2)) > 0 
&& ((String(change).charAt(2)) - 5) % 2 == 1){
    print(1 + " x 10 stotinki")
}

if((String(change).charAt(3)) >= 5){
    print('1 x 5 stotinki');
}

if((((String(change).charAt(3)))%5 > 1)
&&
(((String(change).charAt(3)))%5 < 4) &&
String(change).charAt(3) > 5)
{
    print(1 + " x 2 stotinki")
}

if((((((String(change).charAt(3)))%5 >3)&&
((String(change).charAt(3))%2) == 1)
&&
(String(change).charAt(3) > 5))){
    print(2 + " x 2 stotinki");
}

if(((String(change).charAt(3)) < 5) && (((String(change).charAt(3)) > 1) &&
((String(change).charAt(3))%2) == 0 )){
    print(((String(change).charAt(3)/2)) + " x 2 stotinki");
}

if(((String(change).charAt(3)) < 5) && ((String(change).charAt(3)) > 0 &&
((String(change).charAt(3))%2) == 1)){
    print(1 + " x 1 stotinka");
}

if(((String(change).charAt(3)) > 5 || (String(change).charAt(3)) < 5)
&& (String(change).charAt(3)) > 0 
&& ((String(change).charAt(3)) - 5) % 2 == 1){
    print(1 + " x 1 stotinka")
}

print(change)



