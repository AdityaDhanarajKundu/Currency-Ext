const amountEl = document.getElementById("amount");
const haveEl = document.getElementById("have");
const wantEl = document.getElementById("want");
const convertEl = document.getElementById("convert");
const resultEl = document.getElementById("result");

const api_key = "RJ+rtM6A+dytAHo6DfcA0Q==L6oUfNfUrX3dlqCp";

// Adding function to the button click
convertEl.addEventListener("click", () => {
    let amountTotal = amountEl.value;
    let haveTotal = haveEl.value;
    let wantTotal = wantEl.value;
    let api_url = `https://api.api-ninjas.com/v1/convertcurrency?want=${wantTotal}&have=${haveTotal}&amount=${amountTotal}`;

    fetch(api_url, {
        method: 'GET',
        headers: {
            'X-Api-Key': api_key,
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(result => {
        resultEl.textContent = "";
        console.log(result);
        resultEl.textContent = `${result.old_amount} ${result.old_currency} = ${result.new_amount} ${result.new_currency}`;
    })
    .catch(error => {
        console.error('Error:', error);
        resultEl.textContent = "Can't get the exchange rates, please try again";
    });
}); // Remove the extra parenthesis here
