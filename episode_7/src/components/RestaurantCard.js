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
    <div className="m-4 p-4 w-60 rounded-lg bg-gray-100 hover:bg-gray-200" >
      <img
        className="rounded-lg"
        alt=""
        src={CDN_URL + cloudinaryImageId}
      ></img>
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <p>{cuisines.join(", ")}</p>
      <span>{avgRating} Stars</span> &nbsp; &nbsp;
      <span>{deliveryTime}min</span>
      <p>{costForTwo}</p>
    </div>
  );
};

export default RestaurantCard;
