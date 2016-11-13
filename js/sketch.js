/*||*************************
*||Samuel Antonio Farach
*||01.11.2016
*||
*||************************/

//generl:
var canvas;
var x;
var y;
var mX;
var mY;
var posY = 0;

//estrellas:
var estrellasRadio;
var estrellas = [];

//death star:
var deathstarCheip;
var deathstarRadi;
var deathstarVect;
var deathstarColor = '#FF00FF';//borrar

//death star:
var xfighterCheip;
var xfighterRadiX;
var xfighterRadiY;
var xfighterVect1;
var xfighterVect2;
var xfighterVect3;
var xfighterColor = '#0000FF';//borrar;

/****************************************************************************************************/
function preload()
{
  deathstarCheip = createImage('img/SW_elemento_01.svg');
  //xfighterCheip = loadImage('SW_elemento_xWingFIghter.svg');
}
/****************************************************************************************************/
function windowResized()
{
  resizeCanvas(windowWidth, windowHeight);
}
/****************************************************************************************************/
function setup()
{
  //general:
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  //canvas.style('z-index','-1');
  rectMode(CENTER,2);
  x = width;
  y = height;
  mX = x / 2;
  mY = y / 2;

  //estrellas:
  estrellasRadio = width / 300;
  for(var i = 0; i < 2000; i++)
  {
    estrellas.push(new p5.Vector(random(-width, width*2), random(-height, height*2)));
    //estrellas.push(new p5.Vector(100, 100));
  }

  //death star:
  deathstarRadi = x / 3;
  deathstarVect = new p5.Vector(mX, mY);

  //xfighter:
  xfighterRadiX = x / 4;
  //xfighterRadiY = IGUAL A Y DE SVG; ARREGLAR MEJOR;
  xfighterVect1 = new p5.Vector(mX / 2, y + xfighterRadiY);
  xfighterVect2 = new p5.Vector(mX, y + xfighterRadiY);
  xfighterVect3 = new p5.Vector(mX + mX / 2, y + xfighterRadiY);

}
/****************************************************************************************************/
function draw()
{
  fondoMostrar();
  datosMostrar();
  elementosMostrar();
  image(deathstarCheip, 200, 200);//dsfdsfdsfsdfsdfdsfsdfsdfsdfsdfsdfsdfdsfsdfsdfdsfsdf
}
/****************************************************************************************************/
function mouseWheel(event) {
  //print(event.delta);
  //move the square according to the vertical scroll amount
  posY += event.delta / 10;
  //uncomment to block page scrolling
  //return false;
}
/****************************************************************************************************/
function fondoMostrar()
{
  background(0);
  noStroke();
  for(var i = 0; i < estrellas.length; i++)
  {
    fill(255, random(0, 255));
    rect(estrellas[i].x, estrellas[i].y, estrellasRadio*1.5, estrellasRadio*1.5)
    fill(255);
    rect(estrellas[i].x, estrellas[i].y, estrellasRadio, estrellasRadio)
  }
}
/****************************************************************************************************/
function datosMostrar()
{
  fill(255, 200, 0);
  text(posY + "", 10, 10);
}
/****************************************************************************************************/
function elementosMostrar()
{
  //death star:
  fill(deathstarColor);
  //ellipse(deathstarVect.x, deathstarVect.y, deathstarRadi, deathstarRadi);

  //death star:
  fill(xfighterColor);
  //ellipse(xfighterVect1.x, xfighterVect1.y, xfighterRadi, xfighterRadi);
  //ellipse(xfighterVect2.x, xfighterVect2.y, xfighterRadi, xfighterRadi);
  //ellipse(xfighterVect3.x, xfighterVect3.y, xfighterRadi, xfighterRadi);

}
/****************************************************************************************************/

/****************************************************************************************************/
