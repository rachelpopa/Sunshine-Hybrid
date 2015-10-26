Date.prototype.getJulian = function() {
    return Math.floor((this / 86400000) - (this.getTimezoneOffset()/1440) + 2440587.5);
}

function getDay(time) {
    // The day string for forecast uses the following logic:
    // For today: "Today, June 8"
    // For tomorrow:  "Tomorrow"
    // For the next 5 days: "Wednesday" (just the day name)
    // For all days after that: "Mon Jun 8"
    
    var currentDate = new Date();
    var currentJulianDay = currentDate.getJulian(); 
    
    var forecastDate = new Date(time);
    var forecastJulianDay = forecastDate.getJulian();
    
    // If the date we're building the String for is today's date, the format
    // is "Today, June 24"
    if (forecastJulianDay == currentJulianDay) {
        return "Today " + getFullMonth(forecastDate.getMonth()) + " " + forecastDate.getDate();

    } else if ( forecastJulianDay < currentJulianDay + 7 ) {
        // If the input date is less than a week in the future, just return the day name.
        return getFullWeekDay(forecastDate.getDay());
    } else {
        // Otherwise, use the form "Mon Jun 3"
       return getShortWeekDay(forecastDate.getDay()) + " " + getShortMonth(forecastDate.getMonth()) + " " + forecastDate.getDate();
    }
}

function getFullDate(time) {
    var forecastDate = new Date(time);
    return getShortMonth(forecastDate.getMonth()) + " " + forecastDate.getDate() + ", " + forecastDate.getFullYear();
}

function getFullWeekDay(code) {
    var day = "";
    switch(code) {
                case 0:
                    day = "Sunday";
                    break;
                case 1:
                    day = "Monday";
                    break;
                case 2:
                    day = "Tuesday";
                    break;
                case 3:
                    day = "Wednesday";
                    break;
                case 4:
                    day = "Thursday";
                    break;
                case 5:
                    day = "Friday";
                    break;
                case 6:
                    day = "Saturday";
                    break;
            }
    return day;
}

function getShortWeekDay(code) {
var day = "";
    switch(code) {
                case 0:
                    day = "Sun";
                    break;
                case 1:
                    day = "Mon";
                    break;
                case 2:
                    day = "Tue";
                    break;
                case 3:
                    day = "Wed";
                    break;
                case 4:
                    day = "Thu";
                    break;
                case 5:
                    day = "Fri";
                    break;
                case 6:
                    day = "Sat";
                    break;
            }
    return day;
}

function getFullMonth(code) {
    var month = "";
    switch (code){
        case 0:
            month = "January";
            break;
        case 1:
            month = "February";
            break;
        case 2:
            month = "March";
            break;
        case 3:
            month = "April";
            break;
        case 4:
            month = "May";
            break;
        case 5:
            month = "June";
            break;
        case 6:
            month = "July";
            break;
        case 7:
            month = "August";
            break;
        case 8:
            month = "September";
            break;
        case 9:
            month = "October";
            break;
        case 10:
            month = "November";
            break;
        case 11:
            month = "December";
            break;
    }
    return month;
}

function getShortMonth(code) {
    var month = "";
    switch (code){
        case 0:
            month = "Jan";
            break;
        case 1:
            month = "Feb";
            break;
        case 2:
            month = "Mar";
            break;
        case 3:
            month = "Apr";
            break;
        case 4:
            month = "May";
            break;
        case 5:
            month = "Jun";
            break;
        case 6:
            month = "Jul";
            break;
        case 7:
            month = "Aug";
            break;
        case 8:
            month = "Sep";
            break;
        case 9:
            month = "Oct";
            break;
        case 10:
            month = "Nov";
            break;
        case 11:
            month = "Dec";
            break;
    }
    return month;
}

function getIcon(weatherId) {
    // Based on weather code data found at:
    // http://bugs.openweathermap.org/projects/api/wiki/Weather_Condition_Codes
    if (weatherId >= 200 && weatherId <= 232) {
        return "ic_storm.png";
    } else if (weatherId >= 300 && weatherId <= 321) {
        return "ic_light_rain.png";
    } else if (weatherId >= 500 && weatherId <= 504) {
        return "ic_rain.png";
    } else if (weatherId == 511) {
        return "ic_snow.png";
    } else if (weatherId >= 520 && weatherId <= 531) {
        return "ic_rain.png";
    } else if (weatherId >= 600 && weatherId <= 622) {
        return "ic_snow.png";
    } else if (weatherId >= 701 && weatherId <= 761) {
        return "ic_fog.png";
    } else if (weatherId == 761 || weatherId == 781) {
        return "ic_storm.png";
    } else if (weatherId == 800) {
        return "ic_clear.png";
    } else if (weatherId == 801) {
        return "ic_light_clouds.png";
    } else if (weatherId >= 802 && weatherId <= 804) {
        return "ic_cloudy.png";
    }
    return "ic_clear.png";
}

function getImage(weatherId) {
    // Based on weather code data found at:
    // http://bugs.openweathermap.org/projects/api/wiki/Weather_Condition_Codes
    if (weatherId >= 200 && weatherId <= 232) {
        return "art_storm.png";
    } else if (weatherId >= 300 && weatherId <= 321) {
        return "art_light_rain.png";
    } else if (weatherId >= 500 && weatherId <= 504) {
        return "art_rain.png";
    } else if (weatherId == 511) {
        return "art_snow.png";
    } else if (weatherId >= 520 && weatherId <= 531) {
        return "art_rain.png";
    } else if (weatherId >= 600 && weatherId <= 622) {
        return "art_snow.png";
    } else if (weatherId >= 701 && weatherId <= 761) {
        return "art_fog.png";
    } else if (weatherId == 761 || weatherId == 781) {
        return "art_storm.png";
    } else if (weatherId == 800) {
        return "art_clear.png";
    } else if (weatherId == 801) {
        return "art_light_clouds.png";
    } else if (weatherId >= 802 && weatherId <= 804) {
        return "art_cloudy.png";
    }
    return "art_clear.png";
}

function getFormattedTemperature(temperature) {
    return Math.floor(temperature) +'\xB0';
}

function getFormattedHumidity(humidity) {
    return humidity + " %";
}

function getFormattedWind(speed, degrees) {
    // From wind direction in degrees, determine compass direction as a string (e.g NW)
    // You know what's fun, writing really long if/else statements with tons of possible
    // conditions.  Seriously, try it!
    var direction = "Unknown";
    if (degrees >= 337.5 || degrees < 22.5) {
        direction = "N";
    } else if (degrees >= 22.5 && degrees < 67.5) {
        direction = "NE";
    } else if (degrees >= 67.5 && degrees < 112.5) {
        direction = "E";
    } else if (degrees >= 112.5 && degrees < 157.5) {
        direction = "SE";
    } else if (degrees >= 157.5 && degrees < 202.5) {
        direction = "S";
    } else if (degrees >= 202.5 && degrees < 247.5) {
        direction = "SW";
    } else if (degrees >= 247.5 && degrees < 292.5) {
        direction = "W";
    } else if (degrees >= 292.5 && degrees < 337.5) {
        direction = "NW";
    }
    return Math.round(speed) + " km/h " + direction;
}

function getFormattedPressure(pressure) {
    return Math.round(pressure) + " hPa";
}