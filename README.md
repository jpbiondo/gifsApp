# GifsApp

This project is a simple gifs searching app. It was made using Angular Framework. Styled with TailwindCSS. It Giphy's API
as the gif's source and displays it on screen. When a search is made, it stores the term searched in the local storage. 
There's a sidebar containing the ten most recent searches.

## Development server

In order to run this app you must:
1. Install dependencies using `npm i`
2. Set up your Giphy API key as an environment variable.
    * Get an API key you must register in [GIPHY Developers](https://developers.giphy.com/).
    * Create a .env file on your project's root folder and put this line with your API key `NG_APP_APIKEY = YOUR_GIPHY_API_KEY`
3. Now run `ng serve` to run the app.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.
