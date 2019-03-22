function bus(a){
    if(Number.isNaN(Number(a))){
        throw new Error('ei lukuja');
    }
    let ika = Number(a);
    if (ika<=7) {
        return 0;
    } else if (ika>7 && ika <16) {
        return 1;
    } else if (ika>16 && ika<25) {
        return 1.50;
    } else if (ika>25 && ika<65) {
        return 3;
    } else {
        return 1.5;
    }
}
module.exports = bus;