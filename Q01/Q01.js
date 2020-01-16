
const today = new Date();
const weekDays = ['Sunday','Monday','Tuesday',"Wednesday", "Thursday","Friday","Saturday"]

const weekDay = weekDays[today.getDay()];

const complHour = (today.getHours() > 12) ? 'PM' : 'AM';
const hourDay = today.getHours();

const minuteDay = today.getMinutes();
const secondsDay = today.getSeconds();

document.addEventListener('DOMContentLoaded', doIt);

function doIt(){

    const div = document.createElement('div');
    const msg = `Today is : ${weekDay} <br>
    Current time is: ${hourDay} ${complHour} : ${minuteDay} : ${secondsDay}`;

    // div.appendChild(document.createTextNode(msg));
    div.innerHTML = msg;

    document.querySelector('.container').appendChild(div);
}

