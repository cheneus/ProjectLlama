
import React, {Component} from 'react';
import "../cards.css";

class ChicagoLaidBack extends Component {

	state = {
		picture: "https://raw.githubusercontent.com/ncloyd/LlamaResults/master/images/touristchi.jpg",
		restaurants: [
	      {"name": "Crosby's Kitchen",
	      "url": "http://www.crosbyschicago.com/",
	      "photo": "https://i.imgur.com/BxO6tsI.jpg"},
	      {"name": "Mi Tocaya Antojería",
	      "url": "http://www.mitocaya.com/",
	      "photo": "https://i.imgur.com/UzGxhRA.jpg"},
	      {"name": "Doc B's Fresh Kitchen",
	      "url": "https://docbsfreshkitchen.com/",
	      "photo": "https://i.imgur.com/kwjK6Rr.jpg"}
	    ],
	    landmarks: [
	      {"name": "Chicago Riverwalk",
	      "url": "https://www.chicagoriverwalk.us/",
	      "photo": "https://i.imgur.com/jCnF7CA.jpg"},
	      {"name": "Millennium Park",
	      "url": "https://www.cityofchicago.org/city/en/depts/dca/supp_info/millennium_park.html",
	      "photo": "https://i.imgur.com/RAn0Rr8.jpg"},
	      {"name": "Museum Campus",
	      "url": "https://www.choosechicago.com/things-to-do/museums-and-arts/museums-galleries-and-exhibitions/chicago-museum-campus-101/",
	      "photo": "https://i.imgur.com/GJFUqkA.jpg"}
	    ],
	    activities: [
	      {"name": "Wrigley Field",
	      "url": "http://chicago.cubs.mlb.com/chc/ballpark/",
	      "photo": "https://i.imgur.com/tlsfUdh.jpg"},
	      {"name": "Adler Planetarium",
	      "url": "https://www.adlerplanetarium.org/",
	      "photo": "https://i.imgur.com/ZYrgWV6.jpg"},
	      {"name": "Shedd Aquarium",
	      "url": "https://www.sheddaquarium.org/",
	      "photo": "https://i.imgur.com/f7aIGzv.jpg"}
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

export default ChicagoLaidBack;