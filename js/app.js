function getPin() {
    const createPin = Math.round(Math.random() * 10000);
    const pinLength = createPin + '';
    if (pinLength.length + '' == 4) {
        return createPin;
    } else {
        return getPin();
    }
}

function generatePin() {
    const pin = getPin();
    const displayPin = document.getElementById('pin-screen').value = pin;
}

document.getElementById('calc-parent').addEventListener('click', function(event) {
    const number = event.target.innerText;
    const numInp = document.getElementById('typing-screen');
    if (isNaN(number)) {
        console.log('NaN');
        if (number == 'C') {
            numInp.value = '';
        }
    } else {
        const prevNum = numInp.value;
        const newnumber = prevNum + number;
        numInp.value = newnumber;
    }
});

document.getElementById('submit-btn').addEventListener('click', function() {
    const generatedPin = document.getElementById('pin-screen').value;
    const typedPin = document.getElementById('typing-screen').value;

    const succesMessage = document.getElementById('notify-success');
    const errorMessage = document.getElementById('notify-error');
    if (generatedPin == typedPin) {
        succesMessage.style.display = 'block';
        errorMessage.style.display = 'none'

    } else {
        errorMessage.style.display = 'block';
        succesMessage.style.display = 'none';

    }
})