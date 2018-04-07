
import React, {Component} from 'react';
import "../cards.css";

class ChicagoAdventurous extends Component {

	state = {
		picture: "https://raw.githubusercontent.com/ncloyd/LlamaResults/master/images/adventurechi.jpg",
		restaurants: [
	      {"name": "Fat Rice",
	      "url": "http://www.eatfatrice.com/",
	      "photo": "https://i.imgur.com/wq3M2ON.jpg"},
	      {"name": "The Purple Pig",
	      "url": "https://thepurplepigchicago.com/",
	      "photo": "https://i.imgur.com/EeNzETQ.jpg"},
	      {"name": "Restaurant Sarajevo",
	      "url": "http://www.restaurantsarajevo.com/",
	      "photo": "https://i.imgur.com/RMUqs4G.jpg"}
	    ],
	    landmarks: [
	      {"name": "Skydeck",
	      "url": "http://theskydeck.com/",
	      "photo": "https://i.imgur.com/OahQoMv.jpg"},
	      {"name": "Promontory Point",
	      "url": "https://en.wikipedia.org/wiki/Promontory_Point_(Chicago)",
	      "photo": "https://i.imgur.com/cTruzrp.jpg"},
	      {"name": "Murder Castle",
	      "url": "http://chicagoist.com/2015/11/02/i_was_born_with_the_devil_in_me_a_h.php",
	      "photo": "https://i.imgur.com/0rDz1gx.jpg"}
	    ],
	    activities: [
	      {"name": "Go Ape Zipline",
	      "url": "https://goape.com/Locations/Illinois/Chicago",
	      "photo": "https://i.imgur.com/ewMFkrL.jpg"},
	      {"name": "Chicago Detours",
	      "url": "http://www.chicagodetours.com/",
	      "photo": "https://i.imgur.com/wCaiuAJ.jpg"},
	      {"name": "Chicagoland Skydiving Center",
	      "url": "https://www.skydivecsc.com/",
	      "photo": "https://i.imgur.com/LWyf9Vy.jpg"}
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

export default ChicagoAdventurous;