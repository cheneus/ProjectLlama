const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
// Save a reference to the Schema constructor
const Schema = mongoose.Schema

const validateEmail = email => {
  const re = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
  return re.test(email)
};
// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
const UserSchema = new Schema({
  // `title` is required and of type String
  name: {
    type: String,
    required: false
  },
  // `link` is required and of type String
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: 'Email address is required',
    validate: [validateEmail, 'Please fill a valid email address'],
    match: [
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      'Please fill a valid email address'
    ]
  },
  password: { 
		type: String, unique: false, required: false 
	},
  google: {
    googleId: { type: String, required: false }
  }
})

// Define schema methods
UserSchema.methods = {
  // checkPassword: function(inputPassword) {
  // 	return bcrypt.compareSync(inputPassword, this.local.password)
  // },
  checkPassword: function(inputPassword, callback) {
    console.log('callback')
    bcrypt.compare(inputPassword, this.password, (err, isMatch) => {
      if (err) return callback(err)
      console.log('isMatch is doned')
      callback(null, isMatch)
    })
  },
  hashPassword: plainTextPassword => {
    return bcrypt.hashSync(plainTextPassword, 10)
  }
}

// Define hooks for pre-saving
UserSchema.pre('save', function(next) {
  if (!this.password) {
    console.log('=======NO PASSWORD PROVIDED=======')
    next()
  } else {
    this.password = this.hashPassword(this.password)
    next()
  }
  // this.password = this.hashPassword(this.password)
  // next()
})

// This creates our model from the above schema, using mongoose's model method
const User = mongoose.model('user', UserSchema)

// Export the Article model
module.exports = User
