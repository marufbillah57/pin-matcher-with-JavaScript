function getInputValue(){
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if(pinString.length == 4){
        return pin;
    } else {
        return getInputValue();
    }
}
function generatePin(){
    const pin = getInputValue();
    const displayPin = document.getElementById("display-pin");
    displayPin.value = pin;
}

document.getElementById('key-pressed').addEventListener('click', function(event){
    const numbers = event.target.innerText;
    const inputNumbers = document.getElementById('typed-numbers');
    if(isNaN(numbers)){
        if(numbers == 'C'){
            inputNumbers.value = '';
        }
    } else {
        const previousNumber = inputNumbers.value;
        const newNumbers = previousNumber + numbers;
        inputNumbers.value = newNumbers;
    }
});

document.getElementById('submit-button').addEventListener('click', function(){
    const pin = document.getElementById('display-pin').value;
    const inputNumbers = document.getElementById('typed-numbers').value;
    const successMessage = document.getElementById('notify-success');
    const failError = document.getElementById('notify-fail');
    if(pin == inputNumbers){
        successMessage.style.display = 'block';
        failError.style.display = 'none';
    } else {
        successMessage.style.display = 'none';
        failError.style.display = 'block';
    }
});