document.getElementById('fuelForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const distance = parseFloat(document.getElementById('distance').value);
    const consumption = parseFloat(document.getElementById('consumption').value);
    const cost = parseFloat(document.getElementById('cost').value);

    if (isNaN(distance) || isNaN(consumption) || isNaN(cost)) {
        alert('Proszę wypełnić wszystkie pola poprawnymi wartościami.');
        return;
    }

    const fuelNeeded = (distance / 100) * consumption;
    const totalCost = fuelNeeded * cost;

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <p>Potrzebne paliwo: ${fuelNeeded.toFixed(2)} litrów</p>
        <p>Całkowity koszt podróży: ${totalCost.toFixed(2)} zł</p>
    `;
    resultDiv.classList.add('show');
});
