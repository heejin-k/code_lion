const f = fetch('https://raw.githubusercontent.com/paullabkorea/coronaVaccinationStatus/main/data/data.json')
    .then(function (response) {
        return response.json();

    })
    .then(function (json) {
        console.log(json);
        return json
    })