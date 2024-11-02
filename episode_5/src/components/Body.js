import RestaurantCard from "./restaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  // Local state variable - super powerful variable - it maintains the state of the component
  const [listOfRestaurants, setlistOfRestaurants] = useState(resList);

  //Normal JS variable
  let listofRestaurantsJS = [
    {
      info: {
        id: "201862",
        name: "Sub King",
        cloudinaryImageId: "wk4ukgoluocm6t3pvkhu",
        costForTwo: "₹300 for two",
        cuisines: ["American"],
        avgRating: 4.3,
        sla: {
          deliveryTime: 21,
        },
      },
    },
    {
      info: {
        id: "201863",
        name: "Burger King",
        cloudinaryImageId: "wk4ukgoluocm6t3pvkhu",
        costForTwo: "₹300 for two",
        cuisines: ["American", "Indian"],
        avgRating: 3.3,
        sla: {
          deliveryTime: 21,
        },
      },
    },
    {
      info: {
        id: "201864",
        name: "Maharaja King",
        cloudinaryImageId: "wk4ukgoluocm6t3pvkhu",
        costForTwo: "₹300 for two",
        cuisines: ["American", "Indian", "punjabi"],
        avgRating: 4.8,
        sla: {
          deliveryTime: 21,
        },
      },
    },
  ];

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            console.log(filteredList);
            setlistOfRestaurants(filteredList);
            // console.log(listofRestaurants);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="rest-container">
        {listOfRestaurants.length > 0 ? (
          listOfRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          ))
        ) : (
          <p>No restaurants available with the specified rating criteria.</p>
        )}
      </div>
    </div>
  );
};

export default Body;





