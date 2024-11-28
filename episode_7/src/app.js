import React,{lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
// import Grocery from "./components/Grocery";

const Grocery = lazy(()=> import("./components/Grocery"))   // lazy loading 

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
      <Outlet/>
    </div>
  );
};


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    children: [
      {
        path: "/",
        element: <Body/>,
      },
      {
        path: "/about",
        element: <About/>,
      },
      {
        path: "/contact",
        element: <Contact/>,
      },
      {
        path: "/grocery",
        element: <Suspense fallback={<h1>Loading.....</h1>}><Grocery/></Suspense> ,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu/>,
      },
    ],
    errorElement: <Error/>,
  },
])

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter}/>);
