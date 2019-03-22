function sum(a, b=0) {
    //console.log(a);
    if(a === undefined || a === null){
        throw new Error('ei parametrejä');
    }
    let summa = Number(a)+Number(b);
    //console.log(summa);
    if(Number.isNaN(summa)){
        throw new Error('ei lukuja');
    }
    return summa;
}
module.exports = sum;