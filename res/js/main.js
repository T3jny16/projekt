const cookie = document.getElementById("cookie")
const counter = document.getElementById("counter")

// .onclick na kliknutí
// () => {} arrow fce

let numberOfCookies = 0;

cookie.onclick = () => {
    //numberOfCookies = numberOfCookies + 1;
    //numberOfCookies += 1;
    // inkrement - zveda cislo o 1
    //-- dekrement - zmensuje cislo o 1
    numberOfCookies++;
    
    //counter.innerHTML = "počet zabitejch negru :" + numberOfCookies
    counter.innerHTML = `GOALS⚽: ${numberOfCookies}`;









    console.log("Click")
    console.log (numberOfCookies);
}





 /*ziska elemnt z html dokumentu
document.getElementById("counter")

/*konsel je sasek a je nejgorší a smrdí*/
/* const - promenna co se nemeni - promenna co se muze menit*/



const PI = 3.14;

let number = 0;
console.log(number)
number = 10;
console.log(number);
console.log(PI);