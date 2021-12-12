function calculateLoan(){
   
    let amount = document.getElementById("amount").value;

    let interestRate = document.getElementById("interest-rate").value;
    
    let months = document.getElementById("months").value;
    
    let loanPayment = document.getElementById("loanPayment")
    
    let interest = (amount * (interestRate * .01)) / months;
    
    let payment = ((amount / months) + interest).toFixed(2);
    
    loanPayment.textContent = `Monthly Payment = $${payment}`;
}

