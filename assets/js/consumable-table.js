const smsDropdown = document.getElementById("sms-country");
const whtDropdown = document.getElementById("what-country");
const whtServiceDropdown = document.getElementById("what-service");

if (document.getElementById("sms-country")?.length) {
    smsDropdown.addEventListener("change", function (event) {
        const selectedOption = event.target.value;
        document.getElementById("sms-value").innerText = selectedOption;
    });
}

var countries = [
    {
        name: 'Thailand',
        marketing: '$0.088',
        utility: '$0.060',
        authentication: '$0.053',
        service: '$0.034**',
    },
    {
        name: 'Indonesia',
        marketing: '$0.053',
        utility: '$0.035',
        authentication: '$0.046',
        service: '$0.033**',
    },
    {
        name: 'Singapore',
        marketing: '$0.088',
        utility: '$0.060',
        authentication: '$0.053',
        service: '$0.034**',
    },
    {
        name: 'Vietnam',
        marketing: '$0.088',
        utility: '$0.060',
        authentication: '$0.053',
        service: '$0.034**',
    },
    {
        name: 'Philippines',
        marketing: '$0.088',
        utility: '$0.060',
        authentication: '$0.053',
        service: '$0.034**',
    },
    {
        name: 'UAE',
        marketing: '$0.051',
        utility: '$0.034',
        authentication: '$0.032',
        service: '$0.033**',
    },
    {
        name: 'Malaysia',
        marketing: '$0.128',
        utility: '$0.030',
        authentication: '$0.026',
        service: '$0.033**',
    },
    {
        name: 'USA',
        marketing: '$0.03',
        utility: '$0.0048',
        authentication: '$0.0162',
        service: 'N/A',
    },
    {
        name: 'India',
        marketing: '$0.01284',
        utility: '$0.00168',
        authentication: '0.00168',
        service: 'N/A',
    },
    {
        name: 'Brazil',
        marketing: '$0.093',
        utility: '$0.052',
        authentication: '$0.047',
        service: '$0.045**',
    },
    {
        name: 'Mexico',
        marketing: '$0.065',
        utility: '$0.039',
        authentication: '$0.035',
        service: '$0.015**',
    }
]
if (document.getElementById("what-service")?.length) {
    whtServiceDropdown.addEventListener("change", function (event) {
        const selectedOption = event.target.value.toLowerCase();
        var CountryValue = document.getElementById("what-country").value;
        // console.log("Filters", CountryValue)
        let filteredCountries = countries.find(item => {
            if (item.name === CountryValue) {
                return item
            }
        })
        console.log("Filters", filteredCountries)
        document.getElementById("what-value").innerText = filteredCountries[selectedOption];
    });
}


if (document.getElementById("what-country")?.length) {
    whtDropdown.addEventListener("change", function (event) {
        var serviceIndex = document.getElementById("what-service").selectedIndex;
        var serviceValue = document.getElementById("what-service").value;
        var serviceText = document.getElementById("what-service").options[serviceIndex].text;


        let filteredCountries = countries.filter(item => {
            if (item.name === event.target.value) {
                return item
            }
        })
        // console.log("selected index", serviceIndex);
        // console.log("selected value", serviceValue);
        // console.log("selected text", serviceText);
        // console.log("Filters", filteredCountries)

        let selectedValue = filteredCountries[0][serviceText.toLowerCase()];
        document.getElementById("what-value").innerText = selectedValue;
    });
}