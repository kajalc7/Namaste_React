import React,  {lazy, Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header'
import Body from './components/Body';
import { createBrowserRouter , RouterProvider, Outlet} from 'react-router-dom';
import About from './components/About';
import ContactUs from './components/ContactUs';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';
//import Grocery from './components/Grocery';

//chunking
//lazyloading
//dynamic loading
//loadingONDemand
//code Splitting


//now this take time to load which leads to get error
//as react is very fast and page loading takes time
//so react susepend render so to tackle this issue we need to
//use suspense which is a component which comes from react
const Grocery = lazy(()=>import("./components/Grocery"));


 const AppLayout=()=>{
   return(
      <div className="App">
         <Header/>
         {/*if my path is  =/  */}
         {/* <Body/> */}
         {/*if my path is  =/about  */}
         {/* <About/> */}
         {/*if my path is  =/contactus  */}
         {/* <ContactUs/> */}
         <Outlet/>
      </div>
   )
 }

const appRouter = createBrowserRouter([
   { 
      path:'/',
      element:<AppLayout/>,
      children:[
         {
            path:"/",
            element:<Body/>,
         },
         { 
            path:'/about',
            element:<About/>,
         },
         { 
            path:'/contactus',
            element:<ContactUs/>,
         },
         { 
            path:'/grocery',
            element:<Suspense fallback= {<h1>Grocery is loading</h1>}><Grocery/></Suspense>,//this fallback wil take content which you want to show while your component is loading
         },
         { 
            path:"/restaurants/:resId",//resid this is after colon showing it will hbe dynmaic and keep changing
            element:<RestaurantMenu/>,
         }
      ],
      errorElement:<Error/>
   },
]);

 const root= ReactDOM.createRoot(document.getElementById("root"));


//root.render(<AppLayout/>);// earlier we use to render like this
//after routing configuration
root.render(<RouterProvider router={appRouter} />);