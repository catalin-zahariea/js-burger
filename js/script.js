// ----------------------------------------------------------------
// Variables

var btnPriceCalculate = document.getElementById('btn-price-calculate');

// ----------------------------------------------------------------
// Function | btnPriceCalculate | Function
// 
// The function will calculate total price for the desidered burger considering 
// any extra topping added. It will sum extras through a |checked| verification.

btnPriceCalculate.addEventListener('click', function () {

    // ________________________________
    // Variables

    var totalPrice = 50;
    

    // ________________________________
    // Print totalPrice

    document.getElementById('price-output').innerHTML = '€ ' + totalPrice;

});