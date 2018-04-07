const express = require('express')
const bodyParser = require('body-parser')
const logger = require('morgan')
const mongoose = require('mongoose')
const passport = require('./passport')
const cookieParser = require('cookie-parser');
const path = require('path')

// env config
const env = process.env.NODE_ENV || 'development'
const PORT = process.env.PORT || 5000

// Initialize Express
const app = express()
const profileRouter = require('./route/profileRouter')
const authRouter = require('./route/authRouter')

// passport Strategy
const localSignupStrategy = require('./passport/local-signup');
const localLoginStrategy = require('./passport/local-login');
// const localStrategy = require('./passport/localStrategy')
// Use morgan logger for logging requests
app.use(logger('dev'))
// Use body-parser for handling form submissions
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cookieParser());
// Use express.static to serve the public folder as a static directory
// app.use(express.static("public/js"));
if (process.env.NODE_ENV === 'production') {
	const path = require('path')
	console.log('YOU ARE IN THE PRODUCTION ENV')
	app.use(express.static(path.join(__dirname, '../client/build')))
	app.use('/static', express.static(path.join(__dirname, '../build/static')))
	app.get('/', (req, res) => {
		res.sendFile(path.join(__dirname, '../build/'))
	})
} else {
	app.use(express.static('client/public'))
}
app.use(express.static('public'))

// database
const connection = process.env.MONGODB_URI || 'mongodb://localhost/travel'

mongoose.connect(connection, { useMongoClient: true },
	(err) => {
		if (err) throw err
	})

// Configure middleware
// ===== Passport ====
app.use(passport.initialize())
app.use(passport.session())

// passport.use('local-signup', localSignupStrategy);
// passport.use('local-login', localLoginStrategy);
// passport.use('local', localStrategy);

// pass the authenticaion checker middleware
const authCheckMiddleware = require('./middleware/auth-check');
app.use('/api', authCheckMiddleware);

app.use('/profile', profileRouter)
app.use('/auth', authRouter)

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.listen(PORT, () => {
	console.log(`Server running on port ${env} , ${PORT}`)
})
