$(document).ready(function(){

    // ------------ VAR GLOBALI---------
    var numeriCasuali = [];
    var userChoices = [];
    var numeriRicordati = [];


    // ---------------- MAIN ------------
    for(var i = 0; i < 5; i++){
        numeriCasuali.push(randomNumber(1,100));
    }
    console.log(numeriCasuali);
    // Un alert espone 5 numeri casuali diversi.
    alert('Ricordati questi numeri: ' + numeriCasuali);
    
    // In questo caso con l'ALERT il conto dei secondi parte una volta chiuso


    // Dopo tot secondi l’utente deve inserire, 
    var timer = setTimeout(function(){
        
        // un prompt alla volta, i numeri che ha visto precedentemente.
        yourchoice(numeriCasuali,userChoices);
        console.log(userChoices);
    
    
        // Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.
        check(numeriCasuali,userChoices,numeriRicordati);
        console.log(numeriRicordati);
        alert(' Ha ricordato '+ numeriRicordati.length + ' numeri : '+ numeriRicordati)
    },10000)    
})






// ---------------- FUNZIONI -------------
function check(arraypc,userarray,rememberedarray){
    for ( var i = 0; i < 5; i++){
        if(arraypc.includes(userarray[i])){
            rememberedarray.push(userarray[i]);
            console.log(userarray[i]);
        };
    }
}

function randomNumber(min,max) {
    return Math.floor(Math.random()*(max - min + 1))+ min;
}

function yourchoice(arraypc, arrayuser){
    for(var i=0; i< arraypc.length; i++){
       var choice =  parseInt(prompt('Scelta n°'+ (i+1) + ': inserisci uno dei numeri'));
        arrayuser.push(choice);
    }
}
function isInArray(x,array){
    var find = false;
    var i=0;
    while (i < array.length && find == false){
        if (x == array[i])
            find = true;
        i++;
    }
    return find;
}