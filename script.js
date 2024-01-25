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

function calculateTip(bill, quality){
    if (quality === 'Great'){
        bill * .2
    } else if (quality === 'Good'){
        return bill *.15
    } else if (quality === 'Poor'){
        return bill *.10
    }
}

function calculateTotalBill(bill, tip){
return bill + tip 
}

function calcAmtPerPers (totalBill, numOfPpl){
    return totalBill / numOfPpl
}