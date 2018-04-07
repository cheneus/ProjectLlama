
import React, {Component} from 'react';
import "../cards.css";

class NYLaidBack extends Component {

	state = {
		picture: "https://raw.githubusercontent.com/ncloyd/LlamaResults/master/images/laidbackny.jpg",
		restaurants: [
	      {"name": "Westville Chelsea",
	      "url": "http://westvillenyc.com/menu/",
	      "photo": "https://i.imgur.com/WAZZsu9.jpg"},
	      {"name": "Cotenna",
	      "url": "http://places.singleplatform.com/cotenna/menu?ref=google",
	      "photo": "https://i.imgur.com/peL1YTI.jpg"},
	      {"name": "Shuka",
	      "url": "http://places.singleplatform.com/shuka/menu?ref=google",
	      "photo": "https://i.imgur.com/Ck9MMoR.jpg"}
	    ],
	    landmarks: [
	      {"name": "Rockefeller Center",
	      "url": "https://www.rockefellercenter.com/",
	      "photo": "https://i.imgur.com/7kUj5qm.jpg"},
	      {"name": "Central Park",
	      "url": "http://www.centralparknyc.org/",
	      "photo": "https://i.imgur.com/UMJzg3L.jpg"},
	      {"name": "Bronx Zoo",
	      "url": "https://bronxzoo.com/",
	      "photo": "https://i.imgur.com/GfqRHzy.jpg"}
	    ],
	    activities: [
	      {"name": "Chelsea Market",
	      "url": "http://chelseamarket.com/",
	      "photo": "https://i.imgur.com/fSOf7fX.jpg"},
	      {"name": "Comedy Cellar",
	      "url": "http://www.comedycellar.com/",
	      "photo": "https://i.imgur.com/PfHXcn5.jpg"},
	      {"name": "Fifth Avenue Shopping",
	      "url": "http://visit5thavenue.com/",
	      "photo": "https://i.imgur.com/1OzX0Uk.jpg"}
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

export default NYLaidBack;