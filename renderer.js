audioBV = 0

num = Math.floor(Math.random() * 5 + 1)
console.log(num)
if(num == 1){
    document.getElementById('msg').innerHTML = "Bem-vindo, senhor."
}
else if(num == 2){
    document.getElementById('msg').innerHTML = "Olá, senhor."
}
else if(num == 3){
    document.getElementById('msg').innerHTML = "Welcome, sr."
}
else if(num == 4){
    document.getElementById('msg').innerHTML = "Muito bom te ver novamente, senhor."
}
else if(num == 5){
    document.getElementById('msg').innerHTML = "Fico feliz em te ver, senhor."
}

let caixa = document.getElementById('caixa');
caixa.classList.add('hide')

function mostra(){
    let caixa = document.getElementById("caixa");
    caixa.classList.remove("hide");
}

function apaga(){
    let caixa = document.getElementById("caixa")
    caixa.classList.add("hide")
}

let nume = Math.floor(Math.random() * 5 + 1)
if (nume == 1){
    document.getElementById('versiculo').innerHTML = "Porque vivemos por fé, e não pelo que vemos - 2Cor 5:7"
}
else if (nume == 2){
    document.getElementById('versiculo').innerHTML = 'Conta o número das estrelas, chamando-as todas pelos seus nomes - Sl 147:4'
}
else if (nume == 3){
    document.getElementById('versiculo').innerHTML = '"E conhecereis a verdade, e a verdade vos libertará" - Jo 8:32'
}
else if (nume == 4){
    document.getElementById('versiculo').innerHTML = "Deus é maior que o dinheiro."
}
else if (nume == 5){
    document.getElementById('versiculo').innerHTML = "E vós, irmãos, não vos canseis de fazer o bem - 2Tss 3:13"
}

function fadeSound(){
    document.getElementById('fadeSound').play();
}

function abre(){
    let barraCima = document.getElementById('sinalizador');
    barraCima.classList.add('abrir')
}

function fecha(){
    let barraCima = document.getElementById('sinalizador');
    barraCima.classList.remove('abrir')
}

//--------------------------------------------

function reconhecer(){

    // This runs when the speech recognition service starts
    recognition.onstart = function() {
        console.log("We are listening. Try speaking into the microphone.");
    };
    
    recognition.onspeechend = function() {
        // when user is done speaking
        recognition.stop();
        console.log('parou')
    }
                  
    // start recognition
    recognition.start();

    // This runs when the speech recognition service returns result
    recognition.onresult = function(event) {
        var transcript = event.results[0][0].transcript;
        var confidence = event.results[0][0].confidence;
        palavra = transcript;
        console.log(transcript)
    }
}

function comandos(){
    console.log("deu tudo certo.");
    
}