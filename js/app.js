function calcola(DistanzaCm, LatoOri, LatoVer, Abbondanza, OpzioneAcuita) {

    let SecToRad = 0.000004848136811;
    let DistanzaInch = 0;
    let PPI = 0;
    let DistanzaConsigliata = 0;
    let PixelOri = 0;
    let PixelVer = 0;
    let Acuita = 0;

    switch (OpzioneAcuita)
    {
        case 0:
            Acuita = SecToRad * 30;
            break;
        case 1:
            Acuita = SecToRad * 35;
            break;
        case 2:
            Acuita = SecToRad * 40;
            break;
        case 3:
            Acuita = SecToRad * 45;
            break;
        case 4:
            Acuita = SecToRad * 50;
            break;
        case 5:
            Acuita = SecToRad * 55;
            break;
        case 6:
            Acuita = SecToRad * 60;
            break;
    }

    DistanzaInch = DistanzaCm / 2.54;
    PPI = 1 / (2 * DistanzaInch * Math.tan(Acuita / 2));

    let LatoMaggiore = 0;
    if (LatoOri >= LatoVer)
        LatoMaggiore = LatoOri + 2 * Abbondanza;
    else
        LatoMaggiore = LatoVer + 2 * Abbondanza;

    let angoloConoOtticoGra = 60;
    let angoloConoOtticoRad = angoloConoOtticoGra * Math.PI / 180;

    DistanzaConsigliata = LatoMaggiore * Math.cos(angoloConoOtticoRad / 2);

    if (PPI != 0)
    {
        PixelOri = (LatoOri + 2 * Abbondanza) / 2.54 * PPI;
        PixelVer = (LatoVer + 2 * Abbondanza) / 2.54 * PPI;
    }

    return {
        "PPI": PPI.toFixed(0),
        "DISTANZACONSIGLIATA": DistanzaConsigliata.toFixed(0),
        "PIXELORIZZONTALI": PixelOri.toFixed(0),
        "PIXELVERTICALI": PixelVer.toFixed(0)
    };
}

if (typeof module !== 'undefined') {
    module.exports = calcola;
}