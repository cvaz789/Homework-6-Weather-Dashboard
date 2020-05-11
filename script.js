
$(".search-current").on("click", function() {
    var opnWthrApiUrl = "https://api.openweathermap.org/data/2.5/weather?q="
    var key = "&appid=5be44d8532b085188a63a16db1ba44ec";
    var input = $("#city").val();
    var units = "&units=metric";

    console.log(opnWthrApiUrl + input + key + units);

    $.ajax({
        url: opnWthrApiUrl + input + key + units,
        method: "GET"
    }).then(function(response) {

        var content = $(".content");
        var cityDiv = $("<div id='city-name'>");
        var tempDiv = $("<div>");
        var humidDiv = $("<div>");
        var windDiv = $("<div>");
        var uvDiv = $("<div>");
        var iconDiv = $("<img id='current-icon'>");
        
        var city = response.name;
        var temp = response.main.temp;
        var humid = response.main.humidity;
        var wind = response.wind.speed;
        var uv = response.main.uvi;
        var icon = response.weather[0].icon;
        var iconUrl = "https://openweathermap.org/img/wn/" + icon + "@2x.png"; 
        var iconAttr = iconDiv.attr("src", iconUrl) 

        content.append(iconDiv);
        content.append(cityDiv);
        content.append(tempDiv);
        content.append(humidDiv);
        content.append(windDiv);
        content.append(uvDiv);
        
        cityDiv.append(city);
        tempDiv.append("Current Temperature: " + temp + "°C");
        humidDiv.append("Current Humidity: " + humid + "%");
        windDiv.append("Wind Speed: " + wind + " KMH");
        uvDiv.append("Current UV Index: " + uv);

        console.log(response);
    })

    if($(".city").val() == ""){
        alert("Enter a city, please")
    }
});



$(".search-forecast").on("click", function() {
    var forecastApi = "https://api.openweathermap.org/data/2.5/onecall?q=";
    var input = $("#city").val();
    var key = "&appid=5be44d8532b085188a63a16db1ba44ec";
    var units = "&units=metric";

    $.ajax({
        url: forecastApi + input + key + units,
        method: "GET"
    }).then(function(response) {

        console.log(forecastApi + input + key + units);
        console.log(response);
    })

})