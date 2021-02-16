const mongoose = require("mongoose");
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    firstName: {
      type: String,
      required: [true, "First name is required"]
    },
    lastName: {
      type: String,
      required: [true, "Last name is required"]
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      validate: {
        validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
        message: "Please enter a valid email"
      }
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [8, "Password must be 8 characters or longer"]
    },
    country: {
        type: String,
        required: [true, "Last name is required"]
      },
    books : [{ type: mongoose.Schema.Types.ObjectId, ref: 'Book' }]
  }, {timestamps: true});

  const BookSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, "Name of the Book is required"]
      },

      fans: [{ type: Number, ref: 'User' }]
  })


UserSchema.pre('save', function(next) {
  bcrypt.hash(this.password, 10)
  .then(hash => {
      this.password = hash;
      next();
  });
});
const User = mongoose.model("User", UserSchema);
const Book = mongoose.model("Book", BookSchema);
module.exports = {User , Book};

