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
    '3'
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;


let n = gets();
if(n == 'J'){
    for(let i = 2; i <= 10; i++){
        print(i + ' of spades,' , i + ' of clubs,', i + ' of hearts,', i + ' of diamonds,' ); 
    }    
    print('J' + ' of spades,' , 'J' + ' of clubs,', 'J' + ' of hearts,', 'J' + ' of diamonds' )
}
else if(n == 'Q'){
    for(let i = 2; i <= 10; i++){
        print(i + ' of spades,' , i + ' of clubs,', i + ' of hearts,', i + ' of diamonds' ); 
    }    
    print('J' + ' of spades,' , 'J' + ' of clubs,', 'J' + ' of hearts,', 'J' + ' of diamonds' )
    print('Q' + ' of spades,' , 'Q' + ' of clubs,', 'Q' + ' of hearts,', 'Q' + ' of diamonds' )

}
else if(n == 'K'){
    for(let i = 2; i <= 10; i++){
        print(i + ' of spades,' , i + ' of clubs,', i + ' of hearts,', i + ' of diamonds' ); 
    }    
    print('J' + ' of spades,' , 'J' + ' of clubs,', 'J' + ' of hearts,', 'J' + ' of diamonds' )
    print('Q' + ' of spades,' , 'Q' + ' of clubs,', 'Q' + ' of hearts,', 'Q' + ' of diamonds' )
    print('K' + ' of spades,' , 'K' + ' of clubs,', 'K' + ' of hearts,', 'K' + ' of diamonds' )

}
else if(n == 'A'){
    for(let i = 2; i <= 10; i++){
        print(i + ' of spades,' , i + ' of clubs,', i + ' of hearts,', i + ' of diamonds' ); 
    }    
    print('J' + ' of spades,' , 'J' + ' of clubs,', 'J' + ' of hearts,', 'J' + ' of diamonds' )
    print('Q' + ' of spades,' , 'Q' + ' of clubs,', 'Q' + ' of hearts,', 'Q' + ' of diamonds' )
    print('K' + ' of spades,' , 'K' + ' of clubs,', 'K' + ' of hearts,', 'K' + ' of diamonds' )
    print('A' + ' of spades,' , 'A' + ' of clubs,', 'A' + ' of hearts,', 'A' + ' of diamonds' )

}

else{
for(let i = 2; i <= n; i++){
    print(i + ' of spades,' , i + ' of clubs,', i + ' of hearts,', i + ' of diamonds' ); 
}}