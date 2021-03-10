$(document).ready(function () {
    // ------------ VAR GLOBALI---------
    var numeriCasuali = [];
    var userChoices = [];
    var numeriRicordati = [];
    var randomGrid = $('#random')

    //--------------------------------- STEP 1 -----------------------
    alert('Pronto a cominciare?');

    $('.inactive').toggle();

    var sec = 10;
    var countdownTimer;

    countdownTimer = setInterval(function(){
        document.getElementById('timer').innerHTML = sec;
        if(sec == 0){
            document.getElementById('timer').innerHTML = '0';
            clearInterval('countdownTImer');
        } else {
            sec--;
        }
    }, 1000);


    for(var i = 0; i < 5; i++){
        do{
          var tmp = randomNumber(1,100);
        } while (numeriCasuali.includes(tmp))
        numeriCasuali.push(tmp);
    }
    
    document.getElementById('random').innerHTML = numeriCasuali;



    





    // ------------------------------------ STEP 2 ----------------------------

    var delayNumber = setTimeout(function () {
        $('#random').hide();
    }, (sec+1) * 1000)

    var delayChoice = setTimeout(function () {
        yourchoice(numeriCasuali, userChoices);
        console.log(userChoices);


        // --------STEP 3--------

        check(numeriCasuali, userChoices, numeriRicordati);
        console.log(numeriRicordati);
        
        // --------STEP 4--------
        if (numeriRicordati.length == 0){
            alert('Non ne hai ricordato neanche uno, ma che ca....COMPLIMENTONI!');
        } else {
            alert('Hai ricordato '+ numeriRicordati.length + ' numeri : '+ numeriRicordati);
        }
        
        // $('#random').show();
    }, (sec + 1) * 1000 + 500)

})






// // ---------------- FUNZIONI -------------
function check(arraypc,userarray,rememberedarray){
    for ( var i = 0; i < 5; i++){
        if(arraypc.includes(userarray[i])){
            rememberedarray.push(userarray[i]);
            console.log(userarray[i]);
        };
    }
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function yourchoice(arraypc, arrayuser) {
    for (var i = 0; i < arraypc.length; i++) {
        var choice = parseInt(prompt('Scelta n°' + (i + 1) + ': inserisci uno dei numeri'));
        arrayuser.push(choice);
    }
}

