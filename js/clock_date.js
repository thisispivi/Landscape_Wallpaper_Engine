var clock_elem, date_elem, months = ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"],
    weekdays = ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"]

function load() {
    clock_elem = document.getElementById("clock");
    date_elem = document.getElementById("date");
    week_elem = document.getElementById("week");

    setInterval(update, 1000 / 30);
}

function update() {
    var curTime = new Date();
    clock_elem.innerHTML = curTime.toLocaleTimeString('it-IT', { hour: '2-digit', minute: '2-digit' });
    week_elem.innerHTML = weekdays[curTime.getDay()] + ",";
    date_elem.innerHTML = curTime.getDate() + " " + months[curTime.getMonth()] + " " + curTime.getFullYear();
}