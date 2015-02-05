var tire = {
	diameter: 26, width: 9, minPressure: 30, maxPressure: 35,

	brand: "B.F. Goodrich", model: "Comp T/A", currentPressure: 22,

	checkPressure: function(){
		return this.currentPressure;
	},

	adjustPressure: function(addOrRemoveAir){
		if ((this.currentPressure + addOrRemoveAir) < this.minPressure) {
			alert("That would give you " + (this.currentPressure + addOrRemoveAir) + "psi.");
		} 
		else if ((this.currentPressure + addOrRemoveAir) > this.maxPressure) {
			alert("That would give you " + (this.currentPressure + addOrRemoveAir) + "psi.");
		} 
		else {
			this.currentPressure += addOrRemoveAir;
			alert("The tire is properly inflated to " + this.currentPressure + "psi.");
		}
	}
};

var car = { 
	make: "Pontiac", model: "Trans Am", year: 1978, 
	sizeGasTank: 20, maxSpeed: 135, minSpeed: 0, cityMPG: 15,
	hwyMPG: 20, speedingMPG: 17, racingMPG: 13, gasInTank: 7,
	currentSpeed: 0,
	wheels: {leftFront: Object.create(tire), rightFront: Object.create(tire), leftRear: Object.create(tire), rightRear: Object.create(tire)},

	checkGas: function(){
		return gasInTank;
	},

	addGas: function(gallons){
		if ((gasInTank + gallons) > sizeGasTank) {
			alert("The tank only holds " + sizeGasTank + " gallons.");
		} 
		else if ((gasInTank + gallons) <= 0.25*sizeGasTank){ 
			gasInTank += gallons;
			alert("The tank is almost empty.");
		}
		else if ((gasInTank + gallons) >= 0.95*sizeGasTank){
			gasInTank += gallons;
			alert("The tank is full.");
		}
		else {	
			gasInTank += gallons;		
			alert("Did you want to fill it up? There are " + gasInTank + " gallons in the tank.");
		}
	},

	speedUp: function(speed){
		if ((currentSpeed + speed) > maxSpeed){
			alert("Damnit Jim, I'm giving it all I've got.\nThat would be " + (currentSpeed + speed) + "mph.\n");
		} 
		else {
			currentSpeed += speed;
			return currentSpeed;
			// prompt(distance){
			// 	"What distance will we be traveling, at this speed?"
			// }
		}
	},
	slowDown: function(speed){
		if ((currentSpeed - speed) < minSpeed){
			alert("I can't go " + (currentSpeed - speed) + "mph.");
		}
		else{
			currentSpeed -= speed; 
			return currentSpeed;
			if (currentSpeed > 0){
				// prompt(distance){
				// 	"What distance will we be traveling, at this speed?"
				// }
			}
		}
	},
	checkSpeed: function(){
		return currentSpeed;
	},
	gasUsed: 0
}