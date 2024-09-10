# Goal TRKR
A simple goal tracking app that allows users to set, track, and manage their goals.

Backend built with Flask & SQLAlchemy in python. 
Frontend built in React with Javascript and Vite

![View All](screencaps/view all.png)

## Features
Users can:
- Add goals to the tracker. Each goal has a title and an optional description
- View goals
- Filter goals based on Status types
- Update the status of any goal
- Delete Goals
- Toggle between dark and light mode

Other:
- Data Quality: 
  - Form validation on the Frontend / field constaints on the Backend
  - Drop down picker for Status ensures only 3 settings are ever used
- Readability: 
  - Goal Status types are color coded in order to quickly get a sense overall goal progress
  -  Titles are always visible, while hovering over a Goal will reveal the Description. A simple layout helps to make the data easily understantable without losing detail.

## Getting up and running
If you'd like to get TRKR up and running locally, start by cloning this repo.

Install dependencies:

```
$ pipenv install
$ pipenv shell
$ npm install --prefix client
```

Run the Flask API on [`localhost:5555`](http://localhost:5555):

```
$ python server/app.py
```

Run the React app on [`localhost:5173`](http://localhost:5173) by
running:

```
$ npm run dev --prefix client
```

