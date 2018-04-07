
import React, {Component} from 'react';
import "../cards.css";

class LondonAdventurous extends Component {

	state = {
		picture: "https://raw.githubusercontent.com/ncloyd/LlamaResults/master/images/adventurelondon.jpg",
		restaurants: [
	      {"name": "Archipelago",
	      "url": "http://www.archipelago-restaurant.co.uk/",
	      "photo": "https://i.imgur.com/EeGVHD8.jpg"},
	      {"name": "Bob Bob Ricard",
	      "url": "https://www.bobbobricard.com/",
	      "photo": "https://i.imgur.com/enjoHrF.jpg"},
	      {"name": "Bunga Bunga",
	      "url": "https://bungabunga-london.com/",
	      "photo": "https://i.imgur.com/AGAvBgG.png"}
	    ],
	    landmarks: [
	      {"name": "Millennium Bridge",
	      "url": "https://www.thecheesebar.com/",
	      "photo": "https://i.imgur.com/D6V8S56.png"},
	      {"name": "Tate Modern",
	      "url": "http://www.tate.org.uk/visit/tate-modern",
	      "photo": "https://i.imgur.com/UZewJjV.jpg"},
	      {"name": "London Dungeon",
	      "url": "https://www.thedungeons.com/london/en/",
	      "photo": "https://i.imgur.com/GvvJYp0.jpg"},
	    ],
	    activities: [
	      {"name": "The Crystal Maze",
	      "url": "https://the-crystal-maze.com/",
	      "photo": "https://i.imgur.com/zshBKkM.jpg"},
	      {"name": "ArcelorMittal Orbit",
	      "url": "http://arcelormittalorbit.com/",
	      "photo": "https://i.imgur.com/qWZUKdw.jpg"},
	      {"name": "Jack the Ripper Tour",
	      "url": "https://www.jack-the-ripper-tour.com/",
	      "photo": "https://i.imgur.com/yNjOuln.jpg"}
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

export default LondonAdventurous;