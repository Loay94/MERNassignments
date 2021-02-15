const { model } = require("mongoose");
const User = require("../models/book.model");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');


module.exports.register = (req, res) => {
    User.create(req.body)
        .then(user => {
            const userToken = jwt.sign({
                id: user._id
            }, process.env.SECRET_KEY);

        res.cookie("usertoken", userToken, "secret", {
            httpOnly: true
        })
        res.json({ msg: "success!", user: user });
    })
        .catch(err => res.json(err));
  }

module.exports.login= async(req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if(user === null) {
        // email not found in users collection
        return res.json("helllow");
    }
    // if we made it this far, we found a user with this email address
    // let's compare the supplied password to the hashed password in the database
    const correctPassword = await bcrypt.compare(req.body.password, user.password);
    // if(!correctPassword) {
    //     // password wasn't a match!
    //     return res.json("loay");
    // }
    // if we made it this far, the password was correct
    const userToken = jwt.sign({
        id: user._id
    }, process.env.SECRET_KEY);
    // note that the response object allows chained calls to cookie and json
    
    res.cookie("usertoken", userToken, "secret", {
        httpOnly: true
        })
    res.json({ msg: "success!", id: user.password , ids: req.body.password});
}
module.exports.logout = (req, res) => {
    res.clearCookie('usertoken');
    res.sendStatus(200);
}