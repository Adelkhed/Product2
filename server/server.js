const express = require('express');
const cors= require('cors');
const app = express();
require("./config/mongoose.config.js")
const port =process.env.PORT ;

app.use(express.json(), express.urlencoded({ extended: true }) )
app.use(cors({
    origin: 'https://localhost:3000',
    methods: ['GET', 'POST']
}))

require("./config/mongoose.config")

require("./routes/product.route")(app)

app.listen(port,() => console.log(`the server is fired up on port: 5000 `))