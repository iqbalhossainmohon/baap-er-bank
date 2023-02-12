document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    // console.log(typeof newWithdrawAmount);
    
    // step:- 7
    withdrawField.value = '';

    if(isNaN(newWithdrawAmount)){
        alert('Please provide a valid number');
        return;
    }

    const withdrawTotalElement = document.getElementById('total-withdraw');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
    // console.log(typeof previousWithdrawTotal);


    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    // console.log(typeof previousBalanceTotal);

    if(newWithdrawAmount> previousBalanceTotal){
        alert('Baap er Bank e eto Taka nai');
        return;
    }

    const currentWithdrawAmount = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawAmount;

    const currentTotalBalance = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = currentTotalBalance;

})