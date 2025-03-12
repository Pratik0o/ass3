document.getElementById("submit").addEventListener("click", function() {
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const email = document.getElementById("email").value;
    const address = document.getElementById("address").value;
    const city = document.getElementById("city").value;
    const province = document.getElementById("province").value;
    const membership = document.querySelector("input[name='membership']:checked").value;
    
    document.getElementById("output").innerHTML = `
        <p>Full Name: ${firstName} ${lastName}</p>
        <p>Email: ${email}</p>
        <p>Address: ${address}, ${city}, ${province}</p>
        <p>Membership: ${membership}</p>
    `;
});

document.getElementById("calculate").addEventListener("click", function() {
    let numbers = document.getElementById("numbers").value.trim().split(/\s+/).map(Number);
    if (numbers.some(isNaN)) {
        alert("Please enter valid numbers separated by spaces.");
        return;
    }
    
    let result;
    let operation = document.querySelector("input[name='operation']:checked").value;
    switch (operation) {
        case "sum": result = numbers.reduce((a, b) => a + b, 0); break;
        case "avg": result = numbers.reduce((a, b) => a + b, 0) / numbers.length; break;
        case "max": result = Math.max(...numbers); break;
        case "min": result = Math.min(...numbers); break;
    }
    
    document.getElementById("result").textContent = `Result: ${result}`;
});
