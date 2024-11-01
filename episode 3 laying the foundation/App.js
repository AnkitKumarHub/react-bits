import React from "react";
import ReactDOM from "react-dom/client";

//  React.createElement => React elements (JS Object) => When we render this to DOM =>then it becomes an HTML element

//* WITHOUT JSX

// const heading = React.createElement(
//     "h1",
//     {id : "heading"},
//     "Namastey React"
// );

//  const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);    // and when we do root.render the ReactDOM (library) takes this object and converts into html element and push(means it will replace everything inside the root) it to the browser

/**-------------------------------------------------------------------------- */

/**
 * ~ EARLIER => skeleton of website : html
 * ~         => LOGIC : JS
 *
 * ^ JSX => A WAY TO MERGE BOTH OF THEM
 *
 * //* JSX => JS SYNTAX which is easier to create React Elements
 *
 * //* JSX IS NOT A PART OF REACT => IT JUST MAKES CREATING REACT ELEMENTS EASY
 *
//  * //JSX is not html inside javascript   "JSX is HTML-Like or XML-Like syntax"
 *
 * ^ This is not a javascript => js engine will not be able to understand JSX its only understand EC6(echma Script)
 *
 * ? Then how is it working => PARCEL is doing it {PARCEL just gives it to babel(babel just take jsx and transpile it to language which browser understands)}
 *
 * ~ the code is first transpiled by parcel(BABEL) and then js engine recieves the code that browsers can understand
 *
 */

//? WITH JSX

// JSX => React.createElement(Babel) => ReactElement - (JS Object) => HTML Element(render)
const jsxHeading1 = (
  <h1 id="heading" className="head" tabIndex="1">
    Namaste React using JSX🚀
  </h1>
);
// in JSX => camel case is used and there're slight difference in attributes

//~ If we want to write multiline JSX => wrap it in brackets to understand where the jsx is starting and ending

const jsxHeading2 = (
  <h1 id="heading" className="head" tabIndex="1">
    Namaste React using JSX
  </h1>
);

console.log(jsxHeading2); //* similar output as console.log(heading) => OBJECT

//~ JSX is not html in JS => it is HTML like syntax in JS or XML like syntax

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading1);

//^ REACT COMPONENTS (everything is component in react) => TWO TYPES:
// Class Based Components - OLD way of writing components => uses JS classes
// Functional Components - NEW way of writing components => uses JS functions

//^ REACT FUNCTIONAL COMPONENTS  => a normal function that returns some jsx code or return react element
// Always name a component with a capital letter => otherwise react won't know that it is a component

const HeadingComponent = () => {
  return <h1>Namastey REACT FUNCTIONAL COMPONENT</h1>;
};

//FOR ONE LINE WE COULD ALSO REMOVE RETURN
// const HeadingComponent = () =>  <h1>Namastey REACT FUNCTIONAL COMPONENT</h1>;

const MultipleTagComponent = () => (
  <div>
    <h1>Namastey REACT FUNCTIONAL COMPONENT</h1>
  </div>
);

//? RENDERING FUNCTIONAL COMPONENTS
// root.render(<HeadingComponent />);
// root.render(<MultipleTagComponent />);

//?RENDERING ONE COMPONENT INSIDE ANOTHER => "COMPONENT COMPOSITION"
const Title = () => <h1 className="head">TITLE COMPONENT</h1>;

const HeadingComponent2 = () => (
  <div id="container">
    <Title />
    <h1 className="heading">heading component</h1>
  </div>
);

console.log(HeadingComponent2);

// root.render(<HeadingComponent2 />);

//! ------- depreciated method Don't use ------------
//? without the use of arrow function
// const MainTitle = function () {
//     return (
//         <h1 className="head"> Another way of functional component  </h1>
//     )
// }

// root.render(<MainTitle/>)
//!-------------------------------------------------------

// inside the jsx using the curly braces you can write the javscript expression/code  inside it
const HeadingComponent3 = () => (
  <div id="container">
    <h2> {100 + 200} </h2>
    <h1 className="heading">heading component</h1>
  </div>
);

//? how can we put react element inside the react component

//* first how you can put react elem inside react element
const elem = <span>react element </span>;

const title = (
  <h1 className="main">
    {elem}
    Namste react
  </h1>
);

const HeadingComponent4 = () => (
  <div id="container">
    {title}
    <h1 className="heading">Namste react functional Components </h1>
  </div>
);

root.render(<HeadingComponent4 />);

//! cross site scripting attack assuming when some api send the malicious data or javascript injectable code when we are executing the javascript code but jsx take care of this by sanitising the javascript code and prevent the cross site attack
