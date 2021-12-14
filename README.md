# Routinely

Routinely is a health and productivity app developed using the mern stack

- MongoDB
- Express
- React
- Node

## Backend

`express-validator` is used to handle the validation of api endpoint requests

`jsonwebtoken` and `bcryptjs` are used to handle authentication

`REST Client` vscode extension is used to test endpoints

## Frontend

`fontawesome` is used for icons

`nivo` is used to display charts

`axios` is used to handle api requests

`moment` is used to handle dates

`redux` is used to handle state

## TODO

- Move salt to .env
- When checking if tasks are completed on a given date check if task was created before the date
- Show token expiration error
- Show message on successful password change
- Inputs with type of password rendered with a button to toggle visibility
- Only clear newTask creation input if it is successful
- Updating password | if incorrect old password app logs you out
- Seperate reducer and actions for authentication and changing user data ie. name and password

## Deploy backend to Heroku

1. Be sure to have [Heroku CLI](https://devcenter.heroku.com/articles/heroku-command-line) installed
2. Run the command `heroku login`
3. Create a new app on Heroku dashboard and give it a name
4. Run `heroku git:remote -a <name-of-app>`
5. Run `git subtree push --prefix server/ heroku master` from root project directory
6. Set environment variables
   - Set `MONGO_URI` to `mongodb+srv://<username>:<password>@cluster0.v4olk.gcp.mongodb.net/<database-name>?retryWrites=true&w=majority` and replace angle brackets with the correct credentials and database name
   - Set `JWT_SECRET` to a random string

## Deploy front end to Netlify

1. Add new site from github
2. Configure build settings
   - **Base Directory** `/client`
   - **Build Command** `npm run start`
   - **Publish Directory** `/client/build`
3. Set API baseURL to Heroku app url which is found in `client/src/api/index.js`
