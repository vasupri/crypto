function convertCrypto() {
    const cryptoInput = document.getElementById('cryptoInput').value;
    const cryptoSelect = document.getElementById('cryptoSelect').value;
    const fiatSelect = document.getElementById('fiatSelect').value;

    fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${cryptoSelect}&vs_currencies=${fiatSelect}`)
        .then(response => response.json())
        .then(data => {
            const priceInFiat = data[cryptoSelect][fiatSelect.toLowerCase()];
            const result = cryptoInput * priceInFiat;
            document.querySelector('.result').style.display = '';   
            document.getElementById('conversionValue').textContent = `1 ${cryptoSelect.toUpperCase()} = ${priceInFiat} ${fiatSelect.toUpperCase()}`;
            document.getElementById('conversionResult').textContent = `${result.toFixed(2)} ${fiatSelect.toUpperCase()}`;
        })
        .catch(error => console.error('Error fetching data:', error));
}