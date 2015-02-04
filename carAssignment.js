var tire {
	diameter: 26, width: 9, minPressure: 30, maxPressure: 35,

	brand: "B.F. Goodrich", model: "Comp T/A", currentPressure: 22,

	checkPressure: function (){
		return currentPressure
	}

	adjustPressure: function (addOrRemoveAir){
		if ((currentPressure + addOrRemoveAir) < minPressure) {
			alert("That would give you " + (currentPressure + addOrRemoveAir) + "psi.");
		} 
		else if ((currentPressure + addOrRemoveAir) > maxPressure) {
			alert("That would give you " + (currentPressure + addOrRemoveAir) + "psi.");
		} 
		else {
			currentPressure += addOrRemoveAir;
			alert("The tire is properly inflated to " + currentPressure + "psi.");
		}
	}
};

var car { 
	make: "Pontiac", model: "Trans Am", year: 1978, 
	sizeGasTank: 20, maxSpeed: 135, minSpeed: 0, cityMPG: 15,
	hwyMPG: 20, speedingMPG: 17, racingMPG: 13, gasInTank: 7,
	currentSpeed: 0,
	wheels: [leftFront: Object.create(tire), rightFront: Object.create(tire), 
	leftRear: Object.create(tire), rightRear: Object.create(tire)],

	checkGas: function (){
		return gasInTank
	}

	addGas: function (gallons){
		

		if ((gasInTank + gallons) > sizeGasTank) {
			alert("The tank only holds " + sizeGasTank + " gallons.");
		} 
		else if ((gasInTank + gallons) <= .25*sizeGasTank){ 
			alert("The tank is almost empty.");
		}
		else if {
		gasInTank += gallons;
		(gasInTank >= .95*sizeGasTank){
			alert("The tank is full.");
		}
		else {
			alert("Did you want to fill it up? There are " + gasInTank + " gallons in the tank.");
		}
	},

	speedUp: function (speed){
		if ((currentSpeed + speed) > maxSpeed){
			alert("Damnit Jim, I'm giving it all I've got.\n" 
			"That would be " + (currentSpeed + speed) + "mph.\n");
		} 
		else {
			currentSpeed += speed;
			return currentSpeed;
		}
	},
	slowDown: function (speed){
		if ((currentSpeed - speed) < minSpeed){
			alert("I can't go " + (currentSpeed - speed) + "mph.");
		}
		else{
			currentSpeed -= speed; 
			return currentSpeed;
		}
	},


}