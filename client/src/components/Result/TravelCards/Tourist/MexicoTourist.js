
import React, {Component} from 'react';
import "../cards.css";

class MexTourist extends Component {

	state = {
		picture: "https://raw.githubusercontent.com/ncloyd/LlamaResults/master/images/touristmexico.jpg",
		restaurants: [
	      {"name": "Restaurante Nicos",
	      "url": "https://www.nicosmexico.mx/",
	      "photo": "https://i.imgur.com/vPzWmJh.jpg"},
	      {"name": "El Cardenal",
	      "url": "http://www.restauranteelcardenal.com/",
	      "photo": "https://i.imgur.com/L2PhdPS.jpg"},
	      {"name": "Quintonil",
	      "url": "http://www.quintonil.com/",
	      "photo": "https://i.imgur.com/HC2muDq.png"}
	    ],
	    landmarks: [
	      {"name": "Coba Ruins",
	      "url": "https://www.tripadvisor.com/Attraction_Review-g499447-d152724-Reviews-Coba_Ruins-Coba_Yucatan_Peninsula.html",
	      "photo": "https://i.imgur.com/TdLpkox.jpg"},
	      {"name": "Pyramid of the Sun",
	      "url": "https://www.tripadvisor.com/LocationPhotoDirectLink-g499421-d5010246-i110483405-Pyramid_of_the_Sun-San_Juan_Teotihuacan_Central_Mexico_and_Gulf_Coast.html",
	      "photo": "https://i.imgur.com/HohB0VJ.jpg"},
	      {"name": "Plaza Garibaldi",
	      "url": "https://www.tripadvisor.com/Attraction_Review-g150800-d153024-Reviews-Plaza_Garibaldi-Mexico_City_Central_Mexico_and_Gulf_Coast.html",
	      "photo": "https://i.imgur.com/VyiJxqM.jpg"}
	    ],
	    activities: [
	      {"name": "Dolphin Discovery",
	      "url": "https://www.dolphindiscovery.com/",
	      "photo": "https://i.imgur.com/a273Dvk.jpg"},
	      {"name": "Los Cabos Snorkeling",
	      "url": "https://www.viator.com/Los-Cabos-tours/Snorkeling/d627-g17-c58",
	      "photo": "https://i.imgur.com/4FQbYLq.jpg"},
	      {"name": "Jungle Tour",
	      "url": "https://aquaworld.com.mx/en/tours/jungle-tour/",
	      "photo": "https://i.imgur.com/9WaYjPt.jpg"}
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

export default MexTourist;