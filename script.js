var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
function onEntry(entry) {
    entry.forEach(function (change) {
        if (change.isIntersecting) {
            change.target.classList.add('block_show');
        }
    });
}
var options = { threshold: [0.5] };
var observer = new IntersectionObserver(onEntry, options);
var elements = document.querySelectorAll('.block_animation');
for (var _i = 0, _a = elements; _i < _a.length; _i++) {
    var element = _a[_i];
    observer.observe(element);
}
var infoElement = document.getElementById('info');
var headerText = document.getElementById('text');
var weatherBlock = document.getElementById('weather');
var btn = document.getElementById('btn');
var btnBack = document.getElementById('btn_back');
var weather_text_c = document.getElementById('weather_text_c');
var weather_text_f = document.getElementById('weather_text_f');
var weather_text_h = document.getElementById('weather_text_h');
var weather_text_v = document.getElementById('weather_text_v');
var weather_text_array = [weather_text_c, weather_text_f,
    weather_text_h, weather_text_v];
var weather_image_url;
function getWeather() {
    return __awaiter(this, void 0, void 0, function () {
        var res, json;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch('https://weatherdbi.herokuapp.com/data/weather/innopolis')];
                case 1:
                    res = _a.sent();
                    return [4 /*yield*/, res.json()];
                case 2:
                    json = _a.sent();
                    return [2 /*return*/, json];
            }
        });
    });
}
btn.addEventListener('click', function () {
    infoElement.classList.add('close');
    headerText.classList.add('no_text');
    weatherBlock.classList.add('active');
    btn.classList.add('hidden');
    btnBack.classList.add('active');
    getWeather().then(function (weather) {
        var weather_api = weather.currentConditions;
        var api = {
            weather_c: weather_api.temp.c,
            weather_f: weather_api.temp.f,
            weather_h: weather_api.humidity,
            weather_wind: weather_api.wind.km,
            weather_url: weather_api.iconURL
        };
        var api_array = [api.weather_c, api.weather_f,
            api.weather_h, api.weather_wind, api.weather_url];
        for (var i = 0; i < 4; i++) {
            weather_text_array[i].textContent = api_array[i];
        }
        weather_image_url = api_array[4];
        document.querySelector(".weather_image").src = weather_image_url;
    });
});
btnBack.addEventListener('click', function () {
    infoElement.classList.remove('close');
    headerText.classList.remove('no_text');
    weatherBlock.classList.remove('active');
    btn.classList.remove('hidden');
    btnBack.classList.remove('active');
});
