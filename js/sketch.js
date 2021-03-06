var svg, path;
function preload() {
    svg = loadSVG('img/test.svg');
    frameRate(20);
}

function setup() {
    createCanvas(600, 200, SVG);
    
    path = querySVG('path')[1];
}

function draw() {
    // update line width of 2nd line
    background(0);
    image(svg, 0, 0, 200, 200);
    path.attribute('stroke-width', frameCount % 20);
    if (frameCount === 18) {
        noLoop();
        save(); // save current SVG graphics
    }
}
