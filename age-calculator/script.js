document.addEventListener("DOMContentLoaded", function() {
    const calculateButton = document.getElementById("calculateButton");
    const resultElement = document.getElementById("result");

    calculateButton.addEventListener("click", calculateAge);

    function calculateAge() {
        const day = parseInt(document.getElementById("dob").value);
        const month = parseInt(document.getElementById("month").value) - 1; // JavaScript months are 0-based
        const year = parseInt(document.getElementById("year").value);
        
        if (isNaN(day) || isNaN(month) || isNaN(year)) {
            resultElement.textContent = "Please enter a valid date of birth.";
            return;
        }

        const currentDate = new Date();
        const dob = new Date(year, month, day);
        const ageInMilliseconds = currentDate - dob;
        const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);
        
        if (ageInYears < 0) {
            resultElement.textContent = "Birthdate is in the future. Please enter a valid date.";
        } else {
            resultElement.textContent = `Your age is approximately ${ageInYears.toFixed(2)} years.`;
        }
    }
});

