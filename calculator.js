window.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('calc-form');
  if (form) {
    setupIntialValues();
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +document.getElementById('loan-amount').value,
    years: +document.getElementById('loan-years').value,
    rate: +document.getElementById('loan-rate').value,
  };
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  let loanAmount = document.getElementById('loan-amount');
  let loanYears = document.getElementById('loan-years');
  let loanRate = document.getElementById('loan-rate');

  loanAmount.defaultValue = 10000;
  loanYears.defaultValue = 5;
  loanRate.defaultValue = 0.05;

  const result = calculateMonthlyPayment(getCurrentUIValues());
  updateMonthly(result);
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const result = calculateMonthlyPayment(getCurrentUIValues());
  updateMonthly(result);
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const i = values.rate / 12;
  const n = values.years * 12;
  const numerator = values.amount * i;
  const denominator = 1 - (1 + i) ** -n;
  const monthlyPmt = (numerator / denominator).toFixed(2).toString();
  return monthlyPmt;
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  let monthlyPmt = document.getElementById('monthly-payment');
  monthlyPmt.innerText = monthly;
}
