const hinta = require('./hinta');
//describe.skip('bus testit', ()=>{
test('halpa', ()=> {
    expect(hinta(100, 0.24)).toBe(129.26315789473685);
});
test('kallis', ()=> {
    expect(hinta(230, 0.24)).toBe(279.55555555555554);
});
test('luxus', ()=> {
    expect(hinta(550, 0.24)).toBe(671.0588235294118);
});
//})