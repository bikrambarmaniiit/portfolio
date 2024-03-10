function calculateTip() {
    var billAmount = document.getElementById("billAmount").value;
    var tipPercentage = document.getElementById("tipPercentage").value;
    
    if (!billAmount || !tipPercentage) {
        alert("Please enter both bill amount and tip percentage.");
        return;
    }
    
    var tipAmount = (billAmount * (tipPercentage / 100)).toFixed(2);
    
    document.getElementById("tipAmount").innerText = "Tip Amount: ₹" + tipAmount;
}
