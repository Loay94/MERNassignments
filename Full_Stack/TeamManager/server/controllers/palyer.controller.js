const { model } = require("mongoose");
const Player = require("../models/player.model");

module.exports.findAllPlayers = (request , response) =>{
    Player.find()
    .then(allPlayers => response.json(allPlayers))
    .catch(err => response.json(err))
};
module.exports.createPlayer = ( request , response )=>{
    Player.create(request.body)
    .then(player => response.json(player))
    .catch(err => response.status(400).json(err))
};
module.exports.deletePlayer = ( request , response ) => {
    Player.deleteOne({_id:request.params.id })
    .then(deleteConfirmation =>response.json({deleteConfirmation :"done"}))
    .catch(err => response.json(err))
};
