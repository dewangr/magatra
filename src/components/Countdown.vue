<script setup>
const props = defineProps({
    targetDate: {
        type: Date,
        required: true
    },
    hideSeconds: {
        type: Boolean,
        required: false,
        default: false
    }
});

// Set the date we're counting down to
const countDownDate = props.targetDate.getTime();
let days = 0;
let hours = 0;
let minutes = 0;
let seconds = 0;
// Update the count down every 1 second
setInterval(function () {
    const currentDate = new Date().getTime();
    // Get today's date and time

    // Find the distance between now and the count down date
    const dateDistance = countDownDate - currentDate;

    // Time calculations for days, hours, minutes and seconds
    days = Math.floor(dateDistance / (1000 * 60 * 60 * 24));
    hours = Math.floor((dateDistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minutes = Math.floor((dateDistance % (1000 * 60 * 60)) / (1000 * 60));
    seconds = Math.floor((dateDistance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById('daysDigit').innerHTML = days;
    document.getElementById('hoursDigit').innerHTML = hours;
    document.getElementById('minutesDigit').innerHTML = minutes;
    document.getElementById('secondsDigit').innerHTML = seconds;
}, 1000);

const textDays = days === 1 ? 'day' : 'days';
const textHours = hours === 1 ? 'hour' : 'hours';
const textMinutes = minutes === 1 ? 'minute' : 'minutes';
const textSeconds = seconds === 1 ? 'second' : 'seconds';

</script>
<template>
    <div class="countDays flex flex-col pr-2">
        <h5 id='daysDigit' class="numberDigit"></h5>
        <p>{{ textDays }}</p>
    </div>
    <div class="countHours flex flex-col pr-2">
        <h5 id='hoursDigit' class="numberDigit"></h5>
        <p>{{ textHours }}</p>
    </div>
    <div class="countMinutes flex flex-col pr-2">
        <h5 id='minutesDigit' class="numberDigit"></h5>
        <p>{{ textMinutes }}</p>
    </div>
    <div :hidden="props.hideSeconds" class="countSeconds flex flex-col">
        <h5 id='secondsDigit' class="numberDigit"></h5>
        <p>{{ textSeconds }}</p>
    </div>
</template>
<style scoped>
.numberDigit {
    font-size: 24px;
}
</style>