function attachEvents() {
    
    document.getElementById("submit").addEventListener("click", getWeather);
    const locationInputRef = document.getElementById("location");
    const forecastSectionRef = document.getElementById("forecast");
    const currentRef = document.getElementById("current");
    const upcomingRef = document.getElementById("upcoming");

    const baseLocationURL = `http://localhost:3030/jsonstore/forecaster/locations`;
    const todayURL = `http://localhost:3030/jsonstore/forecaster/today/`;
    const upcomingURL = "http://localhost:3030/jsonstore/forecaster/upcoming/";

    async function getWeather(event) {
        try{const userInput = locationInputRef.value;
        forecastSectionRef.style.display = "block";
        const locationResponse = await fetch(baseLocationURL);
        const locationData = await locationResponse.json();
        const currentLocationData = locationData.find(x=>x.name===userInput);
        await fillTodayData(currentLocationData.code);
        await fillUpcomingData(currentLocationData.code);}
        catch(error){
            forecastSectionRef.textContent = "Error";
        }
    }
    async function fillUpcomingData(code) {
        const response = await fetch(upcomingURL + code);
        const data = await response.json();
        const upcomingInfo = createForecastUpcomingSection(data);
        upcomingRef.appendChild(upcomingInfo);
    }

    function createForecastUpcomingSection(data) {
        const container = document.createElement("div");
        container.classList.add("forecast-info");

        const upcomingSpan1 = generateSpan(data.forecast[0]);
        const upcomingSpan2 = generateSpan(data.forecast[1]);
        const upcomingSpan3 = generateSpan(data.forecast[2]);
       
        container.appendChild(upcomingSpan1);
        container.appendChild(upcomingSpan2);
        container.appendChild(upcomingSpan3);
        return container;
    }

    function generateSpan(data){
        const upcomingSpan = document.createElement("span");
        upcomingSpan.classList.add("upcoming");

        const symbol = document.createElement("span");
        symbol.classList.add("symbol");
        symbol.innerHTML = findSymbol(data.condition);

        const degree = document.createElement("span");
        degree.classList.add("forecast-data");
        degree.innerHTML = `${data.low + findSymbol("Degrees")}/${data.high + findSymbol("Degrees")}`;

        const condition = document.createElement("span");
        condition.classList.add("forecast-data");
        condition.textContent = data.condition;
        
        upcomingSpan.appendChild(symbol);
        upcomingSpan.appendChild(degree);
        upcomingSpan.appendChild(condition);
    }

    async function fillTodayData(code) {
        const response = await fetch(todayURL + code);
        const data = await response.json();
        const todayInfo = createForecastTodaySection(data);
        currentRef.appendChild(todayInfo);
    }

    function createForecastTodaySection(data) {
        const container = document.createElement("div");
        container.classList.add("forecast");
        const conditionSpan = document.createElement("span");
        conditionSpan.classList.add("condition");
        conditionSpan.classList.add("symbol");
        conditionSpan.innerHTML = findSymbol(data.forecast.condition);

        container.appendChild(conditionSpan);

        const spanContainer = document.createElement("span");
        spanContainer.classList.add("condition");

        const spanName = document.createElement("span");
        spanName.classList.add("forecast-data");
        spanName.textContent = data.name;

        const degree = document.createElement("span");
        degree.classList.add("forecast-data");
        degree.innerHTML = `${data.forecast.low + findSymbol("Degrees")}/${data.forecast.high + findSymbol("Degrees") }`;

        const condition = document.createElement("span");
        condition.classList.add("forecast-data");
        condition.textContent = data.forecast.condition;

        spanContainer.appendChild(spanName);
        spanContainer.appendChild(degree);
        spanContainer.appendChild(condition);
        container.appendChild(spanContainer);
        return container;
    }

    function findSymbol(condition) {
        switch (condition) {
            case "Sunny":
                return "&#x2600";
            case "Partly sunny":
                return "&#x26C5";
            case "Overcast":
                return "&#x2601";
            case "Rain":
                return "&#x2614";
            case "Degrees":
                return "&#176";
        }
    }
}

attachEvents();