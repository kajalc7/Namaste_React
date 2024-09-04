const heading = React.createElement("h1",
     {id:"heading"},
    "Hello world from react");

const root =ReactDOM.createRoot(document.getElementById("root"));// all the things we render will always be in root

root.render(heading);//its job to take this heading object and create h1 tag and put it up under root element.

//the above create element heading  so if we do console.log it will return us js object with children and attribute props so
//react.create element just a object
//const heading is not h1 tag

/*console
 <div id="parent">
    <div id="child">
    <h1>"i am h1 tag</h1>
    </div>
 </div>
*/

// const parent=React.createElement(
// "div", 
// {id:"parent"},
// React.createElement("div",{id:"child"},React.createElement("h1",{},"I am h1 tag")
// )
// );
// //const root= reactDOM.createRoot(document.getElementById("root"));
// root.render(parent,heading);//its job to take this heading object and create

/*console
 <div id="parent">
    <div id="child">
    <h1>"i am h1 tag</h1>
    <h2>"i am h1 tag</h2>
    </div>
 </div>
*/
//if you need to provide sibling you have to provide array of children
// const parent=React.createElement(
//     "div", 
//     {id:"parent"},
//     React.createElement("div",{id:"child"},[
//         React.createElement("h1",{},"I am h1 tag"),
//         React.createElement("h2",{},"I am h2 tag")
//     ]
//     )
//     );
/*console
 <div id="parent">
    <div id="child">
    <h1>"i am h1 tag</h1>
    <h2>"i am h1 tag</h2>
    </div>
    <div id="child2">
    <h1>"i am h1 tag</h1>
    <h2>"i am h1 tag</h2>
    </div>
 </div>
*/
//if you need to provide sibling you have to provide array of children
const parent=React.createElement(
    "div", 
    {id:"parent"},
    [
        React.createElement("div",{id:"child"},[
        React.createElement("h1",{},"I am h1 tag"),
        React.createElement("h2",{},"I am h2 tag")]),
        React.createElement("div",{id:"child2"},[
        React.createElement("h1",{},"I am h1 tag"),
        React.createElement("h2",{},"I am h2 tag")])
    ]
    );
    
    //const root= reactDOM.createRoot(document.getElementById("root"));
    root.render(parent);//its job to take this heading object and create
