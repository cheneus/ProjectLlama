
import React, {Component} from 'react';
import "../cards.css";

class LAAdventurous extends Component {

	state = {
		picture: "https://raw.githubusercontent.com/ncloyd/LlamaResults/master/images/adventurela.jpg",
		restaurants: [
	      {"name": "Wurstküche",
	      "url": "https://www.wurstkuche.com/",
	      "photo": "https://i.imgur.com/qHcgorI.jpg"},
	      {"name": "Sushi Zo",
	      "url": "http://sushizo.us/",
	      "photo": "https://i.imgur.com/ACH9Xuc.jpg"},
	      {"name": "Peddler's Creamery",
	      "url": "http://www.peddlerscreamery.com/",
	      "photo": "https://i.imgur.com/U1HwHdS.jpg"}
	    ],
	    landmarks: [
	      {"name": "Griffith Observatory",
	      "url": "http://griffithobservatory.org/",
	      "photo": "https://i.imgur.com/7PZe3jR.jpg"},
	      {"name": "Santa Monica Pier",
	      "url": "http://santamonicapier.org/",
	      "photo": "https://i.imgur.com/M8T3TJS.jpg"},
	      {"name": "Chateau Marmont",
	      "url": "http://www.chateaumarmont.com/",
	      "photo": "https://i.imgur.com/LNaQxv4.jpg"}
	    ],
	    activities: [
	      {"name": "LA River Kayak Safari",
	      "url": "http://lariverkayaksafari.org/",
	      "photo": "https://i.imgur.com/Wbg4Hkj.jpg"},
	      {"name": "Enjoy The Mountain",
	      "url": "https://www.enjoythemountain.com/",
	      "photo": "https://i.imgur.com/PerhEaf.jpg"},
	      {"name": "Maze Rooms",
	      "url": "https://la.mazerooms.com/",
	      "photo": "https://i.imgur.com/cPwtHan.jpg"}
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

export default LAAdventurous;