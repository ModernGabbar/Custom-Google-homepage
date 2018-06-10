let cur_time = document.getElementById("time");
let cur_date = document.getElementById("date");
// const endpoint = "https://api.whatdoestrumpthink.com/api/v1/quotes/random";

let daylist = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
let monthlist = ['January','February','March','April','May','June','July ','August','September','October','November','December'];

let hh, mm, ampm, date, day, month;
function startTime() {
    let today = new Date();
    hh = today.getHours();
    mm = today.getMinutes();
    if(hh===0 && mm===0) {
        startDate();
    }
    if (mm < 10 ) { mm = '0' + mm; }
    if(hh >= 12) {
        ampm = 'pm';
    }
    else {
        ampm = 'am';
    }
    if (hh === 0 ) {
        hh = 12;
    }
    else if(hh > 12) {
        hh -= 12;
    }
    cur_time.textContent = `${hh}:${mm} ${ampm}`;
    setTimeout(startTime, 500);
}

function startDate() {
    let today = new Date();
    date = today.getDate();
    day = daylist[today.getDay()];
    month = monthlist[today.getMonth()];
    cur_date.textContent = `${day},  ${date} ${month}`;
}

startDate();
startTime();
