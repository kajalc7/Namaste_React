import React from 'react';
import ReactDOM from 'react-dom/client';

//React element

//React.createElment==>Object=>HTml element render

// const heading = React.createElement(
//    "h1",
//    {id: "heading"},
//     "Namste React from Kajal");
// console.log(heading);//will return an object

//H1 tag using JSX
//JSX is not HTML in JS it is htMl like syntax
//JSx(transpiled before it reaches the JS) Parcel-Babel

//JSX=>Babel transpiled it to  React.createElment==>React element as JS Object=>HTml element render(which is same as above)
// const jsxheading = <h1 className="head">Namaste React from react element 🚀 </h1>;

const heading2 = <p>React from react element inside another react element</p>;
const jsxheading = (
      <h1 className="head">
         Namaste React from react element 🚀 
         {heading2}</h1>
);

//console.log(jsxheading);//will return an object

// React Functional Component

// const HeadingComponent0 = () => {
//    return <h1>Namste react functional component</h1>//u can skip return if single statemnt is there
// };

const HeadingComponent = () => (
   <div id="container">
      <h1 className="heading">Namaste react functional component</h1> 
   </div>   
);

//component composition i.e rendering two component to root and react component can be placed in 3 diff way
const HeadingComponentnew = () => (
   <div id="container">
      {HeadingComponent()}
      <HeadingComponent></HeadingComponent>
      <HeadingComponent />
      {jsxheading}
      <h1 className="heading">Namaste react rendering two functional component</h1> 
   </div>   
);


// const HeadingComponent3 = () => <h1>Namste react functional component</h1>;//all statement are same


 
const root= ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsxheading);
root.render(<HeadingComponentnew/>);// this is how react component can be rendered