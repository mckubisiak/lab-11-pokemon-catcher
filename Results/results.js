import { mungeCaptured, mungeNames } from '../data-utils.js';
import { getPokedex, setPokedex } from '../local-storage-utils.js';

const pokedex = getPokedex();
const names = mungeNames(pokedex);
// console.log(typeof names);
// console.log(names);


const captured = mungeCaptured(pokedex);
// console.log(typeof captured);
// console.log(captured);


let ctx = document.getElementById('myChart').getContext('2d');
let resetButton = document.getElementById('reset-button');

let myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: names,
        datasets: [{
            label: '# of Catches',
            data: captured,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});


resetButton.addEventListener('click', ()=> {

    window.location.replace('/');


    setPokedex([]);

});