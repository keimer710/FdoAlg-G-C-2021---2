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
        "preg":"¿Qué es las Informática?",
        "opc1":"Es una Ciencia",
        "opc2":"Ciencia que estudia la Computación",
        "opc3":"Es el procesamiento electrónico de datos",
        "opc4":"Ciencia que estudia los Sistemas de información Inteligentes",
        "respCorrecta":"opc3",
        "respEst":null,
    },
    {
        "preg":"¿Ques es las Matemáticas?",
        "opc1":"Es una Ciencia",
        "opc2":"Ciencia que estudia la Números",
        "opc3":"Es la ciencia en la que baso todo lo que existe en el Universoo",
        "opc4":"Ciencia que estudia los fenomenos y le da interpretacion matemática ",
        "respCorrecta":"opc4",
        "respEst":null, 
    },
    {
        "preg":"¿La Raiz Cuadrada de 9 es?",
        "opc1":"3",
        "opc2":"2",
        "opc3":"4",
        "opc4":"9",
        "respCorrecta":"opc1",
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