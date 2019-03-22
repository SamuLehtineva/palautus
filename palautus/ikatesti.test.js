const ika = require('./ikatesti');
//describe.skip('ika testit', ()=>{
test('Tarkista ikä', ()=> {
    expect(ika(18)).toBe(true);
});

test('Ikä varmistettu', ()=> {
    expect(ika(25)).toBe(true);
});

test('Alaikäinen', ()=> {
    expect(ika(15)).toBe(false);
});

test('syötteet numeromaisia merkkijonoja', ()=> {
    expect(ika("20")).toBe(true);
});
test('Ei lukuja', ()=> {
    expect(() => {ika("minna")}).toThrow('ei lukuja');
});
//})