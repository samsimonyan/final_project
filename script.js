var grassArr = []; //խոտերի զանգված
var eatersArr = []; //խոտակերների զանգված
var gishatichArr = [];
var gishutoxArr = [];
var gishututoxArr = [];
var xangaroxArr = [];
var side = 20;
var matrix = [
    [3, 4, 3, 2, 4, 5, 1, 0, 0, 4, 1, 0, 0, 1, 4, 1, 0, 3, 0, 1, 2, 4, 1, 0, 1, 0, 3],
    [0, 6, 2, 4, 0, 0, 1, 0, 0, 0, 0, 2, 0, 1, 3, 0, 0, 6, 0, 1, 2, 1, 0, 0, 1, 0, 6],
    [0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 3, 2, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 2, 0, 1, 1, 0, 0, 2, 0, 1, 0, 0, 1, 0, 2, 3, 0, 0, 1, 2, 0, 2, 0, 1, 0, 0],
    [0, 2, 0, 0, 0, 0, 0, 0, 0, 2, 3, 2, 4, 0, 0, 1, 0, 0, 0, 1, 0, 0, 4, 0, 0, 0, 0],
    [1, 0, 2, 0, 1, 0, 2, 0, 4, 3, 1, 2, 1, 0, 0, 0, 3, 6, 1, 1, 0, 3, 1, 0, 2, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 0, 2, 1, 3, 0, 1, 0, 5, 0, 3, 0, 0, 2, 0, 0, 0, 1, 4, 1],
    [6, 2, 1, 0, 0, 3, 0, 4, 0, 0, 2, 2, 5, 1, 0, 1, 0, 0, 2, 1, 0, 1, 3, 0, 0, 0, 0],
    [0, 1, 2, 3, 0, 0, 1, 4, 0, 0, 0, 3, 0, 0, 0, 1, 0, 2, 0, 1, 2, 0, 1, 3, 1, 0, 0],
    [0, 2, 0, 0, 2, 0, 1, 0, 0, 2, 0, 2, 0, 0, 0, 4, 0, 0, 0, 4, 0, 2, 0, 0, 1, 0, 0],
    [0, 1, 0, 0, 2, 0, 0, 0, 0, 0, 0, 4, 0, 1, 3, 1, 4, 2, 1, 0, 0, 0, 1, 0, 0, 0, 0],
    [0, 1, 2, 0, 0, 0, 1, 0, 0, 0, 1, 4, 0, 2, 3, 1, 5, 0, 2, 3, 2, 0, 4, 2, 0, 1, 0],
    [3, 1, 0, 3, 1, 0, 2, 3, 2, 0, 1, 2, 3, 3, 0, 0, 0, 0, 0, 1, 2, 3, 1, 3, 2, 0, 3],
    [0, 2, 1, 0, 0, 3, 4, 0, 4, 0, 2, 2, 0, 1, 0, 1, 4, 0, 2, 1, 3, 1, 0, 0, 0, 0, 0],
    [0, 1, 2, 0, 0, 0, 1, 0, 4, 0, 0, 3, 0, 0, 0, 1, 4, 2, 0, 1, 2, 4, 1, 3, 1, 0, 0],
    [0, 2, 0, 4, 2, 6, 1, 0, 0, 2, 3, 2, 0, 0, 0, 0, 3, 0, 0, 0, 0, 2, 0, 0, 1, 0, 0],
    [0, 1, 4, 0, 2, 0, 0, 0, 0, 4, 0, 0, 0, 1, 0, 3, 0, 2, 1, 0, 2, 0, 1, 0, 0, 0, 4],
    [0, 1, 2, 0, 0, 0, 1, 0, 0, 0, 1, 4, 0, 2, 3, 1, 0, 0, 2, 1, 2, 0, 0, 2, 0, 1, 0],
    [3, 1, 0, 0, 1, 3, 2, 0, 2, 0, 1, 2, 3, 3, 0, 0, 0, 4, 2, 1, 2, 3, 1, 4, 2, 0, 3],
    [3, 4, 3, 0, 1, 0, 1, 4, 2, 4, 1, 0, 3, 1, 0, 1, 0, 3, 0, 1, 2, 4, 1, 0, 1, 0, 3],
    [0, 0, 2, 4, 3, 0, 1, 0, 0, 5, 3, 2, 0, 1, 0, 0, 0, 5, 3, 1, 2, 1, 0, 0, 1, 0, 0],
    [0, 1, 0, 4, 1, 0, 1, 2, 0, 0, 0, 0, 0, 2, 5, 1, 0, 3, 0, 1, 0, 0, 1, 0, 0, 2, 0],
    [6, 0, 2, 0, 1, 1, 0, 0, 2, 0, 1, 0, 0, 1, 0, 2, 3, 0, 4, 1, 2, 0, 2, 0, 1, 0, 0],
    [0, 2, 0, 0, 0, 0, 0, 4, 0, 2, 0, 2, 4, 0, 0, 1, 0, 0, 0, 1, 0, 6, 4, 0, 0, 0, 6],
    [1, 0, 2, 0, 1, 0, 2, 0, 4, 3, 1, 2, 1, 0, 0, 0, 3, 0, 1, 1, 0, 3, 1, 0, 2, 4, 0],
    [3, 4, 3, 0, 1, 0, 1, 0, 0, 4, 5, 0, 0, 1, 0, 1, 0, 3, 0, 1, 2, 4, 1, 0, 1, 0, 3],
    [6, 0, 2, 4, 0, 5, 1, 0, 3, 0, 5, 2, 0, 1, 0, 0, 0, 0, 0, 5, 2, 1, 0, 0, 1, 4, 1]
    ];
function setup() {
    noStroke();
    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side); //կանվասի չափերը դնել մատրիցի չափերին համապատասխան
    background('#acacac');

    //մատրիցի վրա կրկնակի ցիկլը լցնում է խոտերի, խոտակերների զանգվածները օբյեկտներով 
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                var grass = new Grass(x, y);
                grassArr.push(grass);
            }

            else if (matrix[y][x] == 2) {
                var eater = new GrassEater(x, y);
                eatersArr.push(eater);
            }

            else if (matrix[y][x] == 3) {
                var gishatich = new Gishatich(x, y);
                gishatichArr.push(gishatich);
            }
                 else if (matrix[y][x] == 4) {
                var gishutox = new Gishutox(x, y);
                gishutoxArr.push(gishutox);
            }
                else if (matrix[y][x] == 5) {
                var gishututox = new Gishututox(x, y);
                gishututoxArr.push(gishututox);
            }
                else if (matrix[y][x] == 6) {
                var xangarox = new Xangarox(x, y);
                xangaroxArr.push(xangarox);
            }
        }
    }
}

function draw() {
    //գծում է աշխարհը
    background('#acacac');
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] == 1) {
                fill("green");
                rect(j * side, i * side, side, side);
            }

            else if (matrix[i][j] == 2) {
                fill("yellow");
                rect(j * side, i * side, side, side);
            }

            else if (matrix[i][j] == 3) {
                fill('red');
                rect(j * side, i * side, side, side);
            }
            else if (matrix[i][j] == 4) {
                fill('blue');
                rect(j * side, i * side, side, side);
            }
            else if (matrix[i][j] == 5) {
                fill('#911eb4');
                rect(j * side, i * side, side, side);
            }
            else if (matrix[i][j] == 6) {
                fill('black');
                rect(j * side, i * side, side, side);
            }
            else if (matrix[i][j] == 0) {
                fill('#acacac');
                rect(j * side, i * side, side, side);
            }
        }
    }
    //խոտը բազմանում է
    for (var i in grassArr) {
        grassArr[i].mul();
    }

    //խոտակերը ուտում է խոտ
    for (var i in eatersArr) {
        eatersArr[i].eat();
    }
    for (var i in gishatichArr) {
        gishatichArr[i].eat();
    }
     for (var i in gishutoxArr) {
        gishutoxArr[i].eat();
    }
     for (var i in gishututoxArr) {
        gishututoxArr[i].eat();
    }
     for (var i in xangaroxArr) {
        xangaroxArr[i].move();
    }
    
    
    
    
   
if (gishutoxArr.length == 1) {
        var gishutox1 = new Gishutox (11,15);
        gishutoxArr.push(gishutox1);
    }
   if (eatersArr.length == 0) {
        var eater1 = new GrassEater(10,10);
        eatersArr.push(eater1)
        
    }
 
 if (eatersArr.length ==1) {
        var eater2 = new GrassEater(0,0);
        eatersArr.push(eater2)
        
    }
    if (eatersArr.length ==2) {
        var eater2 = new GrassEater(20,5);
        eatersArr.push(eater2)
        
    }
    if (eatersArr.length == 0) {
        var eater1 = new GrassEater(3,3);
        eatersArr.push(eater1)
        
    }
    if (eatersArr.length ==3) {
        var eater2 = new GrassEater(7,6);
        eatersArr.push(eater2)
        
    }
    if (grassArr.length == 0) {
        var grass1 = new Grass(3,3);
        grassArr.push(grass1);
    }
    if (grassArr.length == 1) {
        var grass1 = new Grass(10,12);
        grassArr.push(grass1);
    }
    if (grassArr.length == 7) {
        var grass1 = new Grass(0,19);
        grassArr.push(grass1);
    }
    if (grassArr.length == 2) {
        var grass1 = new Grass(20,7);
        grassArr.push(grass1);
    }
   
    if (grassArr.length == 3) {
        var grass1 = new Grass(3,0);
        grassArr.push(grass1);
    }
    if (grassArr.length == 0) {
        var grass1 = new Grass(0,0);
        grassArr.push(grass1);
    }
 if (grassArr.length == 0) {
        var grass1 = new Grass(8,5);
        grassArr.push(grass1);
    }
  if (grassArr.length == 0) {
        var grass1 = new Grass(3,3);
        grassArr.push(grass1);
    }
   if (grassArr.length == 0) {
        var grass1 = new Grass(11,9);
        grassArr.push(grass1);
    }
 if (grassArr.length == 1) {
        var grass1 = new Grass(10,12);
        grassArr.push(grass1);
    }
    if (grassArr.length == 10) {
        var grass1 = new Grass(26,26);
        grassArr.push(grass1);
    }
    if (gishatichArr.length == 0) {
        var gishatich1 = new Gishatich(2,3);
        gishatichArr.push(gishatich1);
    }
    if (gishatichArr.length == 1) {
        var gishatich1 = new Gishatich(16,0);
        gishatichArr.push(gishatich1);
    }
     if (gishatichArr.length == 2) {
        var gishatich1 = new Gishatich(10,1);
        gishatichArr.push(gishatich1);
    }
      if (gishutoxArr.length == 0) {
        var gishutox1 = new Gishutox(12,12);
        gishutoxArr.push(gishutox1);
    }
    if (eatersArr.length ==1) {
        var eater2 = new GrassEater(24,24);
        eatersArr.push(eater2)
        
    }
     if (gishututoxArr.length == 6) {
        var gishututox1 = new Gishututox (6,0);
        gishututoxArr.push(gishututox1);
    }
   if (gishututoxArr.length == 0) {
        var gishututox1 = new Gishututox (19,3);
        gishututoxArr.push(gishututox1);
    }
    if (gishututoxArr.length == 3) {
        var gishututox1 = new Gishututox (13,15);
        gishututoxArr.push(gishututox1);
    }
    if (gishututoxArr.length == 2) {
        var gishututox1 = new Gishututox (0,15);
        gishututoxArr.push(gishututox1);
    }
    if (gishututoxArr.length == 1) {
        var gishututox1 = new Gishututox (10,10);
        gishututoxArr.push(gishututox1);
    }
    if (gishututoxArr.length == 2) {
        var gishututox1 = new Gishututox (13,14);
        gishututoxArr.push(gishututox1);
    }
    if (gishutoxArr.length == 2) {
        var gishutox1 = new Gishutox(12,11);
        gishutoxArr.push(gishutox1);
    }
}



// var matrix1 = []

// for(var y = 0; y < 50;++y){
//     matrix1[y]=[]
//     for(var x = 0; x < 50;++x){
//         var rand = Math.floor(Math.random()*101);
//         if(rand < 60) {
//             matrix1[y][x] = 1;
//         }else if(rand < 80){
//             matrix1[y][x] = 2;
//         }else{
//             matrix1[y][x] = 0;
//         }

//     }
// }



// console.log(matrix1)        // matrix generacnel