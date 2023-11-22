//------------- 1 uzduotis ---------------
// function hello(){
//     return "sveikinimas";
// }
// let pasisveikinimas = hello();
// console.log(pasisveikinimas);
// function greetings(vardas, pas){
//     console.log(`${vardas} ${pas}`);
// }
// greetings('Jonas', pasisveikinimas);
// greetings('Reksas', pasisveikinimas);
//----------------------------------------

// ------------- 2 uzduotis ---------------
// function lyginimas(sk1 ,sk2){
//     skaicius = sk1;
//     if (skaicius>sk2){
//         console.log("pirmas skaicius didesnis")
//     }
//     else if (sk2>skaicius){
//         console.log("antras skaicius didesnis")
//     }
//     else{
//         sum = skaicius + sk2;
//         console.log(`abu skaiciai lygus, ju suma ${sum}`);
//     }
//     return skaicius;  
// }
// lyginimas(13, 13)
//----------------------------------------

//------------- 3 uzduotis ---------------
// function fizzAndBuzz(string) {
//     if (string === "fizz") {
//       console.log("buzz");
//     } else if (string === "buzz") {
//       console.log("fizz");
//     } else {
//       console.log("Please provide fizz or buzz");
//     }
//   }
//   fizzAndBuzz("fizz")
//----------------------------------------

//------------- 4 uzduotis ---------------
// function trikampis(a, b, c){
//     if ((a**2)+(b**2)==(c**2)){
//         console.log("statusis trikampis susidarys")
//     }
//     else{
//         console.log("satusis trikampis nesusidarys")
//     }
// }
// trikampis(5, 12, skaicius);
//----------------------------------------

//------------- 5 uzduotis ---------------
// let pav=prompt("Iveskite 'kvadratas' arba 'staciakampis'");
// function ivedimas(pav){
//     return pav
// }
// function tikrinimas(figura){
//      if (figura=="kvadratas"){
//         let a=parseInt(prompt("Iveskite krastines ilgi"));
//         plotas = a**2;
//         alert(`plotas lygus ${plotas}`);
//      }
//      else{
//         let a=parseInt(prompt("Iveskite a krastines ilgi"));
//         let b=parseInt(prompt("Iveskite b krastines ilgi"));
//         plotas = a * b;
//         alert(`plotas lygus ${plotas}`);
//      }
// }
// tikrinimas(pav);
//----------------------------------------

//------------- 6 uzduotis ---------------
// function isSeven(x) {
//     return x === "7" ? true : false;
// }
// console.log(isSeven("7"));
//----------------------------------------

//------------- 7 uzduotis ---------------
function tikrinimas(a, b){
    if (a === b){
        console.log("boolean true")
    }
    else{
        console.log("false")
    }
}
tikrinimas(1, 1);
//----------------------------------------

//------------- 8 uzduotis ---------------
// let prob=parseInt(prompt("Iveskite prob"));
// let prize=parseInt(prompt("Iveskite prize"));
// let pay=parseInt(prompt("Iveskite pay"));
// function tikrinimas(prob, prize, pay){
//     sandauga = prob * prize;
//     if (sandauga>=pay){
//         console.log("True");
//     }
//     else{
//         console.log("False");
//     }
// }
// tikrinimas(prob, prize, pay);
//----------------------------------------

//------------- 9 uzduotis ---------------
// let min=parseInt(prompt("Iveskite laika min"));
// function konvertavimas(min){
//     sec = min * 60;
//     console.log(`${min} min = ${sec} s`);
// }
// konvertavimas(min);
//----------------------------------------


//------------- 10 uzduotis ---------------
// let sk1=parseInt(prompt("Iveskite pirma skaiciu: "));
// let veiksmas=prompt("Iveskite veiksma (+,-,*,/): ");
// let sk2=parseInt(prompt("Iveskite antra skaiciu: "));
// function skaiciuotuvas(sk1, veiksmas, sk2){
//     if(veiksmas=='+'){
//         sum1 = sk1+sk2;
//         alert(`suma: ${sum1}`);
//     }
//     else if(veiksmas=='-'){
//         sum2 = sk1-sk2;
//         alert(`suma ${sum2}`);
//     }
//     else if(veiksmas=='*'){
//         sum3 = sk1*sk2;
//         alert(`suma ${sum3}`);
//     }
//     else if(veiksmas=='/' && sk2==0){
//         alert("veiksmas negalimas");
//     }
//     else if(veiksmas=='/'){
//         sum4 = sk1/sk2;
//         alert(`suma ${sum4}`);
//     }
//     else{
//         alert("veiksmas negalimas");
//     }
// }
// skaiciuotuvas(sk1, veiksmas, sk2);
//----------------------------------------