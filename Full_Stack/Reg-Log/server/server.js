const express = require("express")
const cors = require("cors");
require('dotenv').config();
const cookieParser = require('cookie-parser');


const app = express()
const port = 8000;
app.use(cookieParser());

// Change the app.use(cors()) to the one below
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
require("./config/mongoose.config");
app.use(express.json(), express.urlencoded({ extended: true }));
require("./routes/book.routes")(app);
app.listen(8000, () => console.log("The server is all fired up on port 8000"));
