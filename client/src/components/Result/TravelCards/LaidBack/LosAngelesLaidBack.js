
import React, {Component} from 'react';
import "../cards.css";

class LALaidBack extends Component {

	state = {
		picture: "https://raw.githubusercontent.com/ncloyd/LlamaResults/master/images/laidbackla.jpg",
		restaurants: [
	      {"name": "République",
	      "url": "http://republiquela.com/menus/",
	      "photo": "https://i.imgur.com/kahQnX5.jpg"},
	      {"name": "Baroo",
	      "url": "http://baroola.strikingly.com/",
	      "photo": "https://i.imgur.com/MIcmQxA.jpg"},
	      {"name": "Colori Kitchen",
	      "url": "http://colorikitchen.com/colori_kitchen_dinner.html",
	      "photo": "https://i.imgur.com/L0e6HcJ.jpg"}
	    ],
	    landmarks: [
	      {"name": "Venice Beach Boardwalk",
	      "url": "http://www.venicebeach.com/the-venice-beach-boardwalk/",
	      "photo": "https://i.imgur.com/SY6wKjj.jpg"},
	      {"name": "Bradbury Building",
	      "url": "https://www.tripadvisor.com/Attraction_Review-g32655-d127352-Reviews-Bradbury_Building-Los_Angeles_California.html",
	      "photo": "https://i.imgur.com/NSVGWNr.jpg"},
	      {"name": "Capitol Records Building",
	      "url": "https://www.tripadvisor.com/Attraction_Review-g32655-d156472-Reviews-Capitol_Records_Building-Los_Angeles_California.html",
	      "photo": "https://i.imgur.com/wdTWwHX.jpg"}
	    ],
	    activities: [
	      {"name": "Walt Disney Concert Hall",
	      "url": "https://www.laphil.com/concerts-and-events/tickets-and-packages/",
	      "photo": "https://i.imgur.com/NSVGWNr.jpg"},
	      {"name": "Staples Center",
	      "url": "https://www.staplescenter.com/",
	      "photo": "https://i.imgur.com/MqoSvOT.jpg"},
	      {"name": "Dearly Departed Tours",
	      "url": "http://dearlydepartedtours.com/",
	      "photo": "https://i.imgur.com/EEOHgJF.jpg"}
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

export default LALaidBack;