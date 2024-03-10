
button=document.getElementById("button");
button.addEventListener("click", function() {
    var height = parseFloat(document.querySelector(".input").value);
    var weight = parseFloat(document.querySelectorAll("input")[1].value);

    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        alert("Please enter valid height and weight values.");
        return;
    }

    var bmi = weight / Math.pow(height / 100, 2);

   
    document.getElementById("result").innerText = "Your BMI is: " + bmi.toFixed(2);
    document.querySelector(".result-card").style.display = "block";
});
