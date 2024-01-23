function calculateAndDisplay(){
    let bill = parseFloat(document.getElementById('totalBill').value)
    let numOfPpl = parseInt(document.getElementById('numOfPeople').value)
    let serviceQuality = document.getElementById('serviceQuality').value

    //Calculate tip

    let tip = calculateTip(bill, serviceQuality)
    let totalBill = calculateTotalBill(bill, tip)
    let amtPerPers = calcAmtPerPers(totalBill, numOfPpl)

    //Display the Results in the HTML
    document.getElementById('tipResult').innerText = 'Tip: $' + tip.toFixed(2)
    document.getElementById('totalBillResult').innerText = 'Total: $' + tip.toFixed(2)
    document.getElementById('amtPerPersonResult').innerText = 'Amount per person: $' + tip.toFixed(2)

}