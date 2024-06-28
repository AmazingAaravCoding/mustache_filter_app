function preload() {
    mustache = loadImage("mustache.png")
    nx = 0
    ny = 0
}
function setup() {
    canvas = createCanvas(750, 600)
    canvas.center()
    video = createCapture(VIDEO)
    video.hide()
    video.size(750, 600)
    posenet = ml5.poseNet(video, modelloaded)
    posenet.on("pose", gotposes)
}
function draw() {
    image(video, 0, 0, 750, 600)
    image(mustache, nx, ny, 75, 50)
}
function takeSnapshot() {
    save("mustache-selfie.png")
}
function modelloaded() {
    console.log("model is ready");
}
function gotposes(result) {
    if (result.length > 0) {
        console.log(result);
        nx = result[0].pose.nose.x - 37
        ny = result[0].pose.nose.y
    }
}