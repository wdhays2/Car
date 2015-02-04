var tire {
	diameter: 26, width: 9, minPressure: 30, maxPressure: 35,

	brand: "B.F. Goodrich", model: "Comp T/A", currentPressure: 22,

		checkPressure: function (){
		return currentPressure
		}

		adjustPressure: function (addOrRemoveAir){
		currentPressure += addOrRemoveAir;
		return currentPressure;

		if (currentPressure < minPressure) {alert("Tire pressure is low. 
		It currently has " + currentPressure + " psi.")
		} 
		else if (currentPressure > maxPressure) {alert("Tire pressure is 
		too high. It currently has " + currentPressure + " psi.")
		} 
		else {alert("The tire is properly inflated to " + 
		currentPressure + " psi.")
		}
		}
};
var leftFront = Object.create(tire);

var rightFront = Object.create(tire);

var leftRear = Object.create(tire);

var rightRear = Object.create(tire);

var car { 
	make: "Pontiac", model: "Trans Am", year: 1978, 
	sizeGasTank: 20, maxSpeed: 135, minSpeed: 0, cityMPG: 15,
	hwyMPG: 20, speedingMPG: 17, racingMPG: 13, gasInTank: 7,
	currentSpeed: 0,
	wheels: {leftFront, rightFront, leftRear, rightRear},

		checkGas: function (){
		return gasInTank
		}

		addGas: function (gallons){
		gasInTank += gallons
		return gasInTank;

		if (gasInTank > sizeGasTank) {alert("The tank only holds " + 
		sizeGasTank + " gallons.\n" 
		"Use a negative number to remove some gas.")
		} 
		else if (gasInTank <= .25*sizeGasTank){ alert("The tank is 
		almost empty.")
		}
		else if (gasInTank >= .95*sizeGasTank){alert("The tank is full.")
		}
		else {alert("Did you want to fill it up?")
		}
		},

		speedUp: function (speed){
		currentSpeed += speed; 
		return currentSpeed;

		if (currentSpeed > maxSpeed){alert("Damnit Jim, I'm giving it
			all I've got.\n" 
			"I can't seem to break " + maxSpeed + "mph.\n"
			"You're trying to push it to " + currentSpeed + "mph."
			"You're going to have to use the slowDown function.")
		} else {alert("Current speed is " + currentSpeed + ".")
		}
		}

		slowDown: function (speed){
		currentSpeed -= speed; 
		return currentSpeed;
		if (currentSpeed < minSpeed){alert("We cant go back in time.\n"
		"Use the speedUp function to get a ")}

		}


}