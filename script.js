let wrongNotify = document.getElementById('wrongNotify');
wrongNotify.style.display = "none";
let correctNotify =  document.getElementById('correctNotify');
correctNotify.style.display = "none";


document.getElementById('generateBtn').addEventListener('click', () => {
    let random = Math.floor(1000 + Math.random()*(9999 - 1000 + 1));
    let firstDisplay = document.getElementById('display'); 
    firstDisplay.value = random;

})


let secondDisplay = document.getElementById('secondDisplay');
let buttons = Array.from(document.getElementsByClassName('button'));
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        switch (e.target.innerText) {
            case 'C':
                secondDisplay.value = '';
                break;

            case '<':
                secondDisplay.value = secondDisplay.value.slice(0, -1);
                break;
        
            default:
                secondDisplay.value += e.target.innerText;
                break;
        }
    })
})

document.getElementById('pinSubmitBtn').addEventListener('click', () =>{
    let displayOne = document.getElementById('display').value;
    let displayTwo = secondDisplay.value;

    if (displayOne == displayTwo) {
        correctNotify.style.display = "block";
    } else {
        wrongNotify.style.display = "block";
    }
})