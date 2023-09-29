
function s(){
x=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/EDeroVar3/model.json',modelLoaded)
}
function modelLoaded(){
console.log("modelLoaded");
x.classify(GetResult);
}
function GetResult(error,result){
if (error) {
console.log(error);
}
else{
console.log(result);
r=Math.floor(Math.random()*255)+1;
g=Math.floor(Math.random()*255)+1;
b=Math.floor(Math.random()*255)+1;
document.getElementById("a").style.color="rgb("+r+","+g+","+b+")";
document.getElementById("h").style.color="rgb("+r+","+g+","+b+")";
document.getElementById("h").innerHTML="I Can Hear - "+result[0].label;
document.getElementById("a").innerHTML="Accuracy - "+(result[0].confidence*100).toFixed(2)+"%";

i=document.getElementById("a1");
q=document.getElementById("a2");
w=document.getElementById("a3");
z=document.getElementById("a4");

if (result[0].label=="clapping") {
i.src="aliens-01.gif";
q.src="aliens-02.png";
w.src="aliens-03.png";
z.src="aliens-04.png";
}
else if(result[0].label=="clicking"){
    i.src="aliens-01.png";
    q.src="aliens-02.gif";
    w.src="aliens-03.png";
    z.src="aliens-04.png";
}
else if(result[0].label=="banging"){
    i.src="aliens-01.png";
    q.src="aliens-02.png";
    w.src="aliens-03.gif";
    z.src="aliens-04.png";
}
else {


    i.src="aliens-01.png";
    q.src="aliens-02.png";
    w.src="aliens-03.png";
    z.src="aliens-04.gif";
}
}}