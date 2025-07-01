

function dpi(){
    console.log("1");
    function dps(){
        console.log("2");// localy declar hua hai nahi chalega bahar 
        // under hii call kia to chalega werna nahi 
    }
    dps();
}

dpi();