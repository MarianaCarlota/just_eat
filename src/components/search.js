import React, { useState, useEffect } from 'react';
import RestaurantsList from "./restaurantsList";

const Search = () => {
  const [postcode, setPostcode] = useState('');
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetch(`/bypostcode/${postcode}`) // For real production this url must be replaced by https://uk.api.just-eat.io/restaurants/bypostcode/${postcode}
      .then(response => {
        if(!response.ok) {
          throw Error('could not fetch the data');
        }
        return response.json();
      })
      .then(data => {
        console.log(data.Restaurants);
        const openRestaurants = data.Restaurants.filter((restaurant) => restaurant.IsOpenNow);
        setRestaurants(openRestaurants);
      })
  }, [postcode]);

  return (
    <div className="container">
      <h1>FIND THE BEST FOOD NEAR YOU!</h1>
      <p>Type your outcode below:</p>
      <input
          type='text'
          id='postcode'
          value={postcode}
          placeholder="EC4M"
          onChange={(e) => setPostcode(e.target.value.toLowerCase())}
      />

      {restaurants.length > 0 && <RestaurantsList restaurants={restaurants} />}
    </div>
  );
};

export default Search;
