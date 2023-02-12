// step-1
document.getElementById('btn-deposit').addEventListener('click', function () {

    // step-2
    const depositField = document.getElementById('deposit-field');
    const depositAmmountString = depositField.value;
    const depositAmmount = parseFloat(depositAmmountString);

    // step-3
    const userDeposit = document.getElementById('user-deposit');
    const previousdepositTotalString = userDeposit.innerText;
    const previousdepositTotal = parseFloat(previousdepositTotalString);

    // step-4
    const currentDepositTotal = previousdepositTotal + depositAmmount;
    userDeposit.innerText = currentDepositTotal;

    // step-5
    const userBalance = document.getElementById('user-balance');
    const previousBalanceTotalString = userBalance.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // step-6
    const currentBalanceTotal = previousBalanceTotal + depositAmmount;
    userBalance.innerText = currentBalanceTotal;

    // step-7
    depositField.value = '';
})