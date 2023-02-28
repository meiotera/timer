
(function () {
    let time;
    let seconds = 0;
    let executeRegressive = false;

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
    });

    function regressive() {
        let secondsRegressive;
        let inTime = document.getElementById('inTime');
        let timeRegressive = Number(inTime.value);
        let min = timeRegressive * 60;

        if (executeRegressive) return;

        if (inTime.value === '' || !Number(inTime.value)) {
            console.log('use um numero');
            inTime.focus();
            inTime.value = '';
            return;
        }

        inTime.value = '';

        let remainingTime = min;

        function updateRegressive() {
            executeRegressive = true;
            remainingTime--;
            if (remainingTime === 0) {
                clearInterval(secondsRegressive);
            }
            watchScreenRegressive.innerText = getDate(remainingTime);
        }

        function startRegressive() {
            secondsRegressive = setInterval(updateRegressive, 1000);
        }

        document.addEventListener('click', (e) => {
            let el = e.target;
            if (el.id.includes('btPauseRegressive')) {
                clearInterval(secondsRegressive);
                el.setAttribute('value', 'Continue');
                el.setAttribute('id', 'btContinueRegressive');
                return;
            }

            if (el.id.includes('resetRegressive')) {
                clearInterval(secondsRegressive);
                watchScreenRegressive.innerText = '00:00:00';
                location.reload();
            }

            if (el.id.includes('btContinueRegressive')) {
                secondsRegressive = setInterval(updateRegressive, 1000);
                el.setAttribute('value', 'Pausar');
                el.setAttribute('id', 'btPauseRegressive');
            }
        });

        startRegressive();
    }

    let btStartCount = document.getElementById('btStartCount');
    btStartCount.addEventListener('click', regressive);
})()