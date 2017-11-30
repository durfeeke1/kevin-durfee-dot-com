  const STATUS_OK = 200
  POSTS_URL = 'pictures'

const tags = ["smartTvDesc","ggDesc","bloctopusDesc","lumaDesc","halDesc","hereOneDesc", "frameDesc"];
numSquares = tags.length;
squaresState = {};

const smartTvDesc = 
  "At Intel I wrote firmware and performed board bring-up for a \
  variety of SOC's intended for smart TV's and set-top boxes.  I wrote specialized \
   firmware to test multiple components, including a VSPARC processor responsible for \
   security, the ISP (image signal processor), and DPE (display processing engine) \
  ";
 
const ggDesc = 
  "While at Intel I wrote a driver code for a wearable device \
  that displayed information in a smartphone-like hands-free format. \
  I was specifically responsible for a module that took exposure time and \
  other meta-data readings from the camera sensor and made them available to \
  camera applications on a per-frame basis via the Android Camera API \
  ";

const bloctopusDesc = 
  "At Stanford I worked with Joel Saddler to create a system \
  that made prototyping internet connected embedded devices easy for \
  anyone.  I wrote firmware for an atmega micro that supported USB \
  communication with an Intel Edison running a node.js server.  The client side \
  code had a simple drag and drop GUI for users to easily connect sensors and write \
  arbitrary code that could use the sensor data as arguments and be run periodically \
  or every time a sensor value changed. \
  ";

const lumaDesc = 
  "As an engineer at Radicand I wrote firmware and a corresponding android app \
   for an Arduino that controlled an ultraviolet LED array.  The app walked users \
   through a flow to administer time-controlled therapy to treat eczema.";


const halDesc = 
  "The \"concept car\" for Doppler Labs was a set of wireless ear buds \
   that enabled people to use a smartphone app to control how they heard the \
   world around them.  I primarily wrote firmware for BLE, audio DSP, and power \
   management. \
  ";

const hereOneDesc = 
  "As an engineering lead at Doppler Labs I worked with a small team of engineers \
  to build wireless earbuds (Here One) that give users control over what they hear. \
  I was directly involved in the planning and execution of each phase of the \
  product development cycle, including designing the hardware architecture, \
  prototyping and breadboarding, board bringup, firmware design and \
  implementation, and working with a manufacturer in China for mass production. \
  ";

const frameDesc = 
  "Wrote a node server running on a Beaglebone Black to allow users to update a \
  digital canvas with pictures from a smartphone app app  \
  ";

function initializePage () {  
  for(var i = 0 ; i < numSquares ; i++){
    squaresState[tags[i]] = 0;
  }
}

function updateText (elementId, description) {
  document.getElementById(elementId).innerHTML = description;
}

function hideAll () {
  for (var i = 0 ; i < numSquares; i++){
    updateText(tags[i],"");
  }
}

function clickResponse(elementId, description){
  hideAll();
  if(squaresState[elementId]==0){
    squaresState[elementId] = 1;
    updateText(elementId, description);
  }else{
    squaresState[elementId] = 0;
  }
}

function showSmartTvDesc () {
   clickResponse("smartTvDesc", smartTvDesc);
}

function showggDesc () {
   clickResponse("ggDesc", ggDesc);
}

function showBloctopusDesc () {
   clickResponse("bloctopusDesc", bloctopusDesc);
}

function showLumaDesc () {
   clickResponse("lumaDesc", lumaDesc);
}

function showHalDesc () {
   clickResponse("halDesc", halDesc);
}

function showHereOneDesc () {
   clickResponse("hereOneDesc", hereOneDesc);
}

function showFrameDesc () {
   clickResponse("frameDesc", frameDesc);
}

document.getElementById("smartTvPic").onclick = showSmartTvDesc;
document.getElementById("ggPic").onclick = showggDesc;
document.getElementById("bloctopusPic").onclick = showBloctopusDesc;
document.getElementById("lumaPic").onclick = showLumaDesc;
document.getElementById("halPic").onclick = showHalDesc;
document.getElementById("hereOnePic").onclick = showHereOneDesc;
document.getElementById("framePic").onclick = showFrameDesc;

initializePage();
