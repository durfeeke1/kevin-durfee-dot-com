  const STATUS_OK = 200
  POSTS_URL = 'pictures'


function updateText (elementId, description) {
  document.getElementById(elementId).innerHTML = description;
}

function hideAll () {
  const tags = ["smartTvDesc","ggDesc","bloctopusDesc","lumaDesc","halDesc","hereOneDesc", "frameDesc"];
  for (var i = 0 ; i < tags.length; i++){
    updateText(tags[i],"");
  }
}

function showSmartTvDesc () {
  hideAll();
  const smartTvDesc = 
  "At Intel I wrote firmware and performed board bring-up for a \
   variety of SOC's intended for smart TV's and set-top boxes.  I wrote specialized \
   firmware to test multiple components, including a VSPARC processor responsible for \
   security, the ISP (image signal processor), and DPE (display processing engine) \
  "; 
  updateText("smartTvDesc", smartTvDesc);
}

function showggDesc () {
  hideAll();
  const ggDesc = 
  "While at Intel I wrote a driver code for a wearable device \
  that displayed information in a smartphone-like hands-free format. \
  I was specifically responsible for a module that took exposure time and \
  other meta-data readings from the camera sensor and made them available to \
  camera applications on a per-frame basis via the Android Camera API \
  ";
  updateText("ggDesc", ggDesc);
}

function showBloctopusDesc () {
  hideAll();
  const bloctopusDesc = 
  "At Stanford I worked with Joel Saddler to create a system \
  that made prototyping internet connected embedded devices easy for \
  anyone.  I wrote firmware for an atmega micro that supported USB \
  communication with an Intel Edison running a node.js server.  The client side \
  code had a simple drag and drop GUI for users to easily connect sensors and write \
  arbitrary code that could use the sensor data as arguments and be run periodically \
  or every time a sensor value changed. \
  ";
  updateText("bloctopusDesc", bloctopusDesc);
}

function showLumaDesc () {
  hideAll();
  const lumaDesc = 
  "As an engineer at Radicand I wrote firmware and a corresponding android app \
   for an Arduino that controlled an ultraviolet LED array.  The app walked users \
   through a flow to administer time-controlled therapy to treat eczema.";
  updateText("lumaDesc", lumaDesc);
}


function showHalDesc () {
  hideAll();
  const halDesc = 
  "The \"concept car\" for Doppler Labs was a set of wireless ear buds \
   that enabled people to use a smartphone app to control how they heard the \
   world around them.  I primarily wrote firmware for BLE, audio DSP, and power \
   management. \
  ";
  updateText("halDesc", halDesc);
}

function showHereOneDesc () {
  hideAll();
  const hereOneDesc = 
  "As an engineering lead at Doppler Labs I worked with a small team of engineers \
  to build wireless earbuds (Here One) that give users control over what they hear. \
  I was directly involved in the planning and execution of each phase of the \
  product development cycle, including designing the hardware architecture, \
  prototyping and breadboarding, board bringup, firmware design and \
  implementation, and working with a manufacturer in China for mass production. \
  ";
  updateText("hereOneDesc", hereOneDesc);
}

function showFrameDesc () {
  hideAll();
  const frameDesc = 
  "Wrote a node server running on a Beaglebone Black to allow users to update a \
  digital canvas with pictures from a smartphone app app  \
  ";
  updateText("frameDesc", frameDesc);
}


document.getElementById("smartTvPic").onclick = showSmartTvDesc;
document.getElementById("ggPic").onclick = showggDesc;
document.getElementById("bloctopusPic").onclick = showBloctopusDesc;
document.getElementById("lumaPic").onclick = showLumaDesc;
document.getElementById("halPic").onclick = showHalDesc;
document.getElementById("hereOnePic").onclick = showHereOneDesc;
document.getElementById("framePic").onclick = showFrameDesc;

