import React from 'react';
import ReactDOM from 'react-dom/client';

/*
*Header
*-logo
*- navitem
*Body
*-search
*-Restaurant container
* -reataurant card
*    -img
*      -name of res,star rating,cuisine, delivery time
* Footer
* - copyright
* -Links
* -address
* -contact
*/

const root= ReactDOM.createRoot(document.getElementById("root"));

const resObj ={
   "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "30532",
              "name": "Hotel Empire",
              "cloudinaryImageId": "10f8b483521b9359d9c8fcd37f23c9d3",
              "locality": "Infantry Road\t",
              "areaName": "Infantry Road",
              "costForTwo": "₹450 for two",
              "cuisines": [
                "Kebabs",
                "Biryani"
              ],
              "avgRating": 4.5,
              "parentId": "475",
              "avgRatingString": "4.5",
              "totalRatingsString": "18K+",
              "promoted": true,
              "adTrackingId": "cid=18174324~p=1~adgrpid=18174324#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=30532~eid=b8b36644-45ba-4859-8cf1-53386088f7d2~srvts=1725779426766~collid=83639",
              "sla": {
                "deliveryTime": 38,
                "lastMileTravel": 2.2,
                "serviceability": "SERVICEABLE",
                "slaString": "35-40 mins",
                "lastMileTravelString": "2.2 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2024-09-09 03:00:00",
                "opened": true
              },
              "badges": {
                "imageBadges": [
                  {
                    "imageId": "Rxawards/_CATEGORY-North%20Indian.png",
                    "description": "Delivery!"
                  }
                ]
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textBased": {
                    
                  },
                  "imageBased": {
                    "badgeObject": [
                      {
                        "attributes": {
                          "imageId": "Rxawards/_CATEGORY-North%20Indian.png",
                          "description": "Delivery!"
                        }
                      }
                    ]
                  },
                  "textExtendedBadges": {
                    
                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "10% OFF",
                "subHeader": "UPTO ₹40"
              },
              "orderabilityCommunication": {
                "title": {
                  
                },
                "subTitle": {
                  
                },
                "message": {
                  
                },
                "customIcon": {
                  
                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {
                
              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "4.3",
                  "ratingCount": "18K+"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {
              
            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=30532&source=collection&query=Biryani",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food",
          
 }
};
     

 

const Header=()=>{
   return(
      <div className="header">
         <div className="logo-container">
            <img className="logo" src="https://image.similarpng.com/very-thumbnail/2021/09/Good-food-logo-design-on-transparent-background-PNG.png"/>
         </div>
         <div className="nav-items">
            <ul>
               <li>Home</li>
               <li>About US</li>
               <li>Contact us</li>
               <li>Cart</li>
            </ul>
         </div>
      </div>
   )
}

const stylecard={
   backgroundColor:"grey"
}

const RestaurantCard=(props)=>{
   const{resData}=props;
   return(
      <div className="Res-card" style={stylecard}>
         <img
         className="res-logo"
         alt="res-logo"
         src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          resData.card.info.cloudinaryImageId
         }
         />
         <h3>{resData.card.info.name}</h3>
         <h4>{resData.card.info.cuisines.join(", ")}</h4>
         <h4>{resData.card.info.sla.slaString} minutes</h4>
         <h4>{resData.card.info.costForTwo}</h4>
         <h4>{resData.card.info.avgRating} Stars</h4>
      </div>
   )
}


 

const Body=()=>{
   return(
      <div className="body">
         <div className="search">Search</div>
            <div className="restaurant-container">
               <RestaurantCard resData={resObj}/>
            </div>
      </div>
   )
}


 const AppLayout=()=>{
   return(
      <div className="App">
         <Header/>
         <Body/>
      </div>
   )
 }


root.render(<AppLayout/>);// this is how react component can be rendered