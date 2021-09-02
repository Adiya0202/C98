var speech_recognition= window.webkitSpeechRecognition;

var recognition= new speech_recognition();
 function pic_take(){
     document.getElementById("text_box").innerHTML="";
     recognition.start();
 }
 recognition.onresult= function(event){
     console.log(event);
     var content=event.results[0][0].transcript;
     document.getElementById("text_box").innerHTML=content;
 }