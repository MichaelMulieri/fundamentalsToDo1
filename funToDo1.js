// Using FOR, print multiples of 3 from -300 to 0. Skip -3 and -6

for(num = -300; num <=0; num = num + 3 ){
    if(num == -3){
        continue
    }
    if(num == -6){
        continue
    }
    console.log(num)
}

// Print integers from 2000 to 5280, using a WHILE

var num = 2000;

while (num <= 5280){
    console.log("The number is " + num)
    num++
}

// Print integers 1 to 100. If divisible by 5, print "Coding" instead. If by 10, also print " Dojo"

for (num = 1; num <= 100; num++){
    if (num % 10 == 0){
        console.log("Coding Dojo")
    }
    else if (num % 5 == 0){
        console.log("Coding")
    }
    else{
        console.log(num)
    }
}

// Given lowNum, highNum, mult, print multiples of mult from highNum down to lowNum, using a FOR. For (2,9,3), print 9 6 3 (on successive lines)

function FlexCount(lowNum, highNum, mult){
    for (num = highNum; highNum >= lowNum; highNum--){
        if (highNum % mult == 0){
            console.log(highNum)
        }
    }
}

FlexCount(2,9,3)
FlexCount(1,15,3)
