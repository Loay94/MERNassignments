const PlayerController = require("../controllers/palyer.controller");

module.exports = (app) => {
    app.get("/api/getAllPlayers",PlayerController.findAllPlayers);
    app.post("/api/createPlayer",PlayerController.createPlayer);
    app.delete("/api/delete/:id",PlayerController.deletePlayer);
}