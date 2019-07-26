
# Dad Joke 5000 backend details

# Role of App

The Earth is populated by 7B people, many of whom are lacking in one of life's most basic needs: humor. Fortunately, there's Dad Joke 5000. Who needs books when there's a modern joke database for all of your knee slappin' one-liners? Grab a random joke from the icanhazdadjoke 3rd party API, or sign up to create, read, update, delete, and vote on jokes that are laugh out loud life of the party hits or eyerolling 'don't quit your day job' flops.

- Built using React with JavaScript
- Heavy reliance on Bootstrap for Component visualization
- Uses both Authenticated and Unauthenticated routing
- Integrates with Express API backend, MongoDB database with Mongoose
- Uses 3rd party API for random SHOW

# Frontend Links

- Repo: https://github.com/DaveOrDavid/dj5k
- Deployed Site: https://daveordavid.github.io/dj5k/

# Backend Links

- Repo: https://github.com/DaveOrDavid/dj5k-backend
- Heroku Deployed: https://thawing-beyond-32492.herokuapp.com/

# Planning Process

I wanted to stay in the JavaScript family which is why I chose Express API with MongoDB. I also feel that Rails is easier to set up, yet if you do not follow the Rails steps to the letter it is an issue.  I did not want that for this backend.

# Route Catalog

- Create: router.get('/jokes')
- Read: router.get('/jokes') and router.get('/jokes/:id')
- Update: router.get('/jokes:/id')
- Destroy: router.delete('/jokes/:id')

# Future Development Plans

- I'm considering trying a many to many relationship database - not sure.
- Add more value pairs to the Jokes key (considering tagging)
- Deploy on AWS!

# Instruction Installations for Use

- The backend is Node.js running from Heroku on production, and npm on local - use nodemon to start a localhost.

Routes

# Images


ERD


<img src="src/images/wire1.png" />
