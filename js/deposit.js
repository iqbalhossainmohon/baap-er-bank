// step-1: add event listener to the deposit button 
document.getElementById('btn-deposit').addEventListener('click', function(){
    // step-2: get the deposit amount from the deposit input field
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    // console.log(typeof newDepositAmount);

    // step-7: clear the deposit field
    depositField.value = '';

    if(isNaN(newDepositAmount)){
        alert('Please provide a valid number');
        return;
    }
    
    // step-3: get the current deposit total amount 
    const depositTotalElement = document.getElementById('total-deposit');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    // console.log(typeof previousDepositTotal);

    // step-4: add number to set the total deposit
    const currentDepositAmount = previousDepositTotal + newDepositAmount;

    depositTotalElement.innerText = currentDepositAmount;

    // step-5: get ballance current total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // step-6: calculate current total balance
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotalElement.innerText = currentBalanceTotal;

})