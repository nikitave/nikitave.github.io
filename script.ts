
interface Api {
  weather_c: string,
  weather_f: string,
  weather_h: string,
  weather_wind: string,
  weather_url: string
}

let i: number = 0;
let infoElement: HTMLElement = document.getElementById('info')!;
let headerText: HTMLElement = document.getElementById('text')!;
let weatherBlock: HTMLElement = document.getElementById('weather')!;
let btn: HTMLElement = document.getElementById('btn')!;
let btnBack: HTMLElement = document.getElementById('btn_back')!;
let weather_text_c: HTMLElement = document.getElementById('weather_text_c')!;
let weather_text_f: HTMLElement = document.getElementById('weather_text_f')!;
let weather_text_h: HTMLElement = document.getElementById('weather_text_h')!!;
let weather_text_v: HTMLElement = document.getElementById('weather_text_v')!;
const weather_text_array: HTMLElement[] = [weather_text_c, weather_text_f,
  weather_text_h, weather_text_v]!;
let weather_image_url: string;

async function getWeather() {
  const res: Response = await fetch('https://weatherdbi.herokuapp.com/data/weather/innopolis');
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
    let api: Api = {
      weather_c: weather_api.temp.c,
      weather_f: weather_api.temp.f,
      weather_h: weather_api.humidity,
      weather_wind: weather_api.wind.km,
      weather_url: weather_api.iconURL
    }
    let api_array: string[] = [api.weather_c, api.weather_f,
                api.weather_h, api.weather_wind, api.weather_url]
    for (i; i < 4; i++) {
      weather_text_array[i].textContent = api_array[i];
    }
    weather_image_url = api_array[i];
    (<HTMLImageElement>document.querySelector(".weather_image")).src = weather_image_url;
  })
})

btnBack.addEventListener('click', () => {
  infoElement.classList.remove('close');
  headerText.classList.remove('no_text');
  weatherBlock.classList.remove('active');
  btn.classList.remove('hidden');
  btnBack.classList.remove('active');
})

