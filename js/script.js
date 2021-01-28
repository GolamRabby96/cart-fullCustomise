document.getElementById('phone-increase').addEventListener('click', function(){
    countAndPrice('phone', 1219, true);
});
document.getElementById('phone-decrease').addEventListener('click', function(){
    countAndPrice('phone', 1219, false)
});
document.getElementById('case-increase').addEventListener('click', function(){
    countAndPrice('case', 59, true);
});

document.getElementById('case-decrease').addEventListener('click', function(){
    countAndPrice('case', 59, false);
});


function countAndPrice(product, price, isIncrease){
    const productInput = document.getElementById(product+'-count');
    const productCount = parseInt(productInput.value);
    let productNewCount = productCount;
    if(isIncrease){
        productNewCount = productCount + 1;
    }else if(!isIncrease && productCount > 0){
        productNewCount = productCount -1;
    }
    productInput.value = productNewCount;
    const productTotal = productNewCount * price;
    document.getElementById(product+'-total').innerText = productTotal;
    calculateTotal()
}

function calculateTotal(){
    const phoneCount = getInputValue('phone');
    const caseCount = getInputValue('case');
    const subTotal = phoneCount * 1219 + caseCount * 59;
    const taxTotal = Math.round(subTotal * 0.1);
    const totalPrice = subTotal + taxTotal;

    document.getElementById('subTotal').innerText = subTotal;
    document.getElementById('tax-calculate').innerText = taxTotal;
    document.getElementById('total-price').innerText = totalPrice;

}

function getInputValue(product){
    const productInput = document.getElementById(product+'-count');
    const productCount = parseInt(productInput.value);
    return productCount;
}

document.getElementById('phone-remove').addEventListener('click', function(){
    productRemove('phone');
})
document.getElementById('case-remove').addEventListener('click', function(){
    productRemove('case');
})

function productRemove(product){
    document.getElementById(product+'-count').value='0';
    countAndPrice(product, 0, false);
    document.getElementById(product+'-block').style.display='none'
}