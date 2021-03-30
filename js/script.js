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
    var ingredientItems = document.getElementsByClassName('ingredient-check');
    var discountCode = document.getElementsByName('discount-code').values;

    // ________________________________
    // Calculate totalPrice with a FOR Loop that checks whether or not additional extras
    // were selected and adds their price to the totalPrice.

    for ( var i = 0; i < ingredientItems.length; i++) {

        // ________________________________
        // Splitting ingredientItem |checked boolean| and |value| 
        // into two(2) variables for ease of use.
        var ingredientItemCheck = ingredientItems[i].checked;
        var ingredientItemPrice = parseInt( ingredientItems[i].value );

        // ________________________________
        // If the item is check it will add it's price to the totalPrice
        if ( ingredientItemCheck == true ) {

            totalPrice += ingredientItemPrice;
        }

    }

    // ________________________________
    // Subtract from totalPrice the discount by checking the discount code input
    // by the user.


    // ________________________________
    // Print totalPrice

    document.getElementById('price-output').innerHTML = '€ ' + totalPrice;

});