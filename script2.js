$(document).ready(function () {
    var allContent = localStorage.getItem("all-Content");
    console.log(allContent);
    $("#current-temp").html(allContent);
    function getWeather(city) {
      //   meter contenido de codigo
      var input = city;
    }
    $("#search-current").on("click", function () {
      getWeather($("#city").val());
      var currentAPI = "https://api.openweathermap.org/data/2.5/weather?q=";
      var key = "&appid=5be44d8532b085188a63a16db1ba44ec";
      var input = $("#city").val();
      var units = "&units=metric";
  
      console.log(currentAPI + input + key + units);
  
      $.ajax({
        url: currentAPI + input + key + units,
        method: "GET",
      }).then(function (response) {
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
          method: "GET",
        }).then(function (response) {
          var uv = response.current.uvi;
          var uvDiv = $("<div class='current'>");
          content.append(uvDiv);
          uvDiv.append("Current UV Index: " + uv);
  
          // console.log(oneCallAPI + lat + long + key + units);
          // console.log("it got to onecall API");
          // console.log(response);
          // console.log(response.current.uvi);
  
          var forecastAPI = "https://api.openweathermap.org/data/2.5/forecast?q=";
          var input = $("#city").val(); //quitar
          var key = "&appid=5be44d8532b085188a63a16db1ba44ec";
          var units = "&units=metric";
  
          $.ajax({
            url: forecastAPI + input + key + units,
            method: "GET",
          }).then(function (response) {
            // Day 1
  
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
            var dOneIconURL =
              "https://openweathermap.org/img/wn/" + dOneIcon + "@2x.png";
            dOneIconDiv.attr("src", dOneIconURL);
  
            const milliseconds1 = dOneDate * 1000;
            const dateObject1 = new Date(milliseconds1);
            const humanFormat1 = dateObject1.toLocaleDateString();
  
            castContent.append(dayOneDiv);
            dayOneDiv.append(dOneIconDiv);
            dayOneDiv.append(dOneDtDiv);
            dayOneDiv.append(dOneTmpDiv);
            dayOneDiv.append(dOneHumDiv);
  
            dOneDtDiv.append(humanFormat1);
            dOneTmpDiv.append("Temp: " + dOneTmp + " °C");
            dOneHumDiv.append("Humidity: " + dOneHum + "%");
  
            // Day 2
  
            var castContent2 = $(".forecast-content2");
            var dayTwoDiv = $("<div>");
            var dTwoTmpDiv = $("<div>");
            var dTwoDtDiv = $("<div>");
            var dTwoHumDiv = $("<div>");
            var dTwoIconDiv = $("<img id='cast-icon'>");
  
            var dTwoDate = response.list[10].dt;
            var dTwoTmp = response.list[10].main.temp;
            var dTwoHum = response.list[10].main.humidity;
            var dTwoIcon = response.list[10].weather[0].icon;
            var dTwoIconURL =
              "https://openweathermap.org/img/wn/" + dTwoIcon + "@2x.png";
            dTwoIconDiv.attr("src", dTwoIconURL);
  
            const milliseconds2 = dTwoDate * 1000;
            const dateObject2 = new Date(milliseconds2);
            const humanFormat2 = dateObject2.toLocaleDateString();
  
            castContent2.append(dayTwoDiv);
            dayTwoDiv.append(dTwoIconDiv);
            dayTwoDiv.append(dTwoDtDiv);
            dayTwoDiv.append(dTwoTmpDiv);
            dayTwoDiv.append(dTwoHumDiv);
  
            dTwoDtDiv.append(humanFormat2);
            dTwoTmpDiv.append("Temp: " + dTwoTmp + " °C");
            dTwoHumDiv.append("Humidity: " + dTwoHum + "%");
  
            // Day 3
  
            var castContent3 = $(".forecast-content3");
            var dayThreeDiv = $("<div>");
            var dThreeTmpDiv = $("<div>");
            var dThreeDtDiv = $("<div>");
            var dThreeHumDiv = $("<div>");
            var dThreeIconDiv = $("<img id='cast-icon'>");
  
            var dThreeDate = response.list[18].dt;
            var dThreeTmp = response.list[18].main.temp;
            var dThreeHum = response.list[18].main.humidity;
            var dThreeIcon = response.list[18].weather[0].icon;
            var dThreeIconURL =
              "https://openweathermap.org/img/wn/" + dThreeIcon + "@2x.png";
            dThreeIconDiv.attr("src", dThreeIconURL);
  
            const milliseconds3 = dThreeDate * 1000;
            const dateObject3 = new Date(milliseconds3);
            const humanFormat3 = dateObject3.toLocaleDateString();
  
            castContent3.append(dayThreeDiv);
            dayThreeDiv.append(dThreeIconDiv);
            dayThreeDiv.append(dThreeDtDiv);
            dayThreeDiv.append(dThreeTmpDiv);
            dayThreeDiv.append(dThreeHumDiv);
  
            dThreeDtDiv.append(humanFormat3);
            dThreeTmpDiv.append("Temp: " + dThreeTmp + " °C");
            dThreeHumDiv.append("Humidity: " + dThreeHum + "%");
  
            // Day 4
  
            var castContent4 = $(".forecast-content4");
            var dayFourDiv = $("<div>");
            var dFourTmpDiv = $("<div>");
            var dFourDtDiv = $("<div>");
            var dFourHumDiv = $("<div>");
            var dFourIconDiv = $("<img id='cast-icon'>");
  
            var dFourDate = response.list[26].dt;
            var dFourTmp = response.list[26].main.temp;
            var dFourHum = response.list[26].main.humidity;
            var dFourIcon = response.list[26].weather[0].icon;
            var dFourIconURL =
              "https://openweathermap.org/img/wn/" + dFourIcon + "@2x.png";
            dFourIconDiv.attr("src", dFourIconURL);
  
            const milliseconds4 = dFourDate * 1000;
            const dateObject4 = new Date(milliseconds4);
            const humanFormat4 = dateObject4.toLocaleDateString();
  
            castContent4.append(dayFourDiv);
            dayFourDiv.append(dFourIconDiv);
            dayFourDiv.append(dFourDtDiv);
            dayFourDiv.append(dFourTmpDiv);
            dayFourDiv.append(dFourHumDiv);
  
            dFourDtDiv.append(humanFormat4);
            dFourTmpDiv.append("Temp: " + dFourTmp + " °C");
            dFourHumDiv.append("Humidity: " + dFourHum + "%");
  
            // Day 5
  
            var castContent5 = $(".forecast-content5");
            var dayFiveDiv = $("<div>");
            var dFiveTmpDiv = $("<div>");
            var dFiveDtDiv = $("<div>");
            var dFiveHumDiv = $("<div>");
            var dFiveIconDiv = $("<img id='cast-icon'>");
  
            var dFiveDate = response.list[34].dt;
            var dFiveTmp = response.list[34].main.temp;
            var dFiveHum = response.list[34].main.humidity;
            var dFiveIcon = response.list[34].weather[0].icon;
            var dFiveIconURL =
              "https://openweathermap.org/img/wn/" + dFiveIcon + "@2x.png";
            dFiveIconDiv.attr("src", dFiveIconURL);
  
            const milliseconds5 = dFiveDate * 1000;
            const dateObject5 = new Date(milliseconds5);
            const humanFormat5 = dateObject5.toLocaleDateString();
  
            castContent5.append(dayFiveDiv);
            dayFiveDiv.append(dFiveIconDiv);
            dayFiveDiv.append(dFiveDtDiv);
            dayFiveDiv.append(dFiveTmpDiv);
            dayFiveDiv.append(dFiveHumDiv);
  
            dFiveDtDiv.append(humanFormat5);
            dFiveTmpDiv.append("Temp: " + dFiveTmp + " °C");
            dFiveHumDiv.append("Humidity: " + dFiveHum + "%");
          });
        });
      });
    });
  });
  