Prediction1="";

Webcam.set({
   width:300,
   height:300,
   image_format:'png', 
   png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach('#camera');
function take_snapshot()
{
 Webcam.snap(function(data_uri){
     document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';
 });
}
console.log('ml5 version:',ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/aWj3asszg/model.json',modelLoaded);
function modelLoaded(){
    console.log('model loaded');
}
function speak(){
    var synth=window.speechSynthesis;
    speak1="The Prediction Is "+Prediction1;
    var utterthis=new SpeechSynthesisUtterance(speak1);
    synth.speak(utterthis);
}