//openweathermap.org/img/w/${data.weather[0].icon}+ '.png'

const today = new Date();
const loadData = () => {
	const seachInput = document.getElementById('search-field');
	const searchText = seachInput.value;
	seachInput.value = '';

	fetch(
		`https://api.openweathermap.org/data/2.5/weather?q=${searchText}&appid=2fb917023ab6ce97eac3a54d682e96d7`,
	)
		.then((response) => response.json())
		.then((data) => displayWeather(data));
};

const displayWeather = (data) => {
	let cityLocation = document.getElementById('city-location');
	cityLocation.innerText = `${data.name} , ${data.sys.country}`;

	let date = document.getElementById('time-date');
	date.innerText = dateFunction(today);

	let temp = document.getElementById('tempareture');
	temp.innerText = `${Math.round(data.main.temp - 273)} °C`;

	let tempRange = document.getElementById('min-max');
	tempRange.innerText = `Avarage Temperature: ${Math.round(
		data.main.temp_min - 273,
	)}°C - ${Math.round(data.main.temp_max - 273)}°C`;

	const weatherCon = document.getElementById('weather');
	weatherCon.innerHTML = `<h5>${data.weather[0].main} </h5> 
                             <h6> ${data.weather[0].description}</h6>`;
	//Problem 1 : weather icon
	let icon = data.weather[0].icon;
	let locationIcon = document.querySelector('.weather-icon');
	locationIcon.innerHTML = ` <img
				src="http://openweathermap.org/img/wn/${icon}@2x.png"
				alt=""
			/>`;
	// Problem 2 : background
	let weatherCondition = data.weather[0].main;
	if (weatherCondition == 'Clear') {
		document.body.style.backgroundImage =
			"url('./ritam-baishya-ROVBDer29PQ-unsplash.jpg')";
	} else if (weatherCondition == 'Clouds') {
		document.body.style.backgroundImage = "url('images/cloud.jpg')";
	} else if (weatherCondition == 'Haze') {
		document.body.style.backgroundImage = "url('images/sunny.jpg')";
	} else if (weatherCondition == 'Rain') {
		document.body.style.backgroundImage = "url('images/rain.jpg')";
	} else if (weatherCondition == 'Snow') {
		document.body.style.backgroundImage = "url('images/snow.jpg')";
	} else if (weatherCondition == 'Thunderstorm') {
		document.body.style.backgroundImage = "url('images/thunderstorm.jpg')";
	} else if (weatherCondition == 'Mist') {
		document.body.style.backgroundImage =
			"url('./annie-spratt-7CME6Wlgrdk-unsplash.jpg')";
	}
};
const dateFunction = (today) => {
	let months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	];

	let days = [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
	];

	let month = months[today.getMonth()];
	let day = days[today.getDay()];
	let year = today.getFullYear();

	return `${day}
     ${month} ${year}`;
};

//  backgound Image
// const backgorundChange = () => {
// 	if (weatherCondition == 'Clear') {
// 		document.body.style.backgroundImage = "url('images/clear.jpg')";
// 	} else if (weatherCondition == 'Clouds') {
// 		document.body.style.backgroundImage = "url('images/cloud.jpg')";
// 	} else if (weatherCondition == 'Haze') {
// 		document.body.style.backgroundImage = "url('images/cloud.jpg')";
// 	} else if (weatherCondition == 'Rain') {
// 		document.body.style.backgroundImage = "url('images/rain.jpg')";
// 	} else if (weatherCondition == 'Snow') {
// 		document.body.style.backgroundImage = "url('images/snow.jpg')";
// 	} else if (weatherCondition == 'Thunderstorm') {
// 		document.body.style.backgroundImage = "url('images/thunderstorm.jpg')";
// 	}
// };
