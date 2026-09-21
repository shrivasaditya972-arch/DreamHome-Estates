function calculateEMI() {
    let principal = parseFloat(document.getElementById('loanAmount').value);
    let rateOfInterest = parseFloat(document.getElementById('interestRate').value) / 12 / 100;
    let tenureMonths = parseFloat(document.getElementById('tenureYears').value) * 12;

    if (principal > 0 && rateOfInterest > 0 && tenureMonths > 0) {
        let emi = (principal * rateOfInterest * Math.pow(1 + rateOfInterest, tenureMonths)) / (Math.pow(1 + rateOfInterest, tenureMonths) - 1);
        document.getElementById('emiResult').innerText = "Monthly EMI: $" + Math.round(emi).toLocaleString() + " / month";
    } else {
        document.getElementById('emiResult').innerText = "Please enter valid numbers";
    }
}

// Mobile Menu Toggle Logic
document.addEventListener("DOMContentLoaded", () => {
    const mobileMenu = document.getElementById('mobile-menu');
    const navList = document.querySelector('.nav-list');

    if (mobileMenu) {
        mobileMenu.addEventListener('click', () => {
            navList.classList.toggle('active');
        });
    }
});