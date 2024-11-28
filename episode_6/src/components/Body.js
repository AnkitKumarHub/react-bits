import RestaurantCard from "./restaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  // Local state variable - super powerful variable - it maintains the state of the component

  const [listOfRestaurants, setlistOfRestaurants] = useState([]);

  const [filteredRestaurant, setfilteredRestaurant] = useState([]);

  const[searchText, setsearchText] = useState("")

  //whenever state variable update, react triggers a reconciliation cycle (re-renders the component)
  // console.log("Body Rendered")  //to check that on each word type the body re-renders again and again 

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6139298&lng=77.2088282&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    //optional chaining

    const restaurant = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants

    setlistOfRestaurants(restaurant)
    setfilteredRestaurant(restaurant);
      
  };

  //conditional rendering
  // if(listOfRestaurants.length === 0){
  //  or the loading spinner icon 
  //   return <Shimmer/>
  // }

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">

      <div className="filter">

        <div className="search">

          {/* <input type = "text" className="search-box" value = {searchText} /> */
                    //^ in the above code...we have bound the value of input box with searchText => and hence, we cannot type anything as searchText is declared empty above hence, use onChange handler
                  }

          <input
            type="text"
            className="search-box"
            placeholder="search"
            value={searchText}
            onChange={(e)=>{
              setsearchText(e.target.value) //!with every letter being typed => the component gets rendered again => but it is only updating the input box value inside the DOM (DOM Manipulation is very expensive but react is very efficient in doing this)
            }}
          ></input>
          <button className="search-btn" onClick={()=>{
            //filter the restaurant card ans updates the UI
            //searchText

            const filteredRestaurant = listOfRestaurants.filter((res)=>{
              return res.info.name.toLowerCase().includes(searchText.toLowerCase());
            })
            setfilteredRestaurant(filteredRestaurant);
          }}>Search</button>
        </div>
        
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.5
            );
            setlistOfRestaurants(filteredList);
            // console.log(listofRestaurants);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="rest-container">
        {filteredRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
