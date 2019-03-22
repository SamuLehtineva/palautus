const sum = require('./sum');

//describe.skip('sum testit', ()=>{
test('suorittaa yhteenlaskun 1 + 2, tulos 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('syötteet numeromaisia merkkijonoja', ()=> {
    expect(sum("1","2")).toBe(3);
});

test('syötteet ei numeromaisia merkkijonoja "minna"+"jaakko"', ()=> {
    expect(() => {sum("minna", "jaakko")}).toThrow('ei lukuja');
});

test('Vain yksi parametri annettu, palautetaan luku itse', ()=> {
    expect(sum(4)).toBe(4);
});

test('Anna parametrejä', ()=> {
    expect(() => {sum()}).toThrow('ei parametrejä');
});
//})