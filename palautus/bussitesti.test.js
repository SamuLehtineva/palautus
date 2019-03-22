const bus = require('./bussi');
//describe.skip('bus testit', ()=>{
test('vauva', ()=> {
    expect(bus(0)).toBe(0);
});
test('koululainen', ()=> {
    expect(bus(12)).toBe(1);
});
test('nuori', ()=> {
    expect(bus(20)).toBe(1.5);
});
test('aikuinen', ()=> {
    expect(bus(30)).toBe(3);
});
test('vanhus', ()=> {
    expect(bus(70)).toBe(1.5);
});
//})