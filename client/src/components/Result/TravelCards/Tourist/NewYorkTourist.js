
import React, {Component} from 'react';
import "../cards.css";

class NYTourist extends Component {

	state = {
		picture: "https://raw.githubusercontent.com/ncloyd/LlamaResults/master/images/touristny.jpg",
		restaurants: [
	      {"name": "ABC Kitchen",
	      "url": "http://www.abckitchennyc.com/",
	      "photo": "https://i.imgur.com/lAA4Uw9.jpg"}, 
	      {"name": "Bamonte's",
	      "url": "https://www.facebook.com/pages/Bamontes-Restaurant/117607771598030",
	      "photo": "https://i.imgur.com/dRu2Tmo.jpg"},
	      {"name": "Balthazar",
	      "url": "http://balthazarny.com/",
	      "photo": "https://i.imgur.com/za4IJBZ.jpg"}
	    ],
	    landmarks: [
	      {"name": "Statue of Liberty",
	      "url": "https://www.nps.gov/stli/index.htm",
	      "photo": "https://i.imgur.com/y1zv92d.jpg"},
	      {"name": "Empire State Building",
	      "url": "http://www.esbnyc.com/",
	      "photo": "https://i.imgur.com/THNubrD.jpg"},
	      {"name": "Times Square",
	      "url": "https://www.timessquarenyc.org/",
	      "photo": "https://i.imgur.com/rFgOivS.jpg"}
	    ],
	    activities: [
	      {"name": "Broadway Theatre",
	      "url": "https://www.broadway.com/",
	      "photo": "https://i.imgur.com/wbAstY5.jpg"},
	      {"name": "Metropolitan Museum of Art",
	      "url": "https://www.metmuseum.org/",
	      "photo": "https://i.imgur.com/9qDEBy6.jpg"},
	      {"name": "Madison Square Garden",
	      "url": "https://www.msg.com/madison-square-garden",
	      "photo": "https://i.imgur.com/fWq8noy.jpg"}
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

export default NYTourist;