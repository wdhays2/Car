$( document ).ready(function() {
  updateView();
});


function updateView() {
  displayAirPress();
  displayGas();
  displaySpeed();  
}

function incPress(elemId) {
  car.wheels[elemId].adjustPressure(1);
  updateView();

}

function decPress(elemId) {
  car.wheels[elemId].adjustPressure(-1);
  updateView();

}

function gasUpCar(){
  car.addGas(1);
  updateView();
}

function fillUpTank(){
  var gasLevel = car.checkGas();
  car.addGas(car.sizeGasTank - gasLevel);
  updateView();
}

function displayGas(){
   var gas = car.checkGas();
  $("#gas").html(gas);

}

function displaySpeed(){
  var speed = car.checkSpeed();
  $("#speed").html(speed);
}

function addSpeed(){
  car.speedUp();
  updateView();
  var speed = prompt(
        "How fast would you like to go?");

var distance = prompt(
        "What distance will we be traveling, at this speed?");
      var gasBurned = (distance/this.cityMPG);
  if (speed > this.maxSpeed){
      console.log("Damnit Jim, I'm giving it all I've got.\nMy top speed is " + (this.maxSpeed) + " MPH.\n");
    } 
    else {
      
      
      if (gasBurned>this.gasInTank){
        alert("We dont have enough gas for that.")}
        else {
      this.currentSpeed = speed;
      this.gasInTank -= gasBurned;
      return this.currentSpeed;
    };
  };
}

function decSpeed(){
  car.slowDown();
  updateView();
}
var speed = prompt(
        "What would you like the speed adjusted to?");

var distance = prompt(
        "What distance will we be traveling, at this speed?");
if (speed < this.minSpeed){
      console.log("I can't go " + (speed) + "mph.");
    }

    else if 
      (speed == 0){console.log("Stopped.");
      this.currentSpeed = speed;
      return this.currentSpeed;
    }
    else{
      
      var gasBurned = (distance/this.cityMPG);
      if (gasBurned > this.gasInTank){
        alert("We dont have enough gas for that.")}
        else {
      this.currentSpeed = speed;
      this.gasInTank -= gasBurned;


function displayAirPress(){
  var wheelLocations = ["leftFront", "rightFront", "leftRear", "rightRear"];
  $.each(wheelLocations, function( index, wheelLoc ) {
    var wheelLocId = "#"+wheelLoc;
    var press = car.wheels[wheelLoc].checkPressure();
    $(wheelLocId).html(press);

    if (press < car.wheels[wheelLoc].minPressure){
      $(wheelLocId).addClass("warning");
    }
    else{
      $(wheelLocId).removeClass("warning");
    }    
  });
}
