
import React, {Component} from 'react';
import "../cards.css";

class ThailandAdventurous extends Component {

	state = {
		picture: "https://raw.githubusercontent.com/ncloyd/LlamaResults/master/images/adventurethailand.jpg",
		restaurants: [
	      {"name": "Vertigo Bar",
	      "url": "https://www.banyantree.com/en/thailand/bangkok/dining/vertigo",
	      "photo": "https://i.imgur.com/DxLHZCH.jpg"},
	      {"name": "The Deck by Arun Residence",
	      "url": "https://www.tripadvisor.com/Restaurant_Review-g293916-d816295-Reviews-The_Deck-Bangkok.html",
	      "photo": "https://i.imgur.com/IcRPFlE.jpg"},
	      {"name": "Sala Rim Naam",
	      "url": "https://www.tripadvisor.com/Restaurant_Review-g293916-d866280-Reviews-Sala_Rim_Naam_at_Mandarin_Oriental_Bangkok-Bangkok.html",
	      "photo": "https://i.imgur.com/suLK88c.jpg"}
	    ],
	    landmarks: [
	      {"name": "Phi Phi Islands",
	      "url": "http://www.phuket.com/island/phiphi.htm",
	      "photo": "https://i.imgur.com/B39OW4B.jpg"},
	      {"name": "Wat Chedi Luang",
	      "url": "https://www.tripadvisor.com/Attraction_Review-g293917-d447585-Reviews-Wat_Chedi_Luang_Varavihara-Chiang_Mai.html",
	      "photo": "https://i.imgur.com/rpPG4Tq.jpg"},
	      {"name": "Elephant Nature Park",
	      "url": "https://www.elephantnaturepark.org/",
	      "photo": "https://i.imgur.com/BN3whf0.jpg"}
	    ],
	    activities: [
	      {"name": "Safari World",
	      "url": "https://www.tripadvisor.com/Attraction_Review-g293916-d455818-Reviews-Safari_World-Bangkok.html",
	      "photo": "https://i.imgur.com/yTCLtAu.jpg"},
	      {"name": "Burma Railway",
	      "url": "https://www.tripadvisor.com.au/Attraction_Review-g297924-d1731130-Reviews-Thai_Burma_Railway_Death_Railway-Kanchanaburi_Kanchanaburi_Province.html",
	      "photo": "https://i.imgur.com/K9DHNCB.jpg"},
	      {"name": "Jungle Safari",
	      "url": "https://www.phukettoursdirect.com/jungle-safari-tours.html",
	      "photo": "https://i.imgur.com/0RCLDDr.jpg"}
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

export default ThailandAdventurous;