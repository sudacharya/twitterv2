import abbreviateNumber from "./abbreviateNumber";

test('properly abbreviate number', () => {
  expect(abbreviateNumber(Math.floor(Math.random() * 10000))).toMatch(/([0-9]*[.])?[0-9]?[KMBT]/g);
});

