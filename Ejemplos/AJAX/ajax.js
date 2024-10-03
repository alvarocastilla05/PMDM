$(document).ready(function(){
   $.ajax({
    url: "https://swapi.dev/api/people", 
    method: "GET",

   }).done(function(data){
    debugger;
    //Toma como entrada el texto en JSON que me llega del servidor y lo convierte a un objeto.
    var json = JSON.parse(data); 
    debugger;
    
    /*Lo que se programa dentro de esta función será ejecutado cuando se haya
     resuelto la petición asíncrona, es decir, cuando llegue la respuesta del servidor*/


   });

   
    
});