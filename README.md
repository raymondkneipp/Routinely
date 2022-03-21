# Routinely

> Routinely is a health and productivity app.

[Routinely Website](https://getroutinely.netlify.app/)

## The Stack

- MongoDB
- Express
- React
- Node

## Backend

`express-validator` is used to handle endpoint validation

`jsonwebtoken` and `bcryptjs` are used to handle authentication

`REST Client` is the Visual Studio Code extension used to test endpoints

## Frontend

`fontawesome` is used for icons

`nivo` is used to display charts

`axios` is used to handle api requests

`moment` is used to handle dates

`redux` is used to handle state

## Run locally

1. Navigate to `server/`
2. Create a `.env` file with the following variables

```
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.v4olk.gcp.mongodb.net/<database-name>?retryWrites=true&w=majority

JWT_SECRET=thisisasecret
```

3. Change the content in the angle brackets
4. Run `npm install`
5. Run `npm run dev`
6. In a new terminal navigate to `client/`
7. Run `npm install`
8. Uncomment line 2 and comment line 3 of `client/src/api/index.js` to change the api url to localhost
9. Run `npm run start`

## Deployment

### Deploy backend to Heroku

1. Be sure to have [Heroku CLI](https://devcenter.heroku.com/articles/heroku-command-line) installed
2. Run the command `heroku login`
3. Create a new app on Heroku dashboard and give it a name
4. Run `heroku git:remote -a <name-of-app>`
5. Run `git subtree push --prefix server/ heroku master` from the root project directory
6. Set environment variables
   - Set `MONGO_URI` to `mongodb+srv://<username>:<password>@cluster0.v4olk.gcp.mongodb.net/<database-name>?retryWrites=true&w=majority` and replace angle brackets with the correct credentials and database name
   - Set `JWT_SECRET` to a random string

### Deploy front end to Netlify

1. Add new site from github
2. Configure build settings
   - **Base Directory** `/client`
   - **Build Command** `npm run start`
   - **Publish Directory** `/client/build`
3. Set API baseURL to Heroku app url which is found in `client/src/api/index.js`

## TODO

- When checking if tasks are completed on a given date check if task was created before the date
- Show token expiration error
- Show message on successful password change
- Inputs with type of password rendered with a button to toggle visibility
- Only clear newTask creation input if it is successful
- Separate reducer and actions for authentication and changing user data ie. name and password
- Add twin.macro
- Create a custom chart for water
- Weight Tracker
- Sleep Tracker
	- With features like sleep cycle
- Breathing Exercises
- Meal Planner
- Training Log
- Cardio Log
- Meditation Guide
- Daily Graditude
  - Add to daily journal
  - "What am I grateful for today?"
  - Daily prompts
- Intermittent Fasting
- Mood Tracker
  - Good, Okay, Bad
  - Option to add note about the day
  - Keep notes on how you feel throughout the day
- Dynamic stretches (warm up)
- Static stretches (cool down)
- Move get requests to App.js so they run once rather than every time you visit the page
- Typescript?
- Improve navigation for mobile
- Finish home page
- addWater remove date and make it default in the mongoose schema
- JWT refresh token
- Create widget component for all
- Move button, input, textarea, etc. into Form folder
- Create error component (replace input error and test login alert)
- Daily Tasks Features
  - Time input (alert user at time)
  - Order tasks
  - Frequency (weekly, on these days, etc.)
- Update water functionality
- Redirect authed users from landing page
- Upgrade tailwindcss v3
- Calendars week format
- Caffeine trackers
- Lazy time, Relax time, etc.
  - Spend a little bit of time everyday on yourself
  - Do something you enjoy
  - Be lazy but not too lazy
