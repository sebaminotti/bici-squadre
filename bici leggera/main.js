/**
 * creiamo un array di oggetti contenenti biciclette per ognuna indichiamo nome modello perso e prezzo 
 */
$(document).ready(function(){

var biciclette = [
{
nome : 'bici bianchi',
target:'sportivi professionisti',
modello:'corsa veloce',
prezzo:8900 ,
peso: 4.1,
},
{
nome : 'rossetti',
target:'sportivi professionisti',
modello:'corsa cronometro',
prezzo:8780 ,
peso: 3.8,
},
{
nome : 'mountainbike',
target:'enduro downhill',
modello:'rock\'s byke',
prezzo:6500 ,
peso: 7.1,
},
{
nome : 'bici bianchi',
target:'normali cittadini',
modello:'graziella',
prezzo:340 ,
peso: 10,
},
{
nome : 'carrera sport',
target:'sportivi professionisti',
modello:'hill',
prezzo:9000 ,
peso: 2.5,
},
{
nome : 'montblanc',
target:'sportivi estremi',
modello:'titanio magnesio',
prezzo:15000 ,
peso: 5.4,
},
{
nome : 'tunder',
target:'appassionati',
modello:'thandem',
prezzo:1450 ,
peso: 13,
},
{
nome : 'rossini',
target:'persone non sportive',
modello:'country',
prezzo:2000 ,
peso: 9.5,
},
]

var leggera 
leggera = biciclette[0];

/**
 * esercizio con il ciclo for in
 */
for(key in biciclette){
     
    if(biciclette[key].peso < leggera.peso){

        leggera = biciclette[key]
    }



 
 document.getElementById('listabici').innerHTML += `<li class='green'>NOME :${biciclette[key].nome}</li>`
 document.getElementById('listabici').innerHTML += `<li class='red'>MODELLO :${biciclette[key].modello}</li>`
 document.getElementById('listabici').innerHTML += `<li class='blue'>PREZZO: ${biciclette[key].prezzo} €</li>`
 document.getElementById('listabici').innerHTML += `<li class='orange'>PESO: ${biciclette[key].peso} kg</li>`

}  
 document.getElementById('leggera').innerHTML += `<li class='green'>NOME :${leggera.nome}</li>`
 document.getElementById('leggera').innerHTML += `<li class='red'>MODELLO :${leggera.modello}</li>`
 document.getElementById('leggera').innerHTML += `<li class='blue'>PREZZO :${leggera.prezzo} €</li>`
 document.getElementById('leggera').innerHTML += `<li class='orange'>PESO :${leggera.peso} kg</li>`
    // console.log(leggera);
   
/**
 * esercizio con il ciclo forEach
 */


biciclette.forEach(element => {
   console.log(element);
      if(element.peso < leggera.peso){

        leggera = element

        document.getElementById('listabici').innerHTML += `<li class='green'>NOME :${biciclette[key].nome}</li>`
        document.getElementById('listabici').innerHTML += `<li class='red'>MODELLO :${biciclette[key].modello}</li>`
        document.getElementById('listabici').innerHTML += `<li class='blue'>PREZZO: ${biciclette[key].prezzo} €</li>`
        document.getElementById('listabici').innerHTML += `<li class='orange'>PESO: ${biciclette[key].peso} kg</li>`
      }
      
});
console.log('---------------------------------------------------------------');
console.log(leggera);

})
