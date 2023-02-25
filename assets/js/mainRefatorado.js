(function () {
    let time;
    let seconds = 0;
    let inTime = document.getElementById('inTime')
    let timeRegressive = Number(inTime.value);
    // Display
    const watchScreen = document.getElementById('watchScreen');

    // Display regressive
    const watchScreenRegressive = document.getElementById('watchScreenRegressive');

    function getDate(sec) {
        let date = new Date(sec * 1000);
        return date.toLocaleTimeString('pt-BR', {
            timeZone: 'GMT',
        });
    }


    function regressive () {
        watchScreenRegressive.innerText = getDate(timeRegressive);

        
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

        }

        if (e.target.id.includes('btPauseRegressive')) {

        }

        if (e.target.id.includes('resetRegressive')) {

        }
    });
})()