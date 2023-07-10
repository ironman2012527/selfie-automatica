var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

var Textbox = document.getElementById("textbox");

function start()
{
    Textbox.innerHTML = "";
    recognition.start();
}

recognition.onresult = function (event)
{
    console.log(event);

    var Content = event.results[0][0].transcript;

    console.log(Content);
    Textbox.innerHTML = Content;
    if (Content=="Toma mi selfie")
    {
        console.log("toma mi selfie ---");
        speak();
    }
}

function speak (){

    var synth = window.speechSynthesis;
    speak_data="Tomando tu Selfie en 5 segundos"
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);
    setTimeout(function()  {
take_selfie()  ;      
    }, 5000);
}
camera=document.getElementById("camera");
Webcam.set({
    width:360,
    height:250,
    image_format:"png",
    png_quality:90
});
function take_selfie()
{
    Webcam.snap(function(data_uri){
    document.getElementById("resultado").innerHTML='<img id="selfie_img" src="'+data_uri+'"/>';
    
    });
} 
function save()
{
link = document.getElementById("link");
image = document.getElementById("selfie_img").src;
link.href=image;
link.click();
}    
function borrow()
{
    document.getElementById("resultado").innerHTML="";
    document.getElementById("textbox").innerHTML="";
}