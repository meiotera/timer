
(function () {
    let time;
    let secondsRegressive;
    let seconds = 0;
    let inTime = document.getElementById('inTime')
    let execute = false;
    // Display
    const watchScreen = document.getElementById('watchScreen');

    // Display regressive
    const watchScreenRegressive = document.getElementById('watchScreenRegressive');

    function getDate(num) {
        let date = new Date(num * 1000);
        return date.toLocaleTimeString('pt-BR', {
            timeZone: 'GMT',
        });
    }

    // Referencia aos botoes
    document.addEventListener('click', (e) => {
        if (e.target.id.includes('btIniciar')) {
            clearInterval(time);
            time = setInterval(function () {
                seconds++;
                watchScreen.innerText = getDate(seconds);
            }, 1000);
        }

        if (e.target.id.includes('btPausar')) {
            clearInterval(time);
        }

        if (e.target.id.includes('btZerar')) {
            clearInterval(time);
            seconds = 0;
            watchScreen.innerText = '00:00:00';
        }

        //-----------------------------------------//
        if (e.target.id.includes('btStartCount')) {
            let timeRegressive = Number(inTime.value);
            let min = timeRegressive * 60;

            execute = true;           

            secondsRegressive = setInterval(function () {
                min--;
                if (min === 0) {
                    clearInterval(secondsRegressive);
                }
                watchScreenRegressive.innerText = getDate(min);
            }, 1000);           
        }

        if (e.target.id.includes('btPauseRegressive')) {
            clearInterval(secondsRegressive);
        }

        if (e.target.id.includes('resetRegressive')) {
            watchScreenRegressive.innerText = '00:00:00'
            timeRegressive = 0;
            clearInterval(secondsRegressive);
        }
    });
})()