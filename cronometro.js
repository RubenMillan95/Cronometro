
function cronometro(){
   let hora=0, minuto=0, segundo=0;

   while(minuto<3){
    if(segundo<60){
        segundo++;
    }else{
        segundo=0;
        minuto++;

        if(minuto<60){
            minuto++;
        }else{
            minuto=0;
            hora++;
        }
    }
    //cronometro con la fecha del navegador

    //pausa de 1 segundo
    let fecha=new Date();
    let fecha2=new Date();
    //esperar a que pase un segundo
    //while(fecha2-fecha<1000){
    //    fecha2= new Date();
    //}
    do{
        fecha2=new Date();
    }while(fecha2-fecha<1000);

    //Función asincrona y Call back
    setTimeout(function(){console.log(hora+":"+ minuto + ":" + segundo)}, 1000);

    //setTimeout(call, 1000);

    //otro retraso de 1 segundo
    //Promise: objeto que representa la ejecución 
    //de una función asincrona
    new Promise(r=>setTimeout(r, 1000));

    //setTimeout(()=>{}, 1000);




   }
}

cronometro();