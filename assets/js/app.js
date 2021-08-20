
const total = document.getElementById('total');

/* ========== SetCode Function ============ */
function setCost(product, price) {
    const setProductCost = document.getElementById(product + '-cost');
    setProductCost.innerText = price;
}

/* ========== productCost Function ============ */
function productCost(product) {
    const productCostText = document.getElementById(product + '-cost');
    const productAmout = Number(productCostText.innerText);
    return productAmout;
}

/* ========== subTotalPrice Function ============ */
const subTotal = document.getElementById('subTotal');
function subTotalPrice() {
    
    const totalAmount = productCost('best') + productCost('storage') + productCost('charge') + productCost('memory'); /* ========== productCost Function Call and Sum Total Cost============ */
    subTotal.innerText = totalAmount;
    total.innerText = totalAmount;
}

/*=============================
     memory-item 
===============================*/
document.querySelector('.memory-item').addEventListener('click', function (event) {
    if (event.target.id == '8gb-memory') {

        setCost('memory', 0);

    } else {

        setCost('memory', 180);
    }
    /* ========== subTotalPrice Function Call============ */
    subTotalPrice();
})

/*=============================
     storage-item
===============================*/

document.querySelector('.storage-item').addEventListener('click', function (event) {
    if (event.target.id == "256gb") {

        setCost('storage', 0);
       
    } else if (event.target.id == "512gb") {

        setCost('storage', 100);
      
    } else {

        setCost('storage', 180);

    }
    /* ========== subTotalPrice Function Call============ */
    subTotalPrice();
})

/*=============================
     free-item
===============================*/

document.querySelector('.free-cost').addEventListener('click', function (event) {
    if (event.target.id == "free") {

        setCost('charge', 0);
        
    } else {

         setCost('charge', 20);
    }
    /* ========== subTotalPrice Function Call============ */
    subTotalPrice();
})

/*=============================
=========== Discount Cupon
===============================*/
const inputFild = document.getElementById('cupon-fild');
document.getElementById('apply').addEventListener('click', function () {

    if (isNaN(inputFild.value)) {

        if (inputFild.value == 'stevekaku') {

            const discount = (Number(subTotal.innerText) *20)/100;
            total.innerText = Number(subTotal.innerText)-discount;
            inputFild.value = '';
       }
    }

    inputFild.value = '';
})
