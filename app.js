const bodyParser = require("body-parser");
const express = require("express");
const { url } = require("inspector");
const app = express();
const path = require("path");
const weatherRoutes = require("./routes/weather");

//for parsing the req to body
app.use(bodyParser.urlencoded({extended: false}))
//for parsing the static files
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', 'views');

const port = process.env.PORT || 3000;

//all the routes
app.use(weatherRoutes);

//404 route
app.get("*", (req, res, next) => {
    res.render('404', {
        pageTitle:'Page Not Found'
    });
})

app.listen(port, () => {
    console.log(`Server started at ${port}`);
});