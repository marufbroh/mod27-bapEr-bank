// step-1
document.getElementById('btn-withdraw').addEventListener('click', function () {

    // step-2
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawAmmountString = withdrawField.value;
    const withdrawAmmount = parseFloat(withdrawAmmountString);

    // step-3
    const userWithdraw = document.getElementById('user-withdraw');
    const previousWithdrawTotalString = userWithdraw.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    // step-4
    const currentWithdrawTotal = previousWithdrawTotal + withdrawAmmount;
    userWithdraw.innerText = currentWithdrawTotal;

    // step-5
    const userBalance = document.getElementById('user-balance');
    const previousBalanceTotalString = userBalance.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // step-6
    const currentBalanceTotal = previousBalanceTotal - withdrawAmmount;
    userBalance.innerText = currentBalanceTotal;

    // step-7
    withdrawField.value = '';

})