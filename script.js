function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
        change.target.classList.add('block_show');
    }
  });
}

let options = {threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.block_animation');

for (let element of elements) {
  observer.observe(element);
}

let infoElement = document.getElementById('info');
let headerText = document.getElementById('text');
let weatherBlock = document.getElementById('weather');
let btn = document.getElementById('btn');
let btnBack = document.getElementById('btn_back');
let weather_text_c = document.getElementById('weather_text_c');
let weather_text_f = document.getElementById('weather_text_f');
let weather_text_h = document.getElementById('weather_text_h');
let weather_text_v = document.getElementById('weather_text_v');
let weather_image_url;
let weather_image = document.getElementById('weather_image');


async function getWeather() {
    const res = await fetch('https://weatherdbi.herokuapp.com/data/weather/innopolis');
    const json = await res.json();
    return json;
}


btn.addEventListener('click', () => {
    infoElement.classList.add('close');
    headerText.classList.add('no_text');
    weatherBlock.classList.add('active');
    btn.classList.add('hidden');
    btnBack.classList.add('active');
    getWeather().then(weather => {
        const weather_api = weather.currentConditions;
        const weather_text = [weather_api.temp.c, weather_api.temp.f, 
                             weather_api.humidity, weather_api.wind.km]
        weather_text_c.textContent = weather_text[0];
        weather_text_f.textContent = weather_text[1];
        weather_text_h.textContent = weather_text[2];
        weather_text_v.textContent = weather_text[3];
        weather_image_url = weather_api.iconURL;
        weather_image.src = weather_image_url;
        console.log(weather);  
    })
})

btnBack.addEventListener('click', () => {
    infoElement.classList.remove('close');
    headerText.classList.remove('no_text');
    weatherBlock.classList.remove('active');
    btn.classList.remove('hidden');
    btnBack.classList.remove('active');
})
    
