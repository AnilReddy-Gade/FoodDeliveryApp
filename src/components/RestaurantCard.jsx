import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, avgRating, costForTwo, cuisines, sla } =
    resData?.info || {};
  return (
    <div className="res-card">
      <img
        className="reslogo"
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
      />
      <h3>{name}</h3>
      {/* */}
      <h4>{cuisines?.join(",")}</h4>
      <h4>{avgRating}</h4>
      <h4>{sla?.deliveryTime} Minutes</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};
export default RestaurantCard