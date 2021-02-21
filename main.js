const input = document.getElementById('number');
const btn = document.getElementById('calculate').addEventListener('click', rootCal);
const resSpan = document.getElementById('result');

function rootCal(){
    const number = Number(input.value);
    const res = Math.sqrt(number);
    resSpan.innerText = res.toFixed(2);
}
