const Users = require('../controllers/book.controller');
const Books = require('../controllers/book.controller');

const { authenticate } = require('../config/jwt.config');
module.exports = app => {
  app.post("/api/register", Users.register);
  app.post("/api/login", Users.login);
  app.post("/api/addbook",Books.createBook);
  app.get("/api/getAllBooks",Books.findAllBooks);

//   app.post("/api/bookToUser/:id")
  // this route now has to be authenticated
//   app.get("/api/users", authenticate, Users.getAll);
}