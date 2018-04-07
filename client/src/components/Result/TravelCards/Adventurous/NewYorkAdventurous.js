
import React, {Component} from 'react';
import "../cards.css";

class NYAdventurous extends Component {

	state = {
		picture: "https://raw.githubusercontent.com/ncloyd/LlamaResults/master/images/adventureny.jpg",
		restaurants: [
	      {"name": "Burp Castle",
	      "url": "https://burpcastlenyc.wordpress.com/",
	      "photo": "https://i.imgur.com/GWK579c.jpg"},
	      {"name": "Apothéke Cocktail Bar",
	      "url": "https://www.apothekenyc.com/",
	      "photo": "https://i.imgur.com/JBeHCdu.jpg"},
	      {"name": "Fabbrica",
	      "url": "http://fabbricanyc.com/",
	      "photo": "https://i.imgur.com/j82AeSy.jpg"}
	    ],
	    landmarks: [
	      {"name": "Madame Tussauds",
	      "url": "https://www.madametussauds.com/new-york/en/",
	      "photo": "https://i.imgur.com/DZj6YBy.jpg"},
	      {"name": "Top of The Rock",
	      "url": "https://www.topoftherocknyc.com/",
	      "photo": "https://i.imgur.com/3ljkheP.jpg"},
	      {"name": "Chinatown",
	      "url": "https://www.tripadvisor.com/Attraction_Review-g60763-d181825-Reviews-Chinatown-New_York_City_New_York.html",
	      "photo": "https://i.imgur.com/Qk2bon3.jpg"}
	    ],
	    activities: [
	      {"name": "Alley Pond Park Adventure Course",
	      "url": "https://www.nycgovparks.org/programs/rangers/adventure-course",
	      "photo": "https://i.imgur.com/VMup4re.jpg"},
	      {"name": "Big Apple Helicopter Tour",
	      "url": "https://www.libertyhelicopter.com/store/tours/the-big-apple-approx-12-15-minutes.html",
	      "photo": "https://i.imgur.com/Q3pJ7tH.jpg"},
	      {"name": "Tribeca Sailing",
	      "url": "http://www.tribecasailing.com/",
	      "photo": "https://i.imgur.com/LVGDNS7.jpg"}
	    ]
	}

	render() {
	    return (
	      <div className="card">
	     	<img className="resultPhoto" src={this.state.picture} alt={this.state.picture} />
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

export default NYAdventurous;