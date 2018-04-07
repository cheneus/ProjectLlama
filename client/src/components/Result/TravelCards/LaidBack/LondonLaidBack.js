
import React, {Component} from 'react';
import "../cards.css";

class LondonLaidBack extends Component {

	state = {
		picture: "https://raw.githubusercontent.com/ncloyd/LlamaResults/master/images/touristlondon.jpg",
		restaurants: [
	      {"name": "BAO Soho",
	      "url": "https://baolondon.com/",
	      "photo": "https://i.imgur.com/APN4Mfl.jpg"}, 
	      {"name": "Barrafina",
	      "url": "http://www.barrafina.co.uk/",
	      "photo": "https://i.imgur.com/9cxkba7.jpg"}, 
	      {"name": "Dishoom Shoreditch",
	      "url": "http://www.dishoom.com/shoreditch/",
	      "photo": "https://i.imgur.com/uJT77v0.jpg"}
	    ],
	    landmarks: [
	      {"name": "The Shard",
	      "url": "https://www.the-shard.com/",
	      "photo": "https://i.imgur.com/EKeGkuz.jpg"},
	      {"name": "Tower of London",
	      "url": "https://www.hrp.org.uk/tower-of-london/",
	      "photo": "https://i.imgur.com/xTDxXTJ.jpg"},
	      {"name": "Trafalgar Square",
	      "url": "https://www.london.gov.uk/about-us/our-building-and-squares/trafalgar-square",
	      "photo": "https://i.imgur.com/ka7WCGl.jpg"}
	    ],
	    activities: [
	      {"name": "Grosvenor Casino St Giles",
	      "url": "https://www.grosvenorcasinos.com/local-casinos/st-giles",
	      "photo": "https://i.imgur.com/x1eAGSU.jpg"},
	      {"name": "London Eye",
	      "url": "https://www.londoneye.com/",
	      "photo": "https://i.imgur.com/LhxWX2i.jpg"},
	      {"name": "Brick Lane Music Hall",
	      "url": "https://www.bricklanemusichall.co.uk/",
	      "photo": "https://i.imgur.com/HzBro1N.jpg"}
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

export default LondonLaidBack;