const express = require("express");
const path = require("path")
const router = express.Router();
const weatherControllers = require("../controllers/weather");
const myDate = new Date();
let date = myDate.getUTCDate();
let day = myDate.getUTCDay();
let month = myDate.getUTCMonth();
if(day == 0){
    day = 'Sunday'
}else if(day == 1){
    day = 'Monday'
}else if(day == 2){
    day = 'Tuesday'
}else if(day == 3){
    day = 'Wednesday'
}else if(day == 4){
    day = 'Thursday'
}else if(day == 5){
    day = 'Friday'
}else if(day == 6){
    day = 'Saturday'
}

if(month == 0){
    month = 'January'
}else if(month == 1){
    month = 'February'
}else if(month == 2){
    month = 'March'
}else if(month == 3){
    month = 'April'
}else if(month == 4){
    month = 'May'
}else if(month == 5){
    month = 'June'
}else if(month == 6){
    month = 'July'
}else if(month == 7){
    month = 'August'
}else if(month == 8){
    month = 'September'
}else if(month == 9){
    month = 'October'
}else if(month == 10){
    month = 'November'
}else if(month == 11){
    month = 'December'
}

//home page
router.get('/', (req, res, next) => {
    res.render('home', {
        pageTitle: 'BlueSky',
        path: '/'
    });
});

//about section
router.get('/about', (req, res, next) => {
    res.render('about', {
        pageTitle: 'About',
        path: '/about'
    });
});

//weather section
router.get('/weather', (req, res, next) => {
    res.render('weather', {
        pageTitle: 'Weather',
        Date: date,
        Month: month,
        Day: day,     
        content: false,
        temprature: null,
        cityName: null,
        country:null,
        condition: null,
        status: 'Get Output here' 
    });
});

router.post('/weather', weatherControllers.getWeather);

module.exports = router;