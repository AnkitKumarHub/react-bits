import React from "react";
import ReactDOM from "react-dom/client";

//==========  HELLO WORLD IN REACT  ====================//
//React.createElement("which tag to create", {an object where we'll give attributes to our tag}, "what html to put inside the created tag")
const heading = React.createElement(
    "h1", 
    {id: "heading", xyz: "abc"}, 
    "Hello World from React"
);

// console.log(heading);//returns an object => React element
//props => content and attributes of tag 

//We need to put this h1 tag onto our DOM {onto our browser} => create root where h1 is rendered
const root = ReactDOM.createRoot(document.getElementById("root"));
// everything in react will be rendered inside this root 

root.render(heading);
//this render method will take the heading object => create h1 tag and put it on DOM

//======================================================//
/**
 * CREATING DOM STRUCTURE IN REACT{children}
 * 
 * <div id = "parent">
 *      <div id = "child">
 *          <h1> I'M H1 TAG </h1>
 *      </div>
 * </div>
 * 
 * 
 * 
 */

const parent1 = React.createElement(
    "div",
    { id: "parent"},
    React.createElement(
        "div",
        {id: "child"}, 
        React.createElement("h1", {}, "I'M H1 TAG")
    )
)

// root.render(parent1);
// console.log(parent1);

//======================================================//
/**
 * CREATING DOM STRUCTURE IN REACT{siblings}
 * 
 * <div id = "parent">
 *      <div id = "child">
 *          <h1> I'M H1 TAG </h1>
 *          <h2> I,M h2 tag </h2>
 *      </div>
 * </div>
 * 
 */

const parent2 = React.createElement(
    "div",
    { id: "parent"},
    React.createElement(
        "div",
        {id: "child"}, 
        [//ARRAY OF Content
            React.createElement("h1", {}, "I'M H1 TAG"), React.createElement("h2", {}, "I'M H2 TAG")
        ]
    )
)

// root.render(parent2);
// console.log(parent2);

//!!!!!!!!!!---- IT THROWS AN ERROR☝----!!!!!!!!!!!! 

//======================================================//
/**
 * CREATING DOM STRUCTURE IN REACT{more than one child}
 * 
 * <div id = "parent">
 *      <div id = "child">
 *          <h1> I'M H1 TAG </h1>
 *          <h2> I,M h2 tag </h2>
 *      </div>
 *      <div id = "child2">
 *          <h1> I'M H1 TAG </h1>
 *          <h2> I,M h2 tag </h2>
 *      </div>
 * </div>
 * 
 */

const parent3 = React.createElement(
    "div",
    { id: "parent"},
    [
        React.createElement("div", {id: "child"}, 
            [//ARRAY OF CHILDREN
                React.createElement("h1", {}, "I'M H1 TAG"), React.createElement("h2", {}, "I'M H2 TAG")
            ]
        ),
        React.createElement("div", {id: "child2"}, 
            [//ARRAY OF CHILDREN
                React.createElement("h1", {}, "I'M H1 TAG"), React.createElement("h2", {}, "I'M H2 TAG")
            ]
        )
    ]

)

// root.render(parent3);
// console.log(parent3);

//!!!!!!!!!!---- IT LOOKS TOO UGLY☝----!!!!!!!!!

// THIS IS WHY SOMETHING KNOWN AS JSX EXISTS😉


