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