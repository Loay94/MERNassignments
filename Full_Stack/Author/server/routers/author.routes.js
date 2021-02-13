const AuthorController = require("../controllers/author.controller");

module.exports = (app) => {
    app.get("/api/getAllAuthors",AuthorController.findAllAuthor);
    app.post("/api/createNewAuthor",AuthorController.createAuthor);
    app.get("/api/getAuthor/:id",AuthorController.findAuthor);
    app.put("/api/update/:id",AuthorController.updateAuthor);
    app.delete("/api/delete/:id",AuthorController.deleteAuthor);
}