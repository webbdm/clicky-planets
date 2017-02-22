var getPlanets = document.getElementById('showPlanets');
var planetHolder = document.getElementById("planet-holder");


var planets = [
    {
        name:"Mercury",
        url: ""
    },
    {
        name:"Venus",
        url: ""
    },
    {
        name:"Earth",
        url: ""
    },
    {
        name:"Mars",
        url: ""
    },
    {
        name:"Jupiter",
        url: ""
    },
    {
        name:"Saturn",
        url: ""
    },
    {
        name:"Uranus",
        url: ""
    },
    {
        name:"Neptune",
        url: ""
    }
];



var array = [];


function writeToDom(){

	for (var i = 0; i < planets.length; i++) {
		
		var newPlanet="";
		newPlanet += `<div class="planetBox" id="planetBox-${i}">`
		newPlanet += `<div class="planetName"> ${planets[i].name} </div>`;
		newPlanet += `</div>`
		planetHolder.innerHTML += newPlanet;
	}

}

getPlanets.addEventListener('click', writeToDom)



