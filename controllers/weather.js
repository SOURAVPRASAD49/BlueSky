const weather = require("openweather-apis");
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
console.log(month);
weather.setAPPID('ab0a6327b638b92b90fe20a4d7468ba9');

weather.setLang('en');
const getCity = (city) => {
    weather.setCity(city);
}

exports.getWeather = (req, res, next) => {
    if (req.body.city) {
        getCity(req.body.city);
        weather.getAllWeather(function (err, JSONObj) {
            console.log(JSONObj);
            if(JSONObj.cod != 200 || JSONObj == null){
                return res.render('weather',{
                    pageTitle: 'Weather',
                    Date: date,
                    Month: month,
                    Day: day,
                    content: false,
                    status: 'City Not Found'
                });
            }
            res.render('weather', {
                pageTitle: 'Weather',
                Date: date,
                Month: month,
                Day: day,
                content: true,
                temprature: JSONObj.main.temp,
                cityName: JSONObj.name,
                country: JSONObj.sys.country,
                condition: JSONObj.weather[0].main
            });
        })
    }
    else {
        res.redirect('/weather');
    }
}