
import React, {Component} from 'react';
import "../cards.css";

class ChicagoTourist extends Component {

	state = {
		picture: "https://raw.githubusercontent.com/ncloyd/LlamaResults/master/images/touristchi.jpg",
		restaurants: [
	      {"name": "Pequod's Pizza",
	      "url": "https://pequodspizza.com/",
	      "photo": "https://i.imgur.com/59gOf4M.jpg"},
	      {"name": "Lou Mitchell's Restaurant",
	      "url": "http://www.loumitchells.com/",
	      "photo": "https://i.imgur.com/bQqnyHZ.jpg"},
	      {"name": "The Capital Grille",
	      "url": "https://www.thecapitalgrille.com/locations/il/chicago/chicago-downtown/8008",
	      "photo": "https://i.imgur.com/mmQ9Dm8.jpg"}
	    ],
	    landmarks: [
	      {"name": "Navy Pier",
	      "url": "https://navypier.org/",
	      "photo": "https://i.imgur.com/CD44qPT.jpg"},
	      {"name": "Willis Tower",
	      "url": "http://www.willistower.com/",
	      "photo": "https://i.imgur.com/F40ecE9.jpg"},
	      {"name": "Chicago Cultural Center",
	      "url": "https://www.cityofchicago.org/city/en/depts/dca/supp_info/chicago_culturalcenter.html/",
	      "photo": "https://i.imgur.com/P5gvRzo.jpg"}
	    ],
	    activities: [
	      {"name": "Magnificent Mile",
	      "url": "https://themagnificentmile.com/",
	      "photo": "https://i.imgur.com/2sTYjxu.jpg"},
	      {"name": "Art Institute of Chicago",
	      "url": "http://www.artic.edu/",
	      "photo": "https://i.imgur.com/Z7P69XQ.jpg"},
	      {"name": "Al Capone Gangster Tour",
	      "url": "https://chicagocrimetours.com/",
	      "photo": "https://i.imgur.com/9lIl7D0.jpg"}
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

export default ChicagoTourist;