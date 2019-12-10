# At the Wellness Network
Website for At the Wellness Network company. https://wellnessnetwork.herokuapp.com/

## Tech Stack
NodeJS, Express, Mongodb, JWT.\
React with Hooks and Redux for state management.\
CSS3 for styling.

## Main features implemented
Live audio streaming of station content from the landing page.\
Secure user signup and login.\
File upload to AWS S3 bucket.\
Stripe payment.\
Appointment Scheduling with Calendly.



## List of libraries used:
calendly\
enformed.io\
bcryptjs\
concurrently\
express-validator\
jsonwebtoken\
mongo-sanitize\
nodemailer\
react-s3\
Stripe\
uuid\
axios\
react-redux\
react-reveal\
react-scroll\
react-toastify\
redux

## Running the project
To run project locally:
```javascript
npm run dev
```
For deployment:
```javascript
npm run heroku-postbuild
```

## Env Variables and API Keys:
Mongodb uri is in production.json file in config folder.\
All other env variables are added in heroku as config variables.


## Contributing
clone, run npm i, both on root and client.
For new feature, create new branch on local, and push new branch, wait until pull request gets approved. Do not approve your own pull request. Always pull from master before pushing branch to prevent any merge conflict.


