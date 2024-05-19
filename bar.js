function calculateBarTips() {
    console.log('calculateBarTips called');

    const netSales = parseFloat(document.getElementById('netSales').value);
    const foodSales = parseFloat(document.getElementById('foodSales').value);
    const busserPercent = parseFloat(document.getElementById('busserPercent').value);
    const runnerPercent = parseFloat(document.getElementById('runnerPercent').value);
    const bartenderPercent = parseFloat(document.getElementById('bartenderPercent').value);
    const barbackPercent = parseFloat(document.getElementById('barbackPercent').value);

    if (isNaN(netSales) || isNaN(foodSales) || isNaN(busserPercent) || isNaN(runnerPercent) || isNaN(bartenderPercent) || isNaN(barbackPercent)) {
        alert('Please enter valid numbers in all fields.');
        return;
    }

    const tipOut = (netSales * 18) / 100;
    const busserShare = (tipOut * busserPercent) / 100;
    const bartenderShare = (tipOut * bartenderPercent) / 100;
    const barbackShare = (bartenderShare * barbackPercent) / 100;

    const foodRunnerTip = (foodSales * runnerPercent) / 100;
    const runnerShare = foodRunnerTip;

    const output = `
        <p>Bussers Get: $${busserShare.toFixed(2)}</p>
        <p>Bartenders Get: $${bartenderShare.toFixed(2)}</p>
        <p>Barbacks Get: $${barbackShare.toFixed(2)}</p>
        <p>Runners Get: $${runnerShare.toFixed(2)}</p>
    `;

    document.getElementById('output').innerHTML = output;
}
