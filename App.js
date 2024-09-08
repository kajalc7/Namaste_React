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
   console.log(props)
   return(
      <div className="Res-card" style={stylecard}>
         <img
          className="res-logo"
          alt="res-logo"
         src="https://b.zmtcdn.com/data/pictures/chains/1/50691/0435a03f4d2017a0a64d90b279c2fa63.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A"/>
         <h3>{props.resName}</h3>
         <h4>{props.cuisine}</h4>
         <h4>4.4 stars</h4>
         <h4>38 min</h4>
      </div>
   )
}

const resData=[
   {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "515425",
            "name": "WOK KITCHEN",
            "cloudinaryImageId": "44ce2ee853a70d7ba337efcd277d12b1",
            "locality": "Kodihalli",
            "areaName": "Indiranagar",
            "costForTwo": "₹250 for two",
            "cuisines": [
              "Chinese",
              "Snacks"
            ],
            "avgRating": 4.1,
            "parentId": "226282",
            "avgRatingString": "4.1",
            "totalRatingsString": "207",
            "promoted": true,
            "adTrackingId": "cid=17928122~p=5~adgrpid=17928122#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=515425~eid=3a345292-3ca6-4148-84ec-9dc378536b1e~srvts=1725734515717~collid=83631",
            "sla": {
              "deliveryTime": 42,
              "lastMileTravel": 7.4,
              "serviceability": "SERVICEABLE",
              "slaString": "40-45 mins",
              "lastMileTravelString": "7.4 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-09-08 23:59:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "textBased": {
                  
                },
                "imageBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "ITEMS",
              "subHeader": "AT ₹99"
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
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
          },
          "analytics": {
            
          },
          "cta": {
            "link": "swiggy://menu?restaurant_id=515425&source=collection&query=Pizza",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
          },
          "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
        },
        "relevance": {
          "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
          "sectionId": "MENU_RETURN_FOOD"
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "10575",
            "name": "Pizza Hut",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/16/5b9c53df-e0cb-48fc-ac31-f02735592edc_10575.jpg",
            "locality": "Richmond Town",
            "areaName": "Shanti Nagar",
            "costForTwo": "₹600 for two",
            "cuisines": [
              "Pizzas"
            ],
            "avgRating": 4.3,
            "parentId": "721",
            "avgRatingString": "4.3",
            "totalRatingsString": "10K+",
            "sla": {
              "deliveryTime": 27,
              "lastMileTravel": 2.7,
              "serviceability": "SERVICEABLE",
              "slaString": "25-30 mins",
              "lastMileTravelString": "2.7 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-09-08 01:00:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textExtendedBadges": {
                  
                },
                "textBased": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "ITEMS",
              "subHeader": "AT ₹189"
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
                "rating": "3.9",
                "ratingCount": "1.5K+"
              },
              "source": "GOOGLE",
              "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
          },
          "analytics": {
            
          },
          "cta": {
            "link": "swiggy://menu?restaurant_id=10575&source=collection&query=Pizza",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
          },
          "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
        },
        "relevance": {
          "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
          "sectionId": "MENU_RETURN_FOOD"
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "634685",
            "name": "Milano Pizza",
            "cloudinaryImageId": "c67f7f84b93b38a8993cacbd4837b12b",
            "locality": "1st Stage",
            "areaName": "Indiranagar",
            "costForTwo": "₹500 for two",
            "cuisines": [
              "Pizzas",
              "Italian",
              "Pastas",
              "Desserts",
              "Beverages",
              "Ice Cream"
            ],
            "avgRating": 4.5,
            "parentId": "298808",
            "avgRatingString": "4.5",
            "totalRatingsString": "254",
            "promoted": true,
            "adTrackingId": "cid=17769580~p=6~adgrpid=17769580#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=634685~eid=2b9d2bd4-2f6d-430e-b2d9-870aa559ff34~srvts=1725734515717~collid=83631",
            "sla": {
              "deliveryTime": 34,
              "lastMileTravel": 6.3,
              "serviceability": "SERVICEABLE",
              "slaString": "30-35 mins",
              "lastMileTravelString": "6.3 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-09-08 00:45:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "aggregatedDiscountInfoV2": {
              
            },
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "textBased": {
                  
                },
                "imageBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
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
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
          },
          "analytics": {
            
          },
          "cta": {
            "link": "swiggy://menu?restaurant_id=634685&source=collection&query=Pizza",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
          },
          "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
        },
        "relevance": {
          "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
          "sectionId": "MENU_RETURN_FOOD"
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "657064",
            "name": "Pizza House",
            "cloudinaryImageId": "3ee64301e4597d01c1e1c90f001f15d2",
            "locality": "AM Road, Sulthangunta",
            "areaName": "Shivaji Nagar",
            "costForTwo": "₹400 for two",
            "cuisines": [
              "Pizzas"
            ],
            "avgRating": 3.9,
            "parentId": "7782",
            "avgRatingString": "3.9",
            "totalRatingsString": "188",
            "sla": {
              "deliveryTime": 47,
              "lastMileTravel": 3,
              "serviceability": "SERVICEABLE",
              "slaString": "45-50 mins",
              "lastMileTravelString": "3.0 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-09-14 00:00:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "textBased": {
                  
                },
                "imageBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "10% OFF",
              "subHeader": "ABOVE ₹1900",
              "discountTag": "FLAT DEAL"
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
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
          },
          "analytics": {
            
          },
          "cta": {
            "link": "swiggy://menu?restaurant_id=657064&source=collection&query=Pizza",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
          },
          "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
        },
        "relevance": {
          "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
          "sectionId": "MENU_RETURN_FOOD"
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "712380",
            "name": "Chicago Pizza",
            "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/8/29/18684f56-f78b-4eea-b004-fab9f4d8d077_b2c1a158-bedf-432e-847f-20944aa917a1.jpg",
            "locality": "khb colony",
            "areaName": "Koramangala",
            "costForTwo": "₹500 for two",
            "cuisines": [
              "Pizzas",
              "Fast Food",
              "Italian"
            ],
            "avgRating": 4.1,
            "parentId": "60277",
            "avgRatingString": "4.1",
            "totalRatingsString": "378",
            "promoted": true,
            "adTrackingId": "cid=18047479~p=11~adgrpid=18047479#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=712380~eid=bab844fb-31b9-4e58-ae91-4bf251c19521~srvts=1725734515717~collid=83631",
            "sla": {
              "deliveryTime": 38,
              "lastMileTravel": 6.7,
              "serviceability": "SERVICEABLE",
              "slaString": "35-40 mins",
              "lastMileTravelString": "6.7 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-09-08 01:00:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textExtendedBadges": {
                  
                },
                "textBased": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "₹125 OFF",
              "subHeader": "ABOVE ₹499",
              "discountTag": "FLAT DEAL"
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
                "rating": "4.6",
                "ratingCount": "231"
              },
              "source": "GOOGLE",
              "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
          },
          "analytics": {
            
          },
          "cta": {
            "link": "swiggy://menu?restaurant_id=712380&source=collection&query=Pizza",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
          },
          "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
        },
        "relevance": {
          "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
          "sectionId": "MENU_RETURN_FOOD"
        }
      }
    }
]
 

const Body=()=>{
   return(
      <div className="body">
         <div className="search">Search</div>
            <div className="restaurant-container">
               <RestaurantCard resName="meghnana foods" cuisine="biryani"/>
               <RestaurantCard  resName="KFC" cuisine="chicken"/>
               <RestaurantCard resName="Burger-king" cuisine="burger"/>
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

const root= ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);// this is how react component can be rendered