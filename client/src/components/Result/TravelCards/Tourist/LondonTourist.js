
import React, {Component} from 'react';
import "../cards.css";

class LondonTourist extends Component {

	state = {
		picture: "https://raw.githubusercontent.com/ncloyd/LlamaResults/master/images/touristlondon.jpg",
		restaurants: [
	      {"name": "The Golden Chippy",
	      "url": "http://thegoldenchippy.com/",
	      "photo": "https://i.imgur.com/V81ynUx.jpg"},
	      {"name": "The Goring Dining Room",
	      "url": "http://www.thegoring.com/food-drink/the-dining-room/",
	      "photo": "https://i.imgur.com/20gSOoj.jpg"},
	      {"name": "The Wilmington, Public House & Dining",
	      "url": "http://www.wilmingtonclerkenwell.com/",
	      "photo": "https://i.imgur.com/IXO2ctG.jpg"}
	    ],
	    landmarks: [
	      {"name": "Big Ben",
	      "url": "https://www.visitlondon.com/things-to-do/sightseeing/london-attraction/big-ben",
	      "photo": "https://i.imgur.com/HTjTs33.jpg"},
	      {"name": "Buckingham Palace",
	      "url": "https://www.royal.uk/buckingham-palace",
	      "photo": "https://i.imgur.com/qT18wx6.jpg"},
	      {"name": "Westminster Abbey",
	      "url": "http://www.westminster-abbey.org/",
	      "photo": "https://i.imgur.com/nWlBmR5.jpg"}
	    ],
	    activities: [
	      {"name": "Sea Life London Aquarium",
	      "url": "http://www.visitsealife.com/london/",
	      "photo": "https://i.imgur.com/8HV3VZ5.jpg"},
	      {"name": "Royal Observatory",
	      "url": "https://www.rmg.co.uk/royal-observatory",
	      "photo": "https://i.imgur.com/ENjgo2E.jpg"},
	      {"name": "Royal Opera House",
	      "url": "http://www.roh.org.uk/",
	      "photo": "https://i.imgur.com/308lKHt.jpg"}
	    ]
	}

	render() {
	    return (
	     <div className="card">
	     	<img className="resultPhoto" src={this.state.picture}/>
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

export default LondonTourist;