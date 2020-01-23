const calcola = require('./app');

test('Verifica 1', () => {
    let risultato = calcola(250, 300, 200, 3, 0);
    expect(risultato).toEqual({PPI: "70", DISTANZACONSIGLIATA: "265", PIXELORIZZONTALI: "8416", PIXELVERTICALI: "5665"});
});

test('Verifica 2', () => {
    let risultato = calcola(250, 100, 200, 3, 6);
    expect(risultato).toEqual({PPI: "35", DISTANZACONSIGLIATA: "178", PIXELORIZZONTALI: "1458", PIXELVERTICALI: "2833"});
});