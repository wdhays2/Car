$( document ).ready(function() {
  updateView();
});


function updateView() {
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

function incPress(elemId) {
  car.wheels[elemId].adjustPressure(1);
  updateView();

}

function decPress(elemId) {
  car.wheels[elemId].adjustPressure(-1);
  updateView();

}