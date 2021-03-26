var SpeechRecognition = window.webkitSpeechRecognition;
var rec = new SpeechRecognition();
function start(){
    document.getElementById("textbox").innerHTML="";
    rec.start();
}