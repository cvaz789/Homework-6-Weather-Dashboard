
$(document).ready(function() {
    var allContent = localStorage.getItem("All-content");
    $("#current-temp").html(allContent);
    $(".search-current").on("click", function() {
        
    
    var currentAPI = "https://api.openweathermap.org/data/2.5/weather?q=";
    var key = "&appid=5be44d8532b085188a63a16db1ba44ec";
    var input = $("#city").val();
    var units = "&units=metric";

    console.log(currentAPI + input + key + units);
    
    
    
    $.ajax({
        url: currentAPI + input + key + units,
        method: "GET"
    }).then(function(response) {

        var content = $(".content");
        var cityDiv = $("<div class='current' id='city-name'>");
        var tempDiv = $("<div id='current-temp'>");
        var humidDiv = $("<div class='current'>");
        var windDiv = $("<div class='current'>");
        var iconDiv = $("<img class='current' id='current-icon'>");
        
        var city = response.name;
        var temp = response.main.temp;
        var humid = response.main.humidity;
        var wind = response.wind.speed;
        var icon = response.weather[0].icon;
        var iconUrl = "https://openweathermap.org/img/wn/" + icon + "@2x.png"; 
        // var iconAttr = iconDiv.attr("src", iconUrl); 
        iconDiv.attr("src", iconUrl);

        const milliseconds = response.dt * 1000;
        const dateObject = new Date(milliseconds);
        const humanFormat = dateObject.toLocaleDateString();

        content.append(iconDiv);
        content.append(cityDiv);
        content.append(tempDiv);
        content.append(humidDiv);
        content.append(windDiv);

        cityDiv.append(city + " (" + humanFormat + ")");
        tempDiv.append("Current Temperature: " + temp + "°C");
        humidDiv.append("Current Humidity: " + humid + "%");
        windDiv.append("Wind Speed: " + wind + " KMH");

        // console.log(response);
        // console.log(response.coord.lat);
        // console.log(response.coord.lon);
        var currentData = $("#current-temp").html();
        localStorage.setItem("all-Content", currentData);
        console.log($("#current-temp"));
        

        var oneCallAPI = "https://api.openweathermap.org/data/2.5/onecall?";
        var lat = "lat=" + response.coord.lat;
        var long = "&lon=" + response.coord.lon;

    
    $.ajax({
        url: oneCallAPI + lat + long + key + units,
        method: "GET"
    }).then(function(response) {

        var uv = response.current.uvi;
        var uvDiv = $("<div class='current'>");
        content.append(uvDiv);
        uvDiv.append("Current UV Index: " + uv);

                    

            // console.log(oneCallAPI + lat + long + key + units);
            // console.log("it got to onecall API");
            // console.log(response);
            // console.log(response.current.uvi);
            
        var forecastAPI = "https://api.openweathermap.org/data/2.5/forecast?q=";
        var input = $("#city").val();
        var key = "&appid=5be44d8532b085188a63a16db1ba44ec";
        var units = "&units=metric";

    $.ajax({
        url: forecastAPI + input + key + units,
        method: "GET"
    }).then(function(response) {

                // console.log("forecast api: " + forecastAPI + input + key + units);
                // console.log("it got to forecast API")
        console.log(response);
        var castContent = $(".forecast-content");
        var dayOneDiv = $("<div>");
        var dOneTmpDiv = $("<div>");
        var dOneDtDiv = $("<div>");
        var dOneHumDiv = $("<div>");
        var dOneIconDiv = $("<img id='cast-icon'>");

        var dOneDate = response.list[2].dt;
        var dOneTmp = response.list[2].main.temp;
        var dOneHum = response.list[2].main.humidity;
        var dOneIcon = response.list[2].weather[0].icon;
        var dOneIconURL = "https://openweathermap.org/img/wn/" + dOneIcon + "@2x.png";
        dOneIconDiv.attr("src", dOneIconURL);

        const milliseconds = dOneDate * 1000;
        const dateObject = new Date(milliseconds);
        const humanFormat = dateObject.toLocaleDateString();

        castContent.append(dayOneDiv);
        dayOneDiv.append(dOneIconDiv);
        dayOneDiv.append(dOneDtDiv);
        dayOneDiv.append(dOneTmpDiv);
        dayOneDiv.append(dOneHumDiv);

        dOneDtDiv.append(humanFormat);
        dOneTmpDiv.append("Temp: " + dOneTmp + " °C");
        dOneHumDiv.append("Humidity: " + dOneHum + "%");

        // castContent.append(dayTwoDiv);
        // castContent.append(dayThreeDiv);
        // castContent.append(dayFourDiv);
        // castContent.append(dayFiveDiv);

        // var dOneIcon = ;
        

    })
     
    })
    
    })
    
});

});



    

        