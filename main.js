function setup() {
  canvas = createCanvas(370, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();

  classifier = ml5.imageClassifier("MobileNet",function(){
    console.log("Model Has LOADED")
  });
}

function draw(){
  image(video, 0, 0, 370, 300);
  classifier.classify(video, gotResult);
}

function gotResult(error, result){
  if(error){
    console.log("error has occured", error)
  }
  else{
    document.getElementById("objectSpan").innerHTML = result[0].label;
    a = result[0].confidence.toFixed(1)*100 + "%"
    document.getElementById("accuracySpan").innerHTML = a
  } 
}