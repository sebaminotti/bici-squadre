/**
 * creiamo un arrai di oggetti ! questa volta saranno squadre di calcio ! 
 * daremo il nome della squadra ma punti falli subiti e falli fatti saranno settati a 0
 * tramite funzione e ciclando dovremo incrementare falli e punti nelle nostre squadre
 */

//creiamo l'array di squadre ! (SEMPRE FORZA INTER!!)
$(document).ready(function(){

var serieA = [
 {
    squadra : 'inter',
    falliSubiti:0,
    falliFatti:0,
    punti:0,
    },

    {
    squadra : 'psg',
    falliSubiti:0,
    falliFatti:0,
    punti:0,
    },
    {
    squadra : 'ajax',
    falliSubiti:0,
    falliFatti:0,
    punti:0,
    },
    {
    squadra : 'chelsea',
    falliSubiti:0,
    falliFatti:0,
    punti:0,
    },
   {
    squadra : 'barcellona',
    falliSubiti:0,
    falliFatti:0,
    punti:0,
    },
    team={
    squadra : 'deportivo',
    falliSubiti:0,
    falliFatti:0,
    punti:0,
    },
     {
    squadra : 'borussia dortmund',
    falliSubiti:0,
    falliFatti:0,
    punti:0,
    },
   {
    squadra : 'shalche04',
    falliSubiti:0,
    falliFatti:0,
    punti:0,
    },
   {
    squadra : 'thottenam',
    falliSubiti:0,
    falliFatti:0,
    punti:0,
    },
      {
    squadra : 'lazio',
    falliSubiti:0,
    falliFatti:0,
    punti:0,
    },
]

// console.log(serieA);



// for(var i = 0; i < serieA.length; i++){
//     serieA[i]['presenze']=gameFoul()
//     serieA[i]['championsLigue']=Math.floor( Math.random()*(1,20)+1)
//     serieA[i].punti = point()
//     serieA[i].falliFatti = gameFoul()
//     serieA[i].falliSubiti =gameFoul()

    
//      console.log(serieA[i]);


     
// }
console.log('--------------------------------------------------------------');
serieA.forEach(element => {
   element.falliFatti = gameFoul()
   element.falliSubiti= gameFoul()
   element.punti= point()
    element.campionatiVinti=scudetti()
    element.chempionsLigue= Math.floor(Math.random()*(1,20)+1)
   console.log(element);

   
});

})



// creiamo due funzion che ci ritornino dei numeri random (che saranno i nostri falli e punti)

const point = () => {
    return Math.floor(Math.random()*(1,100)+1)
}

const gameFoul  = () => {
    return Math.floor(Math.random()*(1,30)+1)
}

const scudetti  = () => {
    return Math.floor(Math.random()*(1,40)+1)
}



