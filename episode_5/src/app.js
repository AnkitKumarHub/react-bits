import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";


//! ORR (by using the destructuring concept)

// const RestaurantCard = ({ resName, cuisine }) => {
//   return (
//     <div className="res-card">
//       <img
//         className="res-logo"
//         alt=""
//         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ91480wCJVraAtp9ILWn7AZDvURnJKb86CnQ&s"
//       ></img>
//       <h3>{resName}</h3>
//       <span>{cuisine}</span>
//     </div>
//   );
// };


const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
