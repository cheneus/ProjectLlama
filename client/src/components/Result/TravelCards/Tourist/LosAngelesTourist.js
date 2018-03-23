
import React, {Component} from 'react';
import "../cards.css";

class LATourist extends Component {

	state = {
		picture: "https://raw.githubusercontent.com/ncloyd/LlamaResults/master/images/touristla.jpg",
		restaurants: [
	      {"name": "Michael's Restaurant",
	      "url": "http://www.michaelssantamonica.com/",
	      "photo": "https://i.imgur.com/ugvouPc.jpg"},
	      {"name": "Cassia",
	      "url": "https://www.cassiala.com/",
	      "photo": "https://i.imgur.com/rVIAsoz.jpg"},
	      {"name": "Rose Cafe",
	      "url": "http://rosecafevenice.com/",
	      "photo": "https://i.imgur.com/0cSwmfP.jpg"}
	    ],
	    landmarks: [
	      {"name": "Hollywood Hill",
	      "url": "https://www.tripadvisor.com/Attraction_Review-g32655-d277005-Reviews-Hollywood_Hills-Los_Angeles_California.html",
	      "photo": "https://i.imgur.com/QAV0ZTs.jpg"},
	      {"name": "Hollywood Walk of Fame",
	      "url": "http://www.walkoffame.com/",
	      "photo": "https://i.imgur.com/87S6URb.jpg"},
	      {"name": "Hollywood Boulevard",
	      "url": "https://www.tripadvisor.com/Attraction_Review-g32655-d103401-Reviews-Hollywood_Boulevard-Los_Angeles_California.html",
	      "photo": "https://i.imgur.com/luCQdda.jpg"}
	    ],
	    activities: [
	      {"name": "Universal Studios Hollywood",
	      "url": "https://www.universalstudioshollywood.com/",
	      "photo": "https://i.imgur.com/9e2yoJM.jpg"},
	      {"name": "Grauman's Chinese Theatre",
	      "url": "http://www.tclchinesetheatres.com/",
	      "photo": "https://i.imgur.com/wTb5TAo.jpg"},
	      {"name": "TMZ Celebrity Tour",
	      "url": "https://www.tmztour.com/",
	      "photo": "https://i.imgur.com/sIjgMrk.jpg"}
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

export default LATourist;