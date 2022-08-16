// add event listener for deposite button
document.getElementById('deposite-btn').addEventListener('click', () => {
    // Set user total deposite balances
    const userInputElm = document.getElementById('user-deposite');
    const userInputAmountString = userInputElm.value;
    const userInputAmountFloat = parseFloat(userInputAmountString);

    // clear input field
    userInputElm.value = '';

    // error handling
    if ((isNaN(userInputAmountFloat) === true) || (userInputAmountFloat < 0)){
        alert('Please enter valid number')
        return;
    }

    const depositeTotalElm = document.getElementById('deposite-total');
    const depositeTotalAmountString = depositeTotalElm.innerText;
    const depositeTotalAmountFloat = parseFloat(depositeTotalAmountString);

    const userTotalDeposite = userInputAmountFloat + depositeTotalAmountFloat;
    depositeTotalElm.innerText = userTotalDeposite;

   
    // calculate user total balance after deposite
    const totalBalanceElm = document.getElementById('balance-total');
    const totalBalanceString = totalBalanceElm.innerText;
    const totalBalanceFloat = parseFloat(totalBalanceString);

    const userTotalBankBalance = totalBalanceFloat + userInputAmountFloat;
    totalBalanceElm.innerText = userTotalBankBalance;

    // clear input field
    userInputElm.value = '';
});

// add event listener for withdraw button
document.getElementById('withdraw-btn').addEventListener('click', () => {
    // Set user total withdraw balances
    const userInputElm = document.getElementById('user-withdraw');
    const userInputAmountString = userInputElm.value;
    const userInputAmountFloat = parseFloat(userInputAmountString);

    // clear input field
    userInputElm.value = '';

    // error handling
    if ((isNaN(userInputAmountFloat) === true) || (userInputAmountFloat < 0)){
        alert('Please enter valid number')
        return;
    }

    const withdrawTotalElm = document.getElementById('withdraw-total');
    const withdrawTotalAmountString = withdrawTotalElm.innerText;
    const withdrawTotalAmountFloat = parseFloat(withdrawTotalAmountString);

    // calculate user total balance after withdraw
    const totalBalanceElm = document.getElementById('balance-total');
    const totalBalanceString = totalBalanceElm.innerText;
    const totalBalanceFloat = parseFloat(totalBalanceString);

    // error handling
    if (userInputAmountFloat > totalBalanceFloat){
        alert(`Sorry, you can't withdraw more than your total balance`)
        return;
    }

    const userTotalWithdraw = userInputAmountFloat + withdrawTotalAmountFloat;
    withdrawTotalElm.innerText = userTotalWithdraw;

    const userTotalBankBalance = totalBalanceFloat - userInputAmountFloat;
    totalBalanceElm.innerText = userTotalBankBalance;
});