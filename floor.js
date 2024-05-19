function calculateFloorTips() {
    console.log('calculateFloorTips called');

    const netSales = parseFloat(document.getElementById('netSales').value);
    const liquorSales = parseFloat(document.getElementById('liquorSales').value);
    const numBussers = parseInt(document.getElementById('numBussers').value, 10);
    const numRunners = parseInt(document.getElementById('numRunners').value, 10);
    const numServers = parseInt(document.getElementById('numServers').value, 10);
    const numBartenders = parseInt(document.getElementById('numBartenders').value, 10);

    if (isNaN(netSales) || isNaN(liquorSales) || isNaN(numBussers) || isNaN(numRunners) || isNaN(numServers) || isNaN(numBartenders)) {
        alert('Please enter valid numbers in all fields.');
        return;
    }

    const tipOut = (netSales * 18) / 100;
    const busserShare = (tipOut * 20) / 100;
    const eachBusserGets = numBussers ? busserShare / numBussers : 0;

    const runnerShare = (tipOut * 18) / 100;
    const eachRunnerGets = numRunners ? runnerShare / numRunners : 0;

    const remainingForServers = tipOut - busserShare - runnerShare;
    const eachServerGets = numServers ? remainingForServers / numServers : 0;

    const bartenderTip = (liquorSales * 5) / 100;
    const eachBartenderGets = numBartenders ? bartenderTip / numBartenders : 0;

    const output = `
        <p>Each Busser Gets: $${eachBusserGets.toFixed(2)}</p>
        <p>Each Runner Gets: $${eachRunnerGets.toFixed(2)}</p>
        <p>Each Server Gets: $${eachServerGets.toFixed(2)}</p>
        <p>Each Bartender Gets: $${eachBartenderGets.toFixed(2)}</p>
    `;

    document.getElementById('output').innerHTML = output;
}
