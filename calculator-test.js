it('should calculate the monthly rate correctly', function () {
  const result = calculateMonthlyPayment({
    amount: 10000,
    years: 5,
    rate: 0.05,
  });
  expect(result).toEqual('188.71');
});

it('should return a result with 2 decimal places', function () {
  const result = calculateMonthlyPayment({
    amount: 10000,
    years: 5,
    rate: 0.05,
  });
  expect(result).toEqual('188.71');
});

it('should return a string', function () {
  const result = calculateMonthlyPayment({
    amount: 10000,
    years: 5,
    rate: 0.05,
  });
  expect(result).toEqual('188.71');
});
