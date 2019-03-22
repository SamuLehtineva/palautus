function luku(a, b) {
    //console.log(a);
    if(b == 0) {
        throw new Error('Ei voi jakaa nollalla');
    }
    if(a === undefined || a === null){
        throw new Error('ei parametrejä');
    }
    let tulos = Number(a) / Number(b);
    //console.log(tulos);
    if(Number.isNaN(tulos)){
        throw new Error('ei lukuja');
    }
    return tulos;
}
module.exports = luku;