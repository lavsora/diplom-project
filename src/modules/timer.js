const timer = (deadline) => {
    const timerDays = document.querySelectorAll('.count_1 span');
    const timerHours = document.querySelectorAll('.count_2 span');
    const timerMinutes = document.querySelectorAll('.count_3 span');
    const timerSeconds = document.querySelectorAll('.count_4 span');

    let idInterval;

    const getTimeRemainig = () => {
        let dateStop = new Date(deadline).getTime();
        let dateNow = new Date().getTime();
        let timeRemaining = (dateStop - dateNow) / 1000;
        let days = Math.floor(timeRemaining / 60 / 60 / 24)
        let hours = Math.floor((timeRemaining / 60 / 60) % 24);
        let minutes = Math.floor((timeRemaining / 60) % 60);
        let seconds = Math.floor(timeRemaining % 60);

        return { timeRemaining, days, hours, minutes, seconds }
    }

    const addZero = function (date) {
        return String(date).padStart(2, '0');
    }

    const updateClock = () => {
        let getTime = getTimeRemainig();

        timerDays.forEach((day) => day.textContent = addZero(getTime.days))
        timerHours.forEach((hour) => hour.textContent = addZero(getTime.hours))
        timerMinutes.forEach((minute) => minute.textContent = addZero(getTime.minutes))
        timerSeconds.forEach((second) => second.textContent = addZero(getTime.seconds))

        if (getTime.timeRemaining < 0) {
            clearInterval(idInterval);

            timerDays.forEach((day) => day.textContent = '00')
            timerHours.forEach((hour) => hour.textContent = '00')
            timerMinutes.forEach((minute) => minute.textContent = '00')
            timerSeconds.forEach((second) => second.textContent = '00')
        }
    }
    updateClock();
    
    idInterval = setInterval(updateClock, 1000);
}

export default timer