import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header'
import Body from './components/Body';

const root= ReactDOM.createRoot(document.getElementById("root"));


 const AppLayout=()=>{
   return(
      <div className="App">
         <Header/>
         <Body/>
      </div>
   )
 }


root.render(<AppLayout/>);// this is how react component can be rendered