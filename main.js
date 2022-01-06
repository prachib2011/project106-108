function startClassification(){

    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/lgJP-6i69/model.json', modelReady);
    
    }
    
    function modelReady(){
    
    classifier.classify(gotResults);
    
    }
    
    function gotResults(error, results){
    
    console.log('Got Result');
    
    }