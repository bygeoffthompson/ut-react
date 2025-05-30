# Unleashed Technologies HTML Website with React Search 

This project was bootstrapped with `create-react-app`.

## URLs

* Production (aka main)
    * https://unleashed-technologies.com (PlatformSH)
* Staging
    * https://unleashed-technologies.staging.unleashed.tech (PlatformSH)
* Local
    * https://localhost:3000

## Git Branches

* main
* staging

## Platform SH

* Project ID
    * 6oh5otinnsdga

## Requirements

Ensure you have the following installed on your local development machine.

* node v18
* npm v10

## Installation for Local Development

Clone the repo.
```
mkdir ut-react
cd ut-react
git clone git@gitlab.utdev.com:unleashedtech/unleashed-static-website.git .
```

Install dependencies.
```
npm install
````

Start the React app.
```
npm start
````

Your local development site will be found at (http://localhost:3000).

## Helpful Development Commands
Launch the test runner in interactive watch mode.
```
npm test
```

Build the app for production to the `build` folder.
```
npm run build
```

Deploy the app for production via Github Pages.
```
npm run deploy
```

## React Search

This static site's search is handled by React which queries a JSON file (`/src/content.json`) containing the search index.
