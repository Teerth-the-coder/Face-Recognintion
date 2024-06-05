Webcam.set({
    height: 250,
    width: 250,
    image_format: 'png',
    png_quality: 90
});

webcam = document.getElementById("webcam");

Webcam.attach('#webcam');

function capture() {
    Webcam.snap(
        function (imgUrl) {
            document.getElementById("image").innerHTML = "<img id=capturedImg src=" + imgUrl + ">";
        })
};

function gotResult(error, result) {
    if (error) {
        console.error(error);
    } else {
       console.log(result); 
    }
}

function check() {
    img = document.getElementById("capturedImg");
    classifier.classify(img, gotResult)
}

console.log(ml5.version);
classifier = ml5.imageClassifier('', modelLoaded)

function modelLoaded() {
    console.log('Model Loaded');
}