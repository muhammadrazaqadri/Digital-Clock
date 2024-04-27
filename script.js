function updateTime() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Convert 24-hour format to 12-hour format
    let period = "AM";
    if (hours >= 12) {
        period = "PM";
        hours -= 12;
    }
    if (hours === 0) {
        hours = 12;
    }

    // Add leading zeros if necessary
    hours = String(hours).padStart(2, '0');
    minutes = String(minutes).padStart(2, '0');
    seconds = String(seconds).padStart(2, '0');

    // Update the HTML elements with the new time
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
    document.getElementById('period').textContent = period;
}

// Update the time every second
setInterval(updateTime, 1000);

// Call updateTime once initially to set the time immediately
updateTime();


function updateDate() {
    const now = new Date();
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const dayOfWeek = daysOfWeek[now.getDay()];
    const month = months[now.getMonth()];
    const day = now.getDate();
    const year = now.getFullYear();

    const formattedDate = `${dayOfWeek}, ${month} ${day}, ${year}`;

    // Update the HTML element with the new date
    document.getElementById('date').textContent = formattedDate;
}

// Call updateDate once initially to set the date immediately
updateDate();
