## APP to search for food in the area!

Simple app to search for restaurants within a postcode from UK.
Due to CORS protocol the API used is a mock and not the real one.
In order to  use the real API, on the file search.js, line 10, the argument inside the fetch method must be replaced by `https://uk.api.just-eat.io/restaurants/bypostcode/${postcode}`.
