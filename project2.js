var button = document.getElementById('button');
button.addEventListener("click", function() {
    var totalMarksInputs = document.querySelectorAll(".subcard:nth-child(2) .sub input[type='number']");
    var marksObtainedInputs = document.querySelectorAll(".subcard:nth-child(1) .sub input[type='number']");

    var totalMarks = 0;
    var marksObtained = 0;
    var isValidInput = true;

    for (var i = 0; i < totalMarksInputs.length; i++) {
        totalMarks += parseFloat(totalMarksInputs[i].value) || 0;
        marksObtained += parseFloat(marksObtainedInputs[i].value) || 0;

 
        if (parseFloat(marksObtainedInputs[i].value) > parseFloat(totalMarksInputs[i].value)) {
            isValidInput = false;
            break; 
        }
    }

   
    if (!isValidInput) {
        alert("Please enter valid input where marks obtained are less than or equal to total marks.");
        var resultCard = document.querySelector('.result-card');
        resultCard.style.display = 'none';
        return; 
    }

  
    var percentage = (marksObtained / totalMarks) * 100;

 
    var resultPercentageElement = document.getElementById('resultPercentage');
    resultPercentageElement.textContent = "Your percentage is: " + percentage.toFixed(2) + "%";

 
    var resultCard = document.querySelector('.result-card');
    resultCard.style.display = 'block';
});
