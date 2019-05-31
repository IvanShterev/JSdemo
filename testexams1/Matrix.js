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
    [
     '3 5',
  'dr dl dl ur ul',
  'dr dr ul ul ur',
  'dl dr ur dl ur'
    ]
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

let arr = gets();
let rowCols = arr[0].split(' ').map(Number);
let rows = +rowCols[0];
let cols = +rowCols[1];

let matrix = arr.slice(1).
map(function(line){
    return line.split(' ')
}),
row = 0,
col = 0,
sum = 0,
dir,
deltas = {
    d: +1,
    u: -1,
    r: +1,
    l: -1
},
leftRight ,
upDown ;



while(1){
    // sum,dir,updown,leftright,row,cow
    if(!matrix[row] || !matrix[row][col]){
        print('succesed with ' + sum)
        break;
    }
    if(matrix[row][col] == 'used'){
        print('failed at (' + row + ', ' + col + ')')
        break;
    }
    sum += (1 << row) + col;
    dir = matrix[row][col];
    upDown = dir[0];
    leftRight = dir[1];
    matrix[row][col] = 'used';

    row += deltas[upDown];
    col += deltas[leftRight]
}
