document.getElementById('fuelForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const distance = parseFloat(document.getElementById('distance').value);
    const fuel = parseFloat(document.getElementById('fuel').value);
    const cost = parseFloat(document.getElementById('cost').value);

    if (isNaN(distance) || isNaN(fuel) || isNaN(cost)) {
        alert('Proszę wypełnić wszystkie pola poprawnymi wartościami.');
        return;
    }

    const consumption = (fuel / distance) * 100;
    const totalCost = fuel * cost;

    document.getElementById('result').innerHTML = `
        <p>Średnie zużycie paliwa: ${consumption.toFixed(2)} l/100km</p>
        <p>Całkowity koszt podróży: ${totalCost.toFixed(2)} zł</p>
    `;
});
