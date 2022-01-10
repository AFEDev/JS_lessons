function random(min, max) {

    min = Math.ceil(min);

    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive

  }

let konvertas;

konvertas = false; 

console.log(typeof konvertas)

console.log(konvertas * 5);

console.log(konvertas + " labas");

konvertas = 85; 

console.log(Boolean(konvertas), "konvertas = 85");

//--------------------------------------------------------------------------------------//
//--------------------------------------boolean-----------------------------------------//
//--------------------------------------------------------------------------------------//

// visi skaiciai -> true
// tik 0 ->         false

// false = 0;
// true = 1;

// false visa laika virsta 0
// true visa laika virsta vienetu

//visi stringai virsta i true
//tuscias stringas " " virsta i false

// true -> zodis "true"
// true -> zodis "false"

//--------------------------------------------------------------------------------------

console.log("2 > 5", 2 > 5);
console.log("14 > 5", 14 > 5);
console.log("18 == 5", 18 == 5);
console.log("18 != 5", 18 != 5);
console.log("18 > 18", 18 > 18);
console.log("18 >= 18", 18 >= 18);


console.log("a == a", "a" == "a");
console.log("a > a", "a" > "a");
console.log("b > a", "b" > "a");
console.log("bz > aa", "bz" > "aa");
console.log("az > aa", "az" > "aa");

console.log("a > A", "a" > "A");
console.log("a > B", "a" > "B");
console.log("DEL > ACK", "DEL" > "ACK");


console.log('1 == true', 1 == true)
console.log("18 == '18'", 18 == "18");


// ===  !==

console.log("18 === '18'", 18 === "18");

//-------------IF--ESLE--ELSE IF---------------------------------------------------------------------------------//

console.log ('CHECK start');

if (3 > 5) {

    console.log('Ja ja!');

} else if (8 > 10) {

console.log('Nain nain!')

} else {

    console.log('Niekas netinka')

}

console.log('CHECK end');

console.log ('--------------------------------------------------------');

let Onute = random(5, 10);
    Petras = random(3, 7);

console.log ("Onutes taškai:", Onute, "Petro taškai:", Petras);

if (Onute > Petras) {
    console.log('Onute laimėjo')
} 

else if ( Onute < Petras ) {
    console.log('Petras laimėjo')
}

else {

    console.log('Lygiosios!!!!')

}

//--------------------------------------------------------------

console.log('---- 1 UZDUOTIS -----')

let x = random(0, 4);
let y = random(0, 4);

console.log ("x =", x, "y = :", y);

if (x > y) {
    if (x == 0 || y == 0) {
        console.log('Dalyba iš nulio negalima')
    }
    else {
    console.log( x / y ) 
    }
}

else if (x < y) {
    if (x == 0) {
        console.log('Dalyba iš nulio negalima')
    }
    else if (y==0) {
        console.log('Dalyba iš nulio negalima')
    }
    else {
    console.log( y / x ) 
    }
}

else {
    console.log('Abi reiksmes lygios')
}

//-------------------------------------------------------------

console.log('---- 2 UZDUOTIS ------')

let a = random(0, 25);
    b = random(0, 25);
    c = random(0, 25);

console.log ("a =", a, "b =", b, "c =", c);

if (a > b ) {
    if (a > c) {
    console.log('a reiksme didziausia')
    }
    else if (a < c) {
        console.log('c reiksme didziausia')
    }
    else 
    console.log('dvi reiksmes lygios')
}

else if (b > a ) {
    if (b > c) {
    console.log('b reiksme didziausia')
    }
    else if (b < c) {
        console.log('c reiksme didziausia')
    }
    else 
    console.log('dvi reiksmes lygios')
}

else {
    console.log('dvi reiksmes lygios')
}

//-----------------------------------------------------------------
console.log('---- 3 UZDUOTIS ------')



let t1 = random(0, 25);
    t2 = random(0, 25);
    t3 = random(0, 25);

    console.log ("t1 =", t1, "t2 =", t2, "t3 =", t3);


if (t1 * t2 * t3) {

    if (t1 + t2 > t3 && t1 + t3 > t2 && t2 + t3 > t1 ) {
        console.log('Trikampis gaunasi')
    }
    
    else {
        console.log('Trikampis nesigauna :(' )
    }
}

else {
    console.log('Trikampis nesigauna :(' )
}

