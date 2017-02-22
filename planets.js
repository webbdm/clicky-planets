var getPlanets = document.getElementById('showPlanets');
var planetHolder = document.getElementById("planet-holder");

var planets = [
    {
        name:"Mercury",
        url: "https://www.nasa.gov/sites/default/files/mercury_1.jpg"
    },
    {
        name:"Venus",
        url: "https://upload.wikimedia.org/wikipedia/commons/8/85/Venus_globe.jpg"
    },
    {
        name:"Earth",
        url: "https://www.nasa.gov/centers/goddard/images/content/638831main_globe_east_2048.jpg"
    },
    {
        name:"Mars",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Mars_23_aug_2003_hubble.jpg/275px-Mars_23_aug_2003_hubble.jpg"
    },
    {
        name:"Jupiter",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Hubble_Captures_Vivid_Auroras_in_Jupiter's_Atmosphere.jpg/220px-Hubble_Captures_Vivid_Auroras_in_Jupiter's_Atmosphere.jpg"
    },
    {
        name:"Saturn",
        url: "http://nssdc.gsfc.nasa.gov/planetary/image/saturn.jpg"
    },
    {
        name:"Uranus",
        url: "https://www.nasa.gov/centers/goddard/images/content/638831main_globe_east_2048.jpg"
    },
    {
        name:"Neptune",
        url: "https://www.nasa.gov/centers/goddard/images/content/638831main_globe_east_2048.jpg"
    }
];



var array = [];


function writeToDom(){
	planetHolder.innerHTML = ""; // Wipes the DIV & reset
	for (var i = 0; i < planets.length; i++) {
		
		var newPlanet="";
		newPlanet += `<div class="planetBox" id="planetBox-${i}">`
		newPlanet += `<div class="planetName hidden"> ${planets[i].name} </div>`;
		newPlanet += `<img class="planetImage"src="${planets[i].url}"`
		newPlanet += `</div>`
		planetHolder.innerHTML += newPlanet;
	}

}

function showMeTheMoney(event){

	if(event.target.className === "planetImage")
		console.log("event worked", event);
	    // console.log("event worked", event.target.parentNode.id);
		console.log("event worked", event.target.previousSibling);
		event.target.previousSibling.classList.remove('hidden');
}

getPlanets.addEventListener('mouseenter', writeToDom);

// console.log(planetBoxes);
document.body.addEventListener("click", showMeTheMoney);




