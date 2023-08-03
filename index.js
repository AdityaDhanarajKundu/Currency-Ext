const amountEl = document.getElementById("amount");
const haveEl = document.getElementById("have");
const wantEl = document.getElementById("want");
const convertEl = document.getElementById("convert");
const resultEl = document.getElementById("result");

const api_key="RJ+rtM6A+dytAHo6DfcA0Q==L6oUfNfUrX3dlqCp";

//adding function to the button click
convertEl.addEventListener("click",()=>{
    let amountTotal = amountEl.value; //to get the value present in the amountEl
    let haveTotal = haveEl.value;
    let wantTotal = wantEl.value;
    let api_url = `https://api.api-ninjas.com/v1/convertcurrency?want=${wantTotal}&have=${haveTotal}&amount=${amountTotal}`;

    fetch(api_url,{
        method: 'GET',
        headers:{
            'X-Api-Key': api_key
        }
    })
    .then(response=>response.json())
    .then(data=>{
        const rate = data.exchange_rate;
        const result = amountTotal*rate;
        resultEl.innerHTML=`${amountTotal} ${haveTotal} = ${result.toFixed(2)} ${wantTotal}`;
    })
    .catch(error=>{
        console.error("Request Failed, ",error);
        resultEl.textContent="An error occured, please try again";
    })
});