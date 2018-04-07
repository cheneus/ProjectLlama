import React, {Component} from 'react';
import "../cards.css";

class MexAdventurous extends Component {

	state = {
		picture: "https://raw.githubusercontent.com/ncloyd/LlamaResults/master/images/touristmexico.jpg",
		restaurants: [
	      {"name": "Yuban",
	      "url": "https://www.yelp.com/biz/yuban-m%C3%A9xico-3",
	      "photo": "https://i.imgur.com/AoeVXnL.jpg"},
	      {"name": "Los Danzantes",
	      "url": "http://www.losdanzantes.com/",
	      "photo": "https://i.imgur.com/i6awBTD.jpg"},
	      {"name": "Pizza del Perro Negro",
	      "url": "http://www.pizzadelperronegro.com/",
	      "photo": "https://i.imgur.com/ZNKAkJ8.jpg"}
	    ],
	    landmarks: [
	      {"name": "Xel-Ha Park",
	      "url": "http://www.xelha.com/",
	      "photo": "https://i.imgur.com/PdgM1o8.jpg"},
	      {"name": "Arch of Cabo San Lucas",
	      "url": "https://www.tripadvisor.com/Attraction_Review-g152515-d152880-Reviews-El_Arco_de_Cabo_San_Lucas_Lands_End-Cabo_San_Lucas_Los_Cabos_Baja_California.html",
	      "photo": "https://i.imgur.com/fCioiz4.jpg"},
	      {"name": "Popocatépetl",
	      "url": "https://www.tripadvisor.com/Attraction_Review-g150796-d152737-Reviews-Popocatepetl-Central_Mexico_and_Gulf_Coast.html",
	      "photo": "https://i.imgur.com/1rjF5l8.jpg"}
	    ],
	    activities: [
	      {"name": "Sayulita Surfing",
	      "url": "https://www.sayulitalife.com/surf",
	      "photo": "https://i.imgur.com/cZjw2MF.jpg"},
	      {"name": "Rock Climbing in El Potrero Chico",
	      "url": "http://potrerochico.org/",
	      "photo": "https://i.imgur.com/QQpDI3N.jpg"},
	      {"name": "Copper Canyon Cycling",
	      "url": "http://traveltips.usatoday.com/copper-canyon-cycling-19279.html",
	      "photo": "https://i.imgur.com/MuOi4T3.jpg"}
	    ]
	}

	render() {
	    return (
	      <div className="card">
	     	<img className="resultPhoto" src={this.state.picture} alt={this.state.picture}/>
			<div className="rest" id="itinerary">
			    <h1>Restaurants</h1>
			       	<div className="Grid">
			      		<div id="rest1">
					        <a href={this.state.restaurants[0].url} target="blank">
						        <img className="photo" alt={this.state.restaurants[0].name} src={this.state.restaurants[0].photo}/>
						        <h2>{this.state.restaurants[0].name}</h2>
					        </a>
					    </div>
					    <div id="rest2">		        
					        <a href={this.state.restaurants[1].url} target="blank">
						        <img className="photo" alt={this.state.restaurants[1].name} src={this.state.restaurants[1].photo}/>
						        <h2>{this.state.restaurants[1].name}</h2>
					        </a>	        
					    </div>
					    <div id="rest3">			        
					        <a href={this.state.restaurants[2].url} target="blank">
						        <img className="photo" alt={this.state.restaurants[2].name} src={this.state.restaurants[2].photo}/>
						        <h2>{this.state.restaurants[2].name}</h2>
					        </a>	        
					    </div>
					</div>
			</div>

			<div className="land">
			    <h1>Landmarks</h1>
			    	<div className="Grid">
				    	<div id="land1">
					        <a href={this.state.landmarks[0].url} target="blank">
						        <img className="photo" alt={this.state.landmarks[0].name} src={this.state.landmarks[0].photo}/>
						        <h2>{this.state.landmarks[0].name}</h2>
					        </a>
					    </div>
					    <div id="land2">
					        <a href={this.state.landmarks[1].url} target="blank">
						        <img className="photo" alt={this.state.landmarks[1].name} src={this.state.landmarks[1].photo}/>
						        <h2>{this.state.landmarks[1].name}</h2>
					        </a>
					    </div>
					    <div id="land3">		        
					        <a href={this.state.landmarks[2].url} target="blank">
						        <img className="photo" alt={this.state.landmarks[2].name} src={this.state.landmarks[2].photo}/>
						        <h2>{this.state.landmarks[2].name}</h2>
					        </a>
					    </div>
					</div>
			</div>
			
		   	<div className="act">
		    	<h1>Activities</h1>
		    		<div className="Grid">
			    		<div id="act1">		      	
					        <a href={this.state.activities[0].url} target="blank">
						        <img className="photo" alt={this.state.activities[0].name} src={this.state.activities[0].photo}/>
						        <h2>{this.state.activities[0].name}</h2>
					        </a>
					    </div>
					    <div id="act2">
					        <a href={this.state.activities[1].url} target="blank">
						        <img className="photo" alt={this.state.activities[1].name} src={this.state.activities[1].photo}/>
						        <h2>{this.state.activities[1].name}</h2>
					        </a>
					    </div>
					    <div id="act3">
					        <a href={this.state.activities[2].url} target="blank">
						        <img className="photo" alt={this.state.activities[2].name} src={this.state.activities[2].photo}/>
						        <h2>{this.state.activities[2].name}</h2>
					        </a>
					    </div>
					</div>
		   	</div>

	      </div>
	    );
	}
  
}

export default MexAdventurous;