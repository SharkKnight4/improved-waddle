function setup() {
    canvas.center();
    background("grey");
}
var drawings_list=["boat","airplane","clock","ambulance","angel","bird","tomato","dragon", "baseball", "hotdog"];
var random_drawing=Math.floor(Math.random()*10)+1;
document.getElementById("lol").innerHTML=" "+drawings_list[random_drawing];

var timer = 0;
function start() {
    timer=0;
    while(timer<400){
        
        document.getElementById("timer").innerHTML=timer;
        timer++
        document.getElementById("timer").innerHTML=timer;
    }
    }
  
if (timer == 400) {
timer=0;
document.getElementById("lol").innerHTML=" "+random_drawing;
}
function draw(){
    //set stroke weight to 13
    strokeWeight(13);
    stroke("#39ff14");
    //if mouse is pressed, draw line between pprevious and current mouse positions
    if (mouseIsPressed){
        line(pmouseX,pmouseY,mouseX,mouseY);
    }
}
function classifyCanvas(){
    classifier.classify(canvas,gotResult);
}
function gotResult(error,results){
    if(error){
        console.error(error);
    }
    console.log(results);
    document.getElementById('label').innerHTML='Label:'+results[0].label;
    document.getElementById('confidence').innerHTML="Confidence"+Math.round(results[0].confidence*100)+"%";
    utterThis=new SpeechSynthesisUtterance(results[0].label);
    synth.speak(utterThis);
}