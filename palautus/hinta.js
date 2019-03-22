function hinta(a, b){
    if(Number.isNaN(Number(a))){
        throw new Error('ei lukuja');
    }
    let price = Number(a);
    let alv = Number(b) * 100;
    if(price>=100 && price<200) {
        price = price/0.95;
        price2 = price + alv;
        return price2;
    } else if (price>=201 && price<500) {
        price = price/0.90;
        price2 = price + alv;
        return price2;
    } else {
        price = price/0.85;
        price2 = price + alv;
        return price2;
    }
}
module.exports = hinta;