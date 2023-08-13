if (window.location.pathname === "/" || window.location.pathname === "/Default.aspx")
{
function updateCountdown() {
    let e = 60 - (new Date).getSeconds(),
        t = new Date("03/31/2024 08:00:00") - new Date,
        n = parseInt(t / 864e5);
    t -= 24 * n * 60 * 60 * 1e3;
    let a = parseInt(t / 36e5);
    t -= 60 * a * 60 * 1e3;
    let s = parseInt(t / 6e4);
    document.getElementById("countdown-day").innerHTML = n
    document.getElementById("countdown-hour").innerHTML = a
    document.getElementById("countdown-min").innerHTML = s + 1
    setTimeout((function() {
        updateCountdown()
    }), 1e3 * e)
}

function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

var lang = getCookie("Lang");
if (lang === "")
{
  lang = "en";
}

// Currently supported languages: Turkish, English, Greek, Azerbaijani, Russian, German, Bulgarian, French, Spanish, Polish, Japanese

const translations = {
  tr: {
      title: "Türkiye'de yerel seçimlere kalan süre",
      days: "GÜN",
      hours: "SAAT",
      minutes: "DAKİKA"
  },
  en: {
      title: "Time to local elections in Turkey",
      days: "DAYS",
      hours: "HOURS",
      minutes: "MINUTES"
  },
  el: {
      title: "Ώρα για τοπικές εκλογές στην Τουρκία",
      days: "ΜΕΡΕΣ",
      hours: "ΩΡΕΣ",
      minutes: "ΛΕΠΤΑ"
  },
  az: {
      title: "Türkiyə yerli seçkilərinə qalan vaxt",
      days: "GÜN",
      hours: "SAAT",
      minutes: "DƏQİQƏ"
  },
  ru: {
      title: "Время до местных выборов в Турции",
      days: "ДНИ",
      hours: "ЧАСЫ",
      minutes: "МИНУТЫ"
  },
  de: {
      title: "Zeit bis zu den Kommunalwahlen in der Türkei",
      days: "TAGE",
      hours: "STUNDEN",
      minutes: "MINUTEN"
  },
  bg: {
      title: "Време за местни избори в Турция",
      days: "ДНИ",
      hours: "ЧАСА",
      minutes: "МИНУТИ"
  },
  fr: {
      title: "Temps jusqu'aux élections locales en Turquie",
      days: "JOURS",
      hours: "HEURES",
      minutes: "MINUTES"
  },
  es: {
      title: "Tiempo hasta las elecciones locales en Turquía",
      days: "DÍAS",
      hours: "HORAS",
      minutes: "MINUTOS"
  },
  pl: {
      title: "Czas do lokalnych wyborów w Turcji",
      days: "DNI",
      hours: "GODZINY",
      minutes: "MINUTY"
  },
  ja: {
      title: "トルコの地方選挙までの時間",
      days: "日",
      hours: "時間",
      minutes: "分"
  }
};

const t = translations[lang] || translations.en;

var middle = document.querySelector("div.middle");
middle.innerHTML = `<h1 class="countdown-title">${t.title}</h1><div class="countdown">
    <div class="countdown-item flex-column">
        <span id="countdown-day" class="countdown-time"></span>
        <span>${t.days}</span>
    </div>
    <div class="countdown-item flex-column">
        <span id="countdown-hour" class="countdown-time"></span>
        <span>${t.hours}</span>
    </div>
    <div class="countdown-item flex-column">
        <span id="countdown-min" class="countdown-time"></span>
        <span>${t.minutes}</span>
    </div>
</div>` + middle.innerHTML;

var styles = `.flex-column {
  display: flex;
  flex-direction: column;
}
.countdown-item {
  font-size: 12px;
  text-align: center;
  margin-left: 1rem;
  margin-right: 1rem;
}

.countdown-time {
  font-weight: bolder;
  font-size: 32px;
}

.countdown-title {
  font-weight: bolder;
  font-size: 24px;
  margin-top: 82px;
}

.countdown {
  display: flex;
  justify-content: center;
  margin-bottom: .5rem;
  margin-top: .5rem;
}
`;

document.querySelector(".searchbar").style.marginTop = 0;

var styleSheet = document.createElement("style")
styleSheet.innerText = styles
document.head.appendChild(styleSheet)

updateCountdown();}
