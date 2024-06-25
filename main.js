function preload() {
    mustache = loadImage("mustache.png")
}
function setup() {
    canvas = createCanvas(400, 300)
    canvas.center()
    video = createCapture(VIDEO)
    video.hide()
    video.size(400, 300)
    posenet = ml5.poseNet(video, modelloaded)
    posenet.on("pose", gotposes)
}
function draw() {
    image(video, 0, 0, 400, 300)
    image(mustache, 200, 200, 75, 50)
}
function takeSnapshot() {

}
function modelloaded() {
    console.log("model is ready");
}
function gotposes(result) {
    if (condition) {
        console.log(result);
        nx = result[0].pose.nose.x
        ny = result[0].pose.nose.y
    }
}