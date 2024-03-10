function calculatePayroll() {
    const employeeName = document.getElementById('employeeName').value;
    const hoursWorked = parseFloat(document.getElementById('hoursWorked').value);
    const hourlyWage = parseFloat(document.getElementById('hourlyWage').value);

    const totalPay = hoursWorked * hourlyWage;

    const payrollInfo = document.getElementById('payrollInfo');
    payrollInfo.innerHTML = `
        <h2>Payroll Information for ${employeeName}</h2>
        <p>Hours Worked: ${hoursWorked}</p>
        <p>Hourly Wage: ₹${hourlyWage}</p>
        <p>Total Pay: ₹${totalPay.toFixed(2)}</p>
    `;
    
    payrollInfo.style.display = 'block'; 
}
