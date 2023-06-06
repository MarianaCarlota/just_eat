const RestaurantsList = ({ restaurants }) => {
  return (
    <div>
      <h3>{restaurants.length > 0 ? `We have found ${restaurants.length} restaurants open now in your area`: "No restaurants were found in your area"}</h3>
      <div className="restaurants">
        <div>
          {restaurants.length > 0 ? restaurants.map((restaurant) => (
            <div className="card" key={restaurant.Id}>
              <div className="restaurant-name">
                <div>
                  <h2>{restaurant.Name}</h2>
                  <h4>rating: {restaurant.RatingStars} /5</h4>
                </div>
                <img src={restaurant.LogoUrl} alt="logo" />
              </div>
              <div className="cuisine-types">
                {restaurant.CuisineTypes.length > 0 && restaurant.CuisineTypes.map(cuisine => (
                  <button>{cuisine.Name}</button>
                ))}
              </div>
            </div>
          )) : ""}
        </div>
      </div>
    </div>
   )
}

export default RestaurantsList;
