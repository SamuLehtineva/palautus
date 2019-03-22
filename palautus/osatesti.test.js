const luku = require('./osatesti');

test('suorittaa jakolaskun 6 / 3, tulos 2', () => {
    expect(luku(6, 3)).toBe(2);
});

test('syötteet numeromaisia merkkijonoja', ()=> {
    expect(luku("6","3")).toBe(2);
});
test('syötteet ei numeromaisia merkkijonoja "minna"+"jaakko"', ()=> {
    expect(() => {luku("minna", "jaakko")}).toThrow('ei lukuja');
});
test('Nollalla ei voi jakaa', ()=> {
    expect(() => {luku(5, 0)}).toThrow('Ei voi jakaa nollalla');
});
test('Anna parametrejä', ()=> {
    expect(() => {luku()}).toThrow('ei parametrejä');
});
test('Jakolasku', ()=> {
    expect(luku(10, 2)).toBe(5);
});