## MovieHub

MovieHub is a movie database web application built using React. It allows users to search for movies and view a list of search results.

### Features

- Search for movies by title.
- View a list of search results.
- Responsive design for seamless use across devices.

### Deployment

MovieHub is deployed and can be accessed at [movie-hub-wine-three.vercel.app](https://movie-hub-wine-three.vercel.app/).

### Technologies Used

- React
- Axios for making HTTP requests
- Tailwind CSS for styling
- OMDb API for fetching movie data

### Usage

- Enter a movie title in the search bar and press Enter or click the search button to search for movies.
- View the list of movies returned by the search.
- Click on the "MovieHub" title to reset the search and return to the home page.

### OMDb API

MovieHub uses the [OMDb API](https://www.omdbapi.com/) to fetch movie data. You will need to sign up for an API key on the OMDb website and add it to your `.env` file.

#### Example API Request

An example API request to fetch movies by title looks like this:
```
https://www.omdbapi.com?apikey=your_omdb_api_key&s='superman'
```

### License

This project is licensed under the [Apache License 2.0](LICENSE). Feel free to use and modify this project for your own purposes.