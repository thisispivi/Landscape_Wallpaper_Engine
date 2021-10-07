function load_weather() {
    setInterval(getLocation(), 600000);
}

function setIcon(status) {
    switch (status) {
        case 'Rain':
            $('#icon').append('<i class="wi wi-rain-mix"></i>');
            break;
        case 'Drizzle':
            $('#icon').append('<i class="wi wi-rain-mix"></i>');
            break;
        case 'Clear':
            $('#icon').append('<i class="wi wi-day-sunny"></i>');
            break;
        case 'Clouds':
            $('#icon').append('<i class="wi wi-cloudy"></i>');
            break;
        case 'Thunderstorm':
            $('#icon').append('<i class="wi wi-storm-showers"></i>');
            break;
        case 'Snow':
            $('#icon').append('<i class="wi wi-snow"></i>');
            break;
        case 'Mist':
            $('#icon').append('<i class="wi wi-fog"></i>');
            break;
        case 'Fog':
            $('#icon').append('<i class="wi wi-fog"></i>');
            break;
        case 'Haze':
            $('#icon').append('<i class="wi wi-smoke"></i>');
            break;
    }
}

function setCurrent(city) {
    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=5ffdbfa1c66bc24fc33a167761edd1e2',
        method: 'GET',
        data: {},
        dataType: 'json',
        success: function(data) {
            setGradient(data.main.temp);
            $('#city').empty();
            $('#city').append(city.substring(0, city.indexOf(',')));
            $('#temp').empty();
            if ($('#icon').is(':empty')) {
                setIcon(data.weather[0].main);
            }
            if ($('#temp').is(':empty')) {
                $('#temp').append(inCel(data.main.temp));
            }
            if ($('#switch').is(':empty')) {
                $('#switch').append('<button id="toggleDeg" class="btn btn-default">Switch to °F</button>')
            }
        }
    });
}

function getLocation() {
    $.ajax({
        url: 'http://ip-api.com/json',
        method: 'GET',
        data: {},
        dataType: 'json',
        success: function(data) {
            $city = data.city + ',' + data.countryCode;
            console.log(city)
            setCurrent($city);
        },
        error: function(err) {
            console.log(err)
        }
    });
}

function getIcon(weather) {
    switch (weather) {
        case 'Rain':
            return '<i class="wi wi-rain-mix"></i>';
        case 'Drizzle':
            return '<i class="wi wi-rain-mix"></i>';
        case 'Clouds':
            return '<i class="wi wi-cloudy"></i>';
        case 'Clear':
            return '<i class="wi wi-day-sunny"></i>';
        case 'Thunderstorm':
            return '<i class="wi wi-storm-showers"></i>';
        case 'Snow':
            return '<i class="wi wi-snow"></i>';
        case 'Haze':
            return '<i class="wi wi-smoke"></i>';
        case 'Fog':
            return '<i class="wi wi-fog"></i>';
        case 'Mist':
            return '<i class="wi wi-fog"></i>';
        default:
            return '<i class="wi wi-time-1"></i>';
    }
}

function setGradient(value) {
    $('.container-fluid').css('background', 'linear-gradient(rgba(' + Math.round(value - 263) * 8 + ',' + Math.round(value - 263) * 2 + ',' + (45 - Math.round(value - 263)) * 7 + ',0.6), rgba(' + Math.round(value - 263) * 8 + ',' + Math.round(value - 263) * 5 + ',200,0.6))');
    $('.container-fluid').css('background', '-webkit-linear-gradient(rgba(' + Math.round(value - 263) * 8 + ',' + Math.round(value - 263) * 2 + ',' + (45 - Math.round(value - 263)) * 6 + ',0.6), rgba(' + Math.round(value - 263) * 5 + ',' + Math.round(value - 263) * 4 + ',200,0.6))');
    $('.container-fluid').css('background', '-moz-linear-gradient(rgba(' + Math.round(value - 263) * 8 + ',' + Math.round(value - 263) * 2 + ',' + (45 - Math.round(value - 263)) * 6 + ',0.6), rgba(' + Math.round(value - 263) * 5 + ',' + Math.round(value - 263) * 8 + ',200,0.6))');
    $('.container-fluid').css('background', '-o-linear-gradient(rgba(' + Math.round(value - 263) * 8 + ',' + Math.round(value - 263) * 2 + ',' + (45 - Math.round(value - 263)) * 6 + ',0.6), rgba(' + Math.round(value - 263) * 5 + ',' + Math.round(value - 263) * 8 + ',200,0.6))');
}

function inCel(value, reason) {
    return Math.round(value - 273.15) + ' °C';
}