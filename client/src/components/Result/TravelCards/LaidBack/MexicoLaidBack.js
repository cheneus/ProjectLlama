import React, {Component} from 'react';
import "../cards.css";

class MexLaidBack extends Component {

	state = {
		picture: "https://raw.githubusercontent.com/ncloyd/LlamaResults/master/images/laidbackmexico.jpg",
		restaurants: [
	      {"name": "Azul",
	      "url": "https://www.yelp.com/biz/azul-m%C3%A9xico-2",
	      "photo": "https://i.imgur.com/viwWTYL.jpg"},
	      {"name": "Lardo",
	      "url": "http://www.lardo.mx/",
	      "photo": "https://i.imgur.com/JCVn4na.jpg"},
	      {"name": "La Guapachosa",
	      "url": "http://www.laguapachosa.com/",
	      "photo": "https://i.imgur.com/DafP2pb.jpg"}
	    ],
	    landmarks: [
	      {"name": "Chapultepec Park",
	      "url": "https://www.tripadvisor.com/Attraction_Review-g150800-d152193-Reviews-Chapultepec_Park-Mexico_City_Central_Mexico_and_Gulf_Coast.html",
	      "photo": "https://i.imgur.com/WVg2Rwq.jpg"},
	      {"name": "Playacar Beach",
	      "url": "https://www.locogringo.com/mexico/ways-to-play/riviera-maya-beaches/playacar/",
	      "photo": "https://i.imgur.com/ZRRhRDZ.jpg"},
	      {"name": "Great Pyramid of Tenochtitlán",
	      "url": "https://www.flightcentre.com.au/world-travel/mexico/mexico-city/great-pyramid-of-tenochtitlan",
	      "photo": "https://i.imgur.com/cXtPeVn.jpg"}
	    ],
	    activities: [
	      {"name": "Palacio de Bellas Artes",
	      "url": "https://www.tripadvisor.com/Attraction_Review-g150800-d153969-Reviews-Palacio_de_Bellas_Artes-Mexico_City_Central_Mexico_and_Gulf_Coast.html",
	      "photo": "https://i.imgur.com/t7MKA9H.jpg"},
	      {"name": "Xcaret Park",
	      "url": "http://www.xcaret.com/",
	      "photo": "https://i.imgur.com/JUbMOta.jpg"},
	      {"name": "Frida Kahlo Museum",
	      "url": "http://www.museofridakahlo.org.mx/",
	      "photo": "https://i.imgur.com/xQS16UQ.jpg"}
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

export default MexLaidBack;