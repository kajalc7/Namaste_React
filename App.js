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
   const{resName,cuisine}=props;
   return(
      <div className="Res-card" style={stylecard}>
         <img
          className="res-logo"
          alt="res-logo"
         src="https://b.zmtcdn.com/data/pictures/chains/1/50691/0435a03f4d2017a0a64d90b279c2fa63.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A"/>
         <h3>{resName}</h3>
         <h4>{cuisine}</h4>
         <h4>4.4 stars</h4>
         <h4>38 min</h4>
      </div>
   )
}


 

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