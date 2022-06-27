const start = document.getElementById('btn-start');

const pausa = document.getElementById('btn-pausa');

const azzera = document.getElementById('btn-azzera');

let clock;

output = document.getElementById('output');

start.addEventListener('click', function(){
    clock = setInterval (function(){
        output.innerHTML = (parseFloat(output.innerHTML) + 0.01) .toFixed(3)
    }, 10);
})
 
