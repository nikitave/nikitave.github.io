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
        weather_text_c.textContent = weather.currentConditions.temp.c;
        weather_text_f.textContent = weather.currentConditions.temp.f;
        weather_text_h.textContent = weather.currentConditions.humidity;
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
    