//---------------------------------------------------------------------
    console.log('---- 4 UZDUOTIS ------')

    let 
    vienas = random(0, 2);
    du = random(0, 2);
    trys = random(0, 2);
    keturi = random(0, 2);
    nuliai = 0;
    vienetai = 0;
    dvejatai = 0;

    console.log ("vienas =", vienas, "du =", du, "trys =", trys, "keturi =", keturi);

    if (vienas == 0 ) {
        nuliai++
    }
    else if (vienas == 1) {
        vienetai++
    }
    else {
            dvejatai++;
    }

    if (du == 0 ) {
        nuliai++
    }
    else if (du == 1) {
        vienetai++
    }
    else {
            dvejatai++;
    }

    if (trys == 0 ) {
        nuliai++
    }
    else if (trys == 1) {
        vienetai++
    }
    else {
        dvejatai++;
    }    

    if (keturi == 0 ) {
        nuliai++
    }
    else if (keturi == 1) {
        vienetai++
    }
    else {
        dvejatai++;
    } 

    console.log('Nuliai =', nuliai, 'Vienetai =', vienetai, 'Dvejetai =', dvejatai )

//------------------------------------------------------------------
    console.log('---- 5 UZDUOTIS ------')

    //Naudokite funkcija rand(). Atspausdinkite 3 skaičius naudodami console.log() nuo -10 iki 10. Prie skaičių mažesnių už 0 iš abiejų pusių atspauzdinkite “+” simbolius,  didesnių už 0 iš abiejų pusių atspauzdinkite “-” simbolius, o prie 0 “*” simbolius

    let 
    skaicius1 = random(-10, 10);
    skaicius2 = random(-10, 10);
    skaicius3 = random(-10, 10);
    reiksme = 5

    console.log ("skaicius =", skaicius1, "skaicius =", skaicius2, "tskaicius =", skaicius3 );

    if (skaicius1 > 0 ) {
        console.log('-'+skaicius1+'-')
    }

    else if (skaicius1 < 0 ) {
        skaicius1 = skaicius1 * -1
        console.log('+'+skaicius1+'+')
    }

    else {
        console.log('*'+skaicius1+'*')
    }
    
    if (skaicius2 > 0 ) {
        console.log('-'+skaicius2+'-')
    }

    else if (skaicius2 < 0 ) {
        skaicius2 = skaicius2 * -1
        console.log('+'+skaicius2+'+')
    }

    else {
        console.log('*'+skaicius2+'*')
    }

    if (skaicius3 > 0 ) {
        console.log('-'+skaicius3+'-')
    }

    else if (skaicius3 < 0 ) {
        skaicius3 = skaicius3 * -1
        console.log('+'+skaicius3+'+')
    }

    else {
        console.log('*'+skaicius3+'*')
    }

//Įmonė parduoda žvakes po 1 EUR. Perkant daugiau kaip už 1000 EUR taikoma 3 % nuolaida, daugiau kaip už 2000 EUR - 4 % nuolaida. Parašykite skriptą, kuri skaičiuos žvakių kainą ir atspausdintų atsakymą su console.log() kiek žvakių ir kokia kaina perkama. Žvakių kiekį generuokite ​rand()​ funkcija nuo 5 iki 3000.

//------------------------------------------------------------------
console.log('---- 6 UZDUOTIS ------')

let kaina = random(5, 3000);

if (kaina > 2000) {
    console.log('Zvakiu kiekis: ', kaina, 'Kaina su 4% nuolaida', kaina = kaina * 98 / 100,'Eu'  )
}

else if (kaina > 1000) {
    console.log('Zvakiu kiekis: ', kaina, 'Kaina su 2% nuolaida', kaina = kaina * 96 / 100,'Eu'  )
}

else {
console.log('Zvakiu kiekis: ', kaina, 'Kaina be nuolaidos', kaina, 'Eu' )
}

//Naudokite funkcija rand(). Sukurkite tris kintamuosius su atsitiktinėm reikšmėm nuo 0 iki 100. Paskaičiuokite jų aritmetinį vidurkį. Ir aritmetinį vidurkį atmetus tas reikšmes, kurios yra mažesnės nei 10 arba didesnės nei 90. Abu vidurkius atspausdinkite su console.log()

//------------------------------------------------------------------
console.log('---- 7 UZDUOTIS ------')

let
k1 = random(0, 100);
k2 = random(0, 100);
k3 = random(0, 100);
k1ok = 1;
k2ok = 1;
k3ok = 1;

console.log('Gautos reiksmes:', k1 , k2 , k3)

let aritmetinis = (k1 + k2 + k3) / 3;

console.log('Aritmetinis vidurkis:', aritmetinis)

if (k1 > 10 && k1 < 90) {
    k1ok = k1;
}

if (k2 > 10 && k2 < 90) {
    k2ok = k2;
}

if (k3 > 10 && k3 < 90) {
    k3ok = k3;
}

console.log ('Vidurkis suapvalinus:',(k1ok + k2ok + k3ok) / 3)




