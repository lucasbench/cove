function calculateBarTips() {
    const netSales = parseFloat(document.getElementById('netSales').value);
    const foodSales = parseFloat(document.getElementById('foodSales').value);
    const numBussers = parseInt(document.getElementById('numBussers').value, 10);
    const numRunners = parseInt(document.getElementById('numRunners').value, 10);
    const numBartenders = parseInt(document.getElementById('numBartenders').value, 10);
    const numBarbacks = parseInt(document.getElementById('numBarbacks').value, 10);

    if (isNaN(netSales) || isNaN(foodSales) || isNaN(numBussers) || isNaN(numRunners) || isNaN(numBartenders) || isNaN(numBarbacks)) {
        alert('Please enter valid numbers in all fields.');
        return;
    }

    // Calculate total tips from net sales
    const tipOut = (netSales * 18) / 100;

    // Calculate busser's share
    let busserShare = 0;
    if (numBussers === 1) {
        busserShare = (tipOut * 8) / 100;
    } else if (numBussers === 2) {
        busserShare = (tipOut * 15) / 100;
    }
    const eachBusserGets = numBussers ? busserShare / numBussers : 0;

    // Calculate runner's tip from food sales
    const foodRunnerTip = (foodSales * 5) / 100;
    const eachRunnerGets = numRunners ? foodRunnerTip / numRunners : 0;
    
    // Deduct busser share and foodRunnerTip from tipOut
    const remainingForBartenders = tipOut - busserShare - foodRunnerTip;
    
    // Calculate remaining tips for bartenders
    const eachBartenderGets = numBartenders ? remainingForBartenders / numBartenders : 0;

    // Calculate barback's share as half of bartender's share
    const eachBarbackGets = numBarbacks ? (eachBartenderGets / 2) : 0;

    // Display results
    const output = `
        <p>Each Busser Gets: $${eachBusserGets.toFixed(2)}</p>
        <p>Each Runner Gets: $${eachRunnerGets.toFixed(2)}</p>
        <p>Each Bartender Gets: $${eachBartenderGets.toFixed(2)}</p>
        <p>Each Barback Gets: $${eachBarbackGets.toFixed(2)}</p>
    `;

    document.getElementById('output').innerHTML = output;
}


