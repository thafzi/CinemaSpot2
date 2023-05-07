
# CINEMA SPOT  ![cs-Logo](./src/assets/tcslogo.png)

This is a movie search app using TMDB API where users can log in using a username and password. If the user enters the correct username and password (which are "test" for both), they will be redirected to the home page. Otherwise, a validation message will be displayed.

## Technologies Used

The app was built using React with the following tech:

- React Router DOM: For navigating between pages and implementing protected routing
- Debounce: For implementing the debounce feature on the search functionality
- Context API: For managing state across components
- Local Storage: For storing the authentication token
- plain css: For styling and responsive user interface
- Axios: For making HTTP requests to the TMDB API

## Features

- Login functionality: Users can enter their username and password to log in, and if they are authenticated, they will be redirected to the home page.
- Validation message: If the user enters an incorrect username or password, a validation message will be displayed.
- Dark mode switch: A button to switch between light and dark mode has been included on the home page.
- Log out button: Users can log out of the app by clicking on the log out button on the home page.
- Movie list with search: The home page displays a list of movies and a search box that allows users to filter the list. The search box has a debounce feature that delays the search until the user has finished typing.
- If the user is  not authenticated and trying to go to home page direct with url redirect to login page

## Implementation Details

### Log In

The app checks the entered credentials against the hardcoded values in the `AuthContext` component. If the values match, the authentication token is stored in the local storage, the `isAuth` state is set to `true`, and the user is redirected to the home page. Otherwise, an error message is displayed to the user.

![cs-login](./src/assets/CINEMASPOT_LOGIN.png)

### Protected Routing

React Router DOM is used to implement protected routing. For a user to access the home page, they must be logged in. If the user is not logged in, they will be redirected to the login page.

### Movie List

The list of movies is defined in the `HomePage` component and fetching from TMDB(The Movie Database). The search functionality is implemented using the `debounce` function.

The list of movies is retrieved from the TMDB API using Axios. The `getMovieList` function in the `HomePage` component makes an HTTP request to the API and retrieves the data. This data is saved in a state `movieList` and itrate using map function. The search functionality is implemented using the debounce function from the Lodash Debounce library.

![cs-home](./src/assets/CINEMASPOT_HOME.png)

### Context API

The context API is used to manage state across components. The `isAuth` state and `login` `logOut` function is stored in the `AuthContext` and used to control what components are shown based on whether the user is logged in or not.

### Local Storage

The authentication token is stored in the local storage once the user is authenticated. This token is then used to maintain the user's session and keep the user logged in across page refreshes.

### Responsive Design

The application is designed to be responsive and work well on different devices. This is achieved using the media query.

## How to Run

### Install Dependencies

Run `npm install` to install the app's dependencies.

### Start the App

Run `npm start` to start the app. The app will be served at `http://localhost:3000`.
