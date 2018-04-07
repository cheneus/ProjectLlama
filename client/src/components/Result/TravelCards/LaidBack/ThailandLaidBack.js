
import React, {Component} from 'react';
import "../cards.css";

class ThailandLaidBack extends Component {

	state = {
		picture: "https://raw.githubusercontent.com/ncloyd/LlamaResults/master/images/laidbackthailand.jpg",
		restaurants: [
	      {"name": "Cafe Ice des Arts",
	      "url": "https://www.tripadvisor.com/Restaurant_Review-g293916-d1849260-Reviews-Cafe_Ice_des_Arts-Bangkok.html",
	      "photo": "https://i.imgur.com/ZJWPgm5.jpg"},
	      {"name": "Namsaah Bottling Trust",
	      "url": "https://www.tripadvisor.com/Restaurant_Review-g293916-d6864201-Reviews-Namsaah_Bottling_Trust-Bangkok.html",
	      "photo": "https://i.imgur.com/M9Qn8G0.jpg"},
	      {"name": "Soul Food Mahanakorn",
	      "url": "https://www.soulfoodmahanakorn.com/",
	      "photo": "https://i.imgur.com/x0qZkok.jpg"}
	    ],
	    landmarks: [
	      {"name": "Patong",
	      "url": "https://www.tripadvisor.com/Tourism-g297930-Patong_Kathu_Phuket-Vacations.html",
	      "photo": "https://i.imgur.com/CEDmgrl.jpg"},
	      {"name": "Railay Beach",
	      "url": "https://www.tripadvisor.com/Attraction_Review-g1597036-d627649-Reviews-Railay_Beach-Railay_Beach_Krabi_Town_Krabi_Province.html",
	      "photo": "https://i.imgur.com/nDGxoB9.jpg"},
	      {"name": "MBK Center",
	      "url": "https://www.tripadvisor.com/Attraction_Review-g293916-d2172511-Reviews-MBK_Center_Ma_Boon_Khrong_Center-Bangkok.html",
	      "photo": "https://i.imgur.com/ZvBzt0D.jpg"}
	    ],
	    activities: [
	      {"name": "Bangkok Dinner Cruise",
	      "url": "http://www.bangkok.com/dinner---shows-tours/",
	      "photo": "https://i.imgur.com/UGnnCbL.jpg"},
	      {"name": "Bangkok by Night",
	      "url": "https://www.viator.com/tours/Bangkok/Bangkok-by-Night-Food-Temples-and-Markets-by-Tuk-Tuk/d343-6467BKKNIGHT",
	      "photo": "https://i.imgur.com/HCSRTon.jpg"},
	      {"name": "Thai Akha Cooking School",
	      "url": "https://www.tripadvisor.com/Attraction_Review-g293917-d8614455-Reviews-Thai_Akha_Cooking_School-Chiang_Mai.html",
	      "photo": "https://i.imgur.com/6TytUgU.jpg"}
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

export default ThailandLaidBack;