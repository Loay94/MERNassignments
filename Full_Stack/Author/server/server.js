const express = require("express")
const cors = require("cors");
const app = express()
const port = 8000;
require("./config/mongoose.config");
app.use(cors())
app.use(express.json(), express.urlencoded({ extended: true }));
require("./routers/author.routes")(app);
app.listen(8000, () => console.log("The server is all fired up on port 8000"));
