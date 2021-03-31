// ----------------------------------------------------------------
// Variables

var btnPriceCalculate = document.getElementById('btn-price-calculate');
var btnCancel = document.getElementById('btn-cancel');



// ----------------------------------------------------------------
// Discount Code Array
// I will be using a custom Function that includes an array with my discount
// codes so that I may call the function inside my btnPriceCalculate function.
// I'm doing this just so I can keep these two elements separated and allow more
// ease of use for the future.

function discountCode () {

    // I used a random text generator for this part.
    var discountCode = [
        'scontone',
        'DKizoMqH',
        'BPqvxxPo',
        'ZIEwrzfI',
        'ZbPOYrPq',
        'ONLNgtCI',
        'xt5Z1R00',
        '4lP0R7RR',
        '6DugQp8L',
        '8inoBUKI',
        'MwW2Mra4',
        'MKOAVjN6',
        'hkOt32iJ',
        'XAOQkxlY',
        '6yAh7Jtb',
        'uUMTyTaU',
        'DINmvzJV',
        'YyUXM4aO',
        'nmxpzfPJ',
        'CU0cDnTV',
        'WXOy6Gsg',
        'yZg2oT9f',
        'W0URnKsU',
        'nq7sHM9M',
        '55HxzMUN',
        'JhuFEOWm',
        'nsKRguVS',
        'IlrXRw7a',
        '3HwUvZ5p',
        'N6tk7cC4',
        'JjeD6Vu7',
        'e2aesjms',
        '1u1Trcf4',
        'skXRvHmt',
        'xQedASgX',
        'NLQEv5w8',
        'gGWdmiFV',
        'hRdtLfYM',
        'JBhUZykl',
        'TyPa05ZR',
        '20KpYBrJ',
        'G2NJUkv3',
        'X7v4WTmF',
        'k35o7bVc',
        'gByKotpn',
        'ztJiZvyy',
        'u54MRPUr',
        'nuIkFysn',
        '5HcW8AP3',
        'A86sKJk7',
        'WzkQ3DHF',
        'S83Hh0IA',
        'Rlbt5TWZ',
        'gsZ7HjvL',
        'eZS01M2I',
        'sGZoUJqz',
        'MqXDfJxh',
        'aNVXGsYe',
        'x8Nyyeb5',
        'C4vZo70q',
        'rLwx6dzO',
        'fRor3IfL',
        'HHibSsvq',
        'DylJ41hA',
        '2PJ9sBnB',
        'kW914dgg',
        'w2UBIoDh',
        'l4TeowcU',
        'mJlOlc0d',
        'Xj12a09t',
        '6fYQVT6t',
        'nA568Y6l',
        'tYVBdwQj',
        'sZJYjm1f',
        'w6fSWiGr',
        'm1zr05dr',
        'CpI029Pn',
        'ZpJ3t212',
        'vSNiof9i',
        'lYhPcJmx',
        'RnKfTOpG',
        '1p8bESw8',
        'rvVhvJQ2',
        'fegJwuQ4',
        'VJmAU7qV',
        'RaZMrGFt',
        'bmG7repz',
        'J4f8ep2k',
        'oECWKF3f',
        '5KGMb353',
        't0kxKlRi',
        'nKR9AL0p',
        'FUdJ5rGy',
        'fULemxGz',
        'aSpasJz4',
        'NzLV5W0N',
        'wDdrUMXh',
        'yJEJPOli',
        '2xz5N9dt',
        'PBaCZid2',
        'PN72rrFh',
        ];

    return discountCode;
}


// ----------------------------------------------------------------
// Function | btnPriceCalculate | Function
// 
// The function will calculate total price for the desidered burger considering 
// any extra topping added. It will sum extras through a |checked| verification.

btnPriceCalculate.addEventListener('click', function () {

    // ________________________________
    // Variables

    var totalPrice = 50;
    var discountAmount = 10;
    var ingredientItems = document.getElementsByClassName('ingredient-check');
    var discountCodeInput = document.getElementById('discount-code').value;
    var userName = document.getElementById('user-name').value;

    // ________________________________
    // userName fix into Human Form

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

    if ( discountCode().includes(discountCodeInput) == true ) {

        totalPrice -= discountAmount;
    }

    // ________________________________
    // Print totalPrice

    document.getElementById('price-output').innerHTML = '€ ' + totalPrice;

    // ________________________________
    // Print userName
    document.getElementById('user-name').classList.add('hidden');
    document.getElementById('user-name-output').innerHTML = 'Il panino di ' + userName;

});


// ----------------------------------------------------------------
// Function | btnCancel | Function
//
// A page reload function that resets all inputs and totalPrice print.

btnCancel.addEventListener('click', function () {
    window.location.reload();
});