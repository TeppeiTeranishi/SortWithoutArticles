const bands = ['Batman', 'The Flash', 'Superman', 'Wonder Woman', 'Acuaman', 'Green Lantern', 'Darkseid', 'Steppen Wolf', 'DeSaad', 'Green Arrow', 'Cyborg', 'Deathstroke', 'Mera', 'The Joker'];

function strip(bandName) {
    return bandName.replace(/^(a |the |an)/i, '').trim();
}

const sortedBands = bands.sort((a, b) => strip(a) > strip(b) ? 1 : -1);

document.querySelector('#bands').innerHTML = 
    sortedBands
        .map(band => `<li>${band}</li>`)
        .join('');

console.log(sortedBands);
