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
  gas = parseFloat(gas).toFixed(2);
  $("#gas").html(gas);

}

function displaySpeed(){
  var speed = car.checkSpeed();
  $("#speed").html(speed);
}

function addSpeed(){
  var speed = prompt("How fast would you like to go?");
  car.speedUp(speed);
  updateView();
  this.currentSpeed = speed;
  return this.currentSpeed;
}

function decSpeed(){
  var speed = prompt("What would you like the speed adjusted to?");
  car.slowDown(speed);
  updateView();
  this.currentSpeed = speed;
  return this.currentSpeed;
}

function go(){
  var distance = prompt("What distance will we be traveling, at this speed?");
  car.move(distance);
  updateView();
}

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
