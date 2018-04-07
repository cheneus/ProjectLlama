
import React, {Component} from 'react';
import "../cards.css";

class ThailandTourist extends Component {

	state = {
		picture: "https://raw.githubusercontent.com/ncloyd/LlamaResults/master/images/touristthailand.jpg",
		restaurants: [
	      {"name": "Suay Restaurant",
	      "url": "http://www.suayrestaurant.com/",
	      "photo": "https://i.imgur.com/eEfSWOK.jpg"},
	      {"name": "Feuang Nara",
	      "url": "https://www.tripadvisor.com/Restaurant_Review-g293916-d2036960-Reviews-Feuang_Nara-Bangkok.html",
	      "photo": "https://i.imgur.com/WzwjeHL.jpg"},
	      {"name": "Le Vendôme",
	      "url": "http://www.levendomerestaurant.com/home/",
	      "photo": "https://i.imgur.com/2SA9Iym.jpg"}
	    ],
	    landmarks: [
	      {"name": "Doi Inthanon National Park",
	      "url": "https://www.thainationalparks.com/doi-inthanon-national-park",
	      "photo": "https://i.imgur.com/5WM7naT.jpg"},
	      {"name": "Grand Palace",
	      "url": "http://www.bangkok.com/attraction-palace/grand-palace.htm",
	      "photo": "https://i.imgur.com/LESdSgA.jpg"},
	      {"name": "Wat Arun",
	      "url": "http://www.bangkok.com/attraction-temple/wat-arun.htm",
	      "photo": "https://i.imgur.com/NmRUPcp.jpg"}
	    ],
	    activities: [
	      {"name": "Phuket FantaSea",
	      "url": "https://www.tripadvisor.com/Attraction_Review-g1379324-d455158-Reviews-Phuket_FantaSea-Kamala_Kathu_Phuket.html",
	      "photo": "https://i.imgur.com/U5Ussi8.jpg"},
	      {"name": "Floating Markets",
	      "url": "http://www.bangkok.com/magazine/5-floating-markets.htm",
	      "photo": "https://i.imgur.com/Me0fJV0.jpg"},
	      {"name": "Tiffany's Show",
	      "url": "https://www.tripadvisor.com/Attraction_Review-g293919-d1847172-Reviews-Tiffany_s_Show_Pattaya-Pattaya_Chonburi_Province.html",
	      "photo": "https://i.imgur.com/gFCslXm.jpg"}
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

export default ThailandTourist;