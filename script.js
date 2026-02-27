// Set update date here
const updateDate = new Date("March 15, 2026 18:00:00").getTime();

const countdown = document.getElementById("countdown");

const interval = setInterval(function() {

    const now = new Date().getTime();
    const distance = updateDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdown.innerHTML =
        days + "d " +
        hours + "h " +
        minutes + "m " +
        seconds + "s ";

    if (distance < 0) {
        clearInterval(interval);
        countdown.innerHTML = "Update Released";
    }

}, 1000);
