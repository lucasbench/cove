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

    // Calculate runner's tip from food sales
    const foodRunnerTip = (foodSales * 5) / 100;
    const eachRunnerGets = numRunners > 0 ? foodRunnerTip / numRunners : 0;

    // Calculate busser's share
    let busserShare = 0;
    if (numBussers === 1) {
        busserShare = (tipOut * 8) / 100;
    } else if (numBussers === 2) {
        busserShare = (tipOut * 15) / 100;
    }
    const eachBusserGets = numBussers > 0 ? busserShare / numBussers : 0;

    // Calculate the remaining tips after deducting busser share and foodRunnerTip from tipOut
    const remainingTips = tipOut - busserShare - foodRunnerTip;

    // Calculate total points for bartenders and barbacks
    const totalPoints = (numBartenders > 0 ? numBartenders : 0) + (numBarbacks > 0 ? (numBarbacks * 0.5) : 0);

    // Calculate the value of one point
    const pointValue = totalPoints > 0 ? remainingTips / totalPoints : 0;

    // Calculate each bartender's and barback's share
    const eachBartenderGets = numBartenders > 0 ? pointValue : 0;
    const eachBarbackGets = numBarbacks > 0 ? pointValue * 0.5 : 0;

    // Display the tip out amounts
    document.getElementById('barTipOutDisplay').innerHTML = `Total Tip Out (18% of Net Sales): $${tipOut.toFixed(2)}`;
    document.getElementById('foodTipOutDisplay').innerHTML = `Total Tip Out (5% of Food Sales): $${foodRunnerTip.toFixed(2)}`;

    // Display results
    const output = `
        <p>Each Busser Gets: $${eachBusserGets.toFixed(2)}</p>
        <p>Each Runner Gets: $${eachRunnerGets.toFixed(2)}</p>
        <p>Each Bartender Gets: $${eachBartenderGets.toFixed(2)}</p>
        <p>Each Barback Gets: $${eachBarbackGets.toFixed(2)}</p>
    `;

    document.getElementById('output').innerHTML = output;
}
