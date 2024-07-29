import Carousal from "./Carousal";
import TopRestaurants from "./TopRestaurants";
import RestaurantCards from "./RestaurantCards";

const Body = () => {
  return (
    <div className="w-3/4 m-auto flex justify-center border-b-2 flex-col">
      <Carousal />
      <div className="border-[1px]"></div>
      <TopRestaurants />
      <div className="border-[1px]"></div>
      <RestaurantCards />
    </div>
  );
};

export default Body;
