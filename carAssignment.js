var tire = {
	diameter: 26, width: 9, minPressure: 30, maxPressure: 35,

	brand: "B.F. Goodrich", model: "Comp T/A", currentPressure: 22,

	checkPressure: function(){
		return this.currentPressure;
	},

	adjustPressure: function(addOrRemoveAir){
		console.log(addOrRemoveAir);
		if ((this.currentPressure + addOrRemoveAir) < 0) {
			console.log("The tire is already at 0");
		} 
		else if ((this.currentPressure + addOrRemoveAir) > this.maxPressure) {
			console.log("The tire is already at max pressure");
		} 
		else {
			this.currentPressure += addOrRemoveAir;
			if (this.currentPressure < this.minPressure) {
			  console.log("That gives you " + this.currentPressure + "PSI.");
			}
			else {
				console.log("The tire is properly inflated to " + this.currentPressure + "PSI.");
			}
		}
	}
};

var car = { 
	make: "Pontiac", model: "Trans Am", year: 1978, 
	sizeGasTank: 20, maxSpeed: 135, minSpeed: 0, cityMPG: 15,
	hwyMPG: 20, speedingMPG: 17, racingMPG: 13, gasInTank: 7,
	currentSpeed: 0,
	wheels: {leftFront: Object.create(tire), rightFront: Object.create(tire), leftRear: Object.create(tire), rightRear: Object.create(tire)},

	maxAirInTires: function(){
		// this.wheels.leftFront.adjustPressure(this.wheels.leftFront.maxPressure - this.wheels.leftFront.checkPressure());
		// this.wheels.rightFront.adjustPressure(this.wheels.rightFront.maxPressure - this.wheels.rightFront.checkPressure());
		// this.wheels.leftRear.adjustPressure(this.wheels.leftRear.maxPressure - this.wheels.leftRear.checkPressure());
		// this.wheels.rightRear.adjustPressure(this.wheels.rightRear.maxPressure - this.wheels.rightRear.checkPressure());


		$.each( this.wheels, function( tirePosition, carTire ) {
			console.log(tirePosition);
			carTire.adjustPressure(carTire.maxPressure - carTire.checkPressure());
		});


	},

	checkGas: function(){
		return this.gasInTank;
	},

	addGas: function(gallons){
		if ((this.gasInTank + gallons) > this.sizeGasTank) {
			console.log("The tank only holds " + this.sizeGasTank + " gallons.");
		} 
		else if ((this.gasInTank + gallons) <= 0.25*this.sizeGasTank){ 
			this.gasInTank += gallons;
			console.log("The tank is almost empty.");
		}
		else if ((this.gasInTank + gallons) >= 0.975*this.sizeGasTank){
			this.gasInTank += gallons;
			console.log("The tank is full.");
		}
		else {	
			this.gasInTank += gallons;		
			console.log("Did you want to fill it up? There are " + this.gasInTank + " gallons in the tank.");
		}
	},

	speedUp: function(speed){
		if (isNaN(speed)){
			console.log("I'm looking for a number here.");
		}
		else if (speed > this.maxSpeed){
			console.log("Damnit Jim, I'm giving it all I've got.\nMy top speed is " + (this.maxSpeed) + " MPH.");
		} 
		else if (speed <= this.currentSpeed){
			console.log("I thought you wanted to speed up.");
		}
		else {
			this.currentSpeed = speed;
		}
	},

	slowDown: function(speed){
		if (isNaN(speed)){
			console.log("I'm looking for a number here.");
		}
		else if (speed < this.minSpeed){
			console.log("I can't go " + (speed) + "mph.");
		}
		else if	(speed == 0){
			console.log("Stopped.");
			this.currentSpeed = speed;
		}
		else if (speed >= this.currentSpeed){
				console.log("I thought you wanted to slow down.");
		}
		else{
			this.currentSpeed = speed;
		}
	},

	checkSpeed: function(){
		return this.currentSpeed;
	},

	move: function(distance){
		if (isNaN(distance)){
			console.log("I'm looking for a number here.");
		}
		else {
		var efficiency = 0;
		if (this.currentSpeed < 45){efficiency = this.cityMPG}
		else if (this.currentSpeed < 66){efficiency = this.hwyMPG}
		else if (this.currentSpeed < 81){efficiency = this.speedingMPG}
		else {efficiency = this.racingMPG};
    	var gasBurned = (distance/efficiency);    
    	if (gasBurned > this.gasInTank){
      	alert("We dont have enough gas for that.")}
    	else {
     	this.gasInTank -= gasBurned;
    	
		}
	}
}
}