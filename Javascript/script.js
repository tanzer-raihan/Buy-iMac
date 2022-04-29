
function handleMemoryPrice(capacity) {
    const memoryCostText = document.getElementById('memoryCost').innerText;

    if (capacity == '8gb') {
        document.getElementById('memoryCost').innerText = 0;
    }
    if (capacity == '16gb') {
        document.getElementById('memoryCost').innerText = 150;
    }


}
function handleStoragePrice(capacity) {
    const storageCost = document.getElementById('storageCost').innerText;
    if (capacity == '128gb') {
        document.getElementById('storageCost').innerText = 0;
    }
    if (capacity == '512gb') {
        document.getElementById('storageCost').innerText = 250;
    }
    if (capacity == '1tb') {
        document.getElementById('storageCost').innerText = 350;
    }
}
function handleDeliveryCost(quality) {
    if (quality == 'free') {
        document.getElementById('deliveryCost').innerText = 0;
    }
    if (quality == 'prime') {
        document.getElementById('deliveryCost').innerText = 20;
    }
}
// -------------handle memory cost------------
document.getElementById('memory8gb').addEventListener('click', function () {
    handleMemoryPrice('8gb');
    handleTotalCost();
})
document.getElementById('memory16gb').addEventListener('click', function () {
    handleMemoryPrice('16gb');
    handleTotalCost();
})

//-------------handle storage cost--------------

document.getElementById('128gb').addEventListener('click', function () {
    handleStoragePrice('128gb');
    handleTotalCost();
})
document.getElementById('512gb').addEventListener('click', function () {
    handleStoragePrice('512gb');
    handleTotalCost();
})
document.getElementById('1tb').addEventListener('click', function () {
    handleStoragePrice('1tb');
    handleTotalCost();
})
//------------handle delivery cost-------------
document.getElementById('free').addEventListener('click', function () {
    handleDeliveryCost('free');
    handleTotalCost();
})
document.getElementById('prime').addEventListener('click', function () {
    handleDeliveryCost('prime');
    handleTotalCost();
})
//-----------handle total cost--------------
function handleTotalCost() {
    const bestPriceText = document.getElementById('bestPrice').innerText;
    const bestPrice = parseInt(bestPriceText);
    const memoryCostText = document.getElementById('memoryCost').innerText;
    const memoryCost = parseInt(memoryCostText);
    const storageCostText = document.getElementById('storageCost').innerText;
    const storageCost = parseInt(storageCostText);
    const deliveryCostText = document.getElementById('deliveryCost').innerText;
    const deliveryCost = parseInt(deliveryCostText);
    const totalCost = bestPrice + memoryCost + storageCost + deliveryCost;
   
    document.getElementById('totalCost').innerText = totalCost;
    document.getElementById('total').innerText = totalCost;
}
function handleDiscount() {

    const input=document.getElementById('input');
    let inputText=input.value;
    if(inputText=='stevekaku'){
        const totalText=document.getElementById('total').innerText;
        const total=parseInt(totalText);
        const discount=total*.2;
        const totalCost=total-discount;
        document.getElementById("total").innerText=totalCost;
        document.getElementById('input').value='';
        document.getElementById('invalid').innerText='';
    }
    else if(inputText==''){
        document.getElementById('invalid').innerText='No Promo Code Applied!'
    }
    else{
        document.getElementById('invalid').innerText='Invalid Promo Code!'
        
        document.getElementById('input').value='';

    }
   

}

