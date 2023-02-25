(function () {
    let timer_display = document.getElementById('timer-display');
    const btIniciar = document.getElementById('btIniciar');
    const btPausar = document.getElementById('btPausar');
    const btZerar = document.getElementById('btZerar');

    let seconds;
    let executed = false;
    let timerSeconds = 0;
    let timerMinuts = 0;
    let timerHour = 0;

    function fSeconds() {
        if (executed) {
            return
        }

        executed = true;

        seconds = setInterval(function () {
            timerSeconds++;
            if (timerSeconds >= 60) {
                minuts();
                timerSeconds = 00;
            }            
            display();            
        }, 1000);
    }

    function minuts() {
        timerMinuts++
        if (timerMinuts >= 60) {
            hour();
            timerMinuts = 00;
        }        
    }

    function hour() {
        timerHour++;
        if (hour >= 23) {
            hour = 00;
        }        
    }

    function pausar() {
        setTimeout(function () {
            clearInterval(seconds);
        });
        executed = false;
    }

    function zerar() {
        timerHour = 00;
        timerMinuts = 00;
        timerSeconds = 00;

        timer_display.innerText = '00:00:00';
        pausar();
        executed = false;
    }

    function adicionaZero(num) {
        const zero = num < 10 ? `0${num}` : `${num}`;
        return zero;
    }

    function display() {
        timer_display.innerHTML = `${adicionaZero(timerHour)}:${adicionaZero(timerMinuts)}:${adicionaZero(timerSeconds)}`;
    }
    btIniciar.addEventListener('click', fSeconds);
    btPausar.addEventListener('click', pausar);
    btZerar.addEventListener('click', zerar);

})()