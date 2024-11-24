import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
  // console.log(props);
  const { resData } = props;

  let {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    sla: { deliveryTime },
  } = resData?.info;
  

  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt=""
        src={CDN_URL + cloudinaryImageId}
      ></img>
      <h3>{name}</h3>
      <p>{cuisines.join(", ")}</p>
      <span>{avgRating} Stars</span> &nbsp; &nbsp;
      <span>{deliveryTime}min</span>
      <p>{costForTwo}</p>
    </div>
  );
};

export default RestaurantCard;
