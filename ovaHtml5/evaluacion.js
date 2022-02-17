var correctas=0;
var incorrectas=0;
var sinResp=[];
var evalua={
    "preg":"¿Ques es las Informática?",
    "opc1":"Es una Ciencia",
    "opc2":"Ciencia que estudia la Computación",
    "opc3":"Es el procesamiento electrónico de datos",
    "opc4":"Ciencia que estudia los Sistemas de información Inteligentes",
    "respCorrecta":"opc4",
    "respEst":null,
}
var  myArrayPreg=[
    {
        "preg":"1°. ¿Qué es la multiplicación?",
        "opc1":"a. Operación en la cual se suma un número tantas como indique otro",
        "opc2":"b. Operación en la cual se restan algunas cifras",
        "opc3":"c. Operación en la cual se dividen las cifras en partes iguales",
        "opc4":"d. Ninguna de las anteriores",
        "respCorrecta":"opc1",
        "respEst":null,
    },
    {
        "preg":"2°. ¿Qué signo representa a la multiplicación?",
        "opc1":"a. El signo (-)",
        "opc2":"b. El signo (+)",
        "opc3":"c. El signo (x)",
        "opc4":"d. Ninguna de las anteriores",
        "respCorrecta":"opc3",
        "respEst":null, 
    },
    {
        "preg":"3°. ¿Cuál es la importancia de la multiplicación?",
        "opc1":"a. Es importante para cantar",
        "opc2":"b. Es importante para soñar",
        "opc3":"c. Es importante para calcular ",
        "opc4":"d. Ninguna de las anteriores",
        "respCorrecta":"opc3",
        "respEst":null, 
    },
    {
        "preg":"4°. ¿Qué son las tablas de multiplicar?",
        "opc1":"a. Una herramienta que facilita el proceso de aprendizaje de la multiplicación",
        "opc2":"b. Una herramienta que facilita el proceso de cocinar ",
        "opc3":"c. Una herramienta que facilita el proceso de dormir",
        "opc4":"d. Ninguna de las anteriores",
        "respCorrecta":"opc1",
        "respEst":null,
    },
    {
        "preg":"5°. ¿Cuál es la importancia de las tablas de multiplicar?",
        "opc1":"a. Son importantes para las paredes de las casas",
        "opc2":"b. Son importantes para ayudar en el desenvolvimiento de los alumnos en el área de las matemáticas ",
        "opc3":"c. Son importantes para el soporte de la cama",
        "opc4":"d. Ninguna de las anteriores",
        "respCorrecta":"opc2",
        "respEst":null,    
    },
    {
        "preg":"6°. Si multiplico 3 x 4, ¿el producto es?",
        "opc1":"a. 20",
        "opc2":"b. 14",
        "opc3":"c. 12",
        "opc4":"d. 8",
        "respCorrecta":"opc3",
        "respEst":null,     
    },
    {
        "preg":"7°. ¿Cuál es el resultado de la multiplicación 5 x 5?",
        "opc1":"a. 15",
        "opc2":"b. 10",
        "opc3":"c. 25",
        "opc4":"d. 30",
        "respCorrecta":"opc3",
        "respEst":null,  
    },
    {
        "preg":"8°. Si sumo 4 + 4 + 4 + 4 +4 + 4 el resultado sería: (24). ¿Cómo sería esta operación convertida en multiplicación?",
        "opc1":"a. 5 x 8",
        "opc2":"b. 7 x 6",
        "opc3":"c. 9 x 3",
        "opc4":"d. 6 x 4",
        "respCorrecta":"opc4",
        "respEst":null,  
    },
    {
        "preg":"9°. Juan tiene 9 cajas de colores, si en cada caja hay 7 colores. ¿Cuántos colores tiene Juan?",
        "opc1":"a. 44",
        "opc2":"b. 63",
        "opc3":"c. 82",
        "opc4":"d. Ninguna de las anteriores",
        "respCorrecta":"opc2",
        "respEst":null,  
    },
    {
        "preg":"10°. María, Luis y Keimer tienen 6 manzanas cada uno. Calcula: ¿Cuántas manzanas hay en total?",
        "opc1":"a. 20",
        "opc2":"b. 14",
        "opc3":"c. 6",
        "opc4":"d. 18",
        "respCorrecta":"opc4",
        "respEst":null, 
    }
];
visualizarPreguntas();

function visualizarPreguntas(){
    let resultado;
    for(i in myArrayPreg){
        resultado =JSON.parse(JSON.stringify( myArrayPreg[i]));
        myArrayPreg[i]=resultado;
    }
   
    var txt_respuestas="";
            for(i in myArrayPreg ){
                txt_respuestas +=myArrayPreg[i].preg +'<br>';
                for(j in myArrayPreg[i] ){
                    if(myArrayPreg[i][j]!=myArrayPreg[i].preg && myArrayPreg[i][j]!=myArrayPreg[i].respCorrecta &&  myArrayPreg[i][j]!=myArrayPreg[i].respEst){
                        txt_respuestas += '<input type="radio" name="p'+i+'"  value="'+j+'" onclick ="guardaResp(value,name)"><label>'+myArrayPreg[i][j]+'</label><br>';
                    }
                }
                txt_respuestas +='<br>'
            }
            document.getElementById("respuestas").innerHTML = txt_respuestas;
            console.log(myArrayPreg);
}

function guardaResp(resp,pos){
    pos = pos.slice(1); // se elimina el pprimer caracter del sting almacenado en pos osea la letra p    pos=parseInt(pos);
    if(myArrayPreg[pos].respEst !=null){
        if(myArrayPreg[pos].respEst== myArrayPreg[pos].respCorrecta){
            correctas--;
        }
        else{
            incorrectas--;
        }
    }
    myArrayPreg[pos].respEst=resp;
    let resultado =JSON.parse(JSON.stringify( myArrayPreg[pos]));
    myArrayPreg[pos]=resultado;

    if(myArrayPreg[pos].respCorrecta==resp){
        correctas++;
    }
    else{
        incorrectas++;
    }
   
}
function verRes(){
    if(respodioTodas()){ // se pregunta si respondioTodas() es verdadero
        document.getElementById('res').innerHTML='<h3></h3>'+'Correctas: '+correctas+'  '+'Incorrectas: '+incorrectas+'</h3>';
    }
    else{
        alert('Debe Dar Respueta a la Pregunta: '+sinResp);
        sinResp=[];
    }
   
}

function respodioTodas(){
    for(i in myArrayPreg){
        if(myArrayPreg[i].respEst==null){
            sinResp.push(i);
        }
    }
    if(sinResp.length==0){
        return true;
    }
    else{
        return false;
    }
       
}