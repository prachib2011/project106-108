function startClassification(){

navigator.mediaDevices.getUserMedia({audio: true});
classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/9JYJLoNsG/model.json', modelReady);

}

function modelReady(){

classifier.classify(gotResults);

}

function gotResults(error, results){

if (error){
console.error(error);
}
else {
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) +1;
    random_numbar_g = Math.floor(Math.random() * 255) +1;
    random_numbar_b = Math.floor(Math.random() * 255) +1;

    document.getElementById("result_lable").innerHTML = 'I can hear : ' + results[0].label;
    document.getElementById("result_confidence").innerHTML = 'Accuracy : ' +(results[0].confidence *100).toFixed(2) + '%';
    document.getElementById("result_lable").style.colour = "rgb("+random_number_r+","+random_numbar_g+", "+random_numbar_b+")";
    document.getElementById("result_confidence").style.colour = "rgb("+random_number_r+","+random_numbar_g+", "+random_numbar_b+")";

    img = document.getElementById("alien01");
    img1 = document.getElementById("alien02");
    img2 = document.getElementById("alien03");
    img3 = document.getElementById("alien04");

    if (results[0].label == "clap"){
    img.src ='aliens-01.gif';
    img1.src ='aliens-02.png';
    img2.src ='aliens-03.png';
    img3.src ='aliens-04.png';
    }
    else if(results[0].label == "ringtone"){
        img.src ='aliens-01.png';
        img1.src ='aliens-02.gif';
        img2.src ='aliens-03.png';
        img3.src ='aliens-04.png';
        }
    else if(results[0].label == "bell"){
        img.src ='aliens-01.png';
        img1.src ='aliens-02.png';
        img2.src ='aliens-03.gif';
        img3.src ='aliens-04.png';
    }
    else{
        img.src ='aliens-01.png';
        img1.src ='aliens-02.png';
        img2.src ='aliens-03.png';
        img3.src ='aliens-04.gif';
        }
}

}