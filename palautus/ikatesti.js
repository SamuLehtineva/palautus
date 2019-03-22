function ika(a){
    if(Number.isNaN(Number(a))){
        throw new Error('ei lukuja');
    }
    if (Number(a)>=18) {
        return true;
    } else {
        return false
    }
}
module.exports = ika;