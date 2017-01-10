'use strict';

// declaration for object that holds costs, with constructor
function CostObject(taxCA, taxME, shipping, price_liveAmerican,
                    price_tailAmerican, price_liveRock, price_tailRock)
{
    this.shipping = shipping;
    this.taxCA = taxCA;
    this.taxME = taxME;
    this.price_liveAmerican = price_liveAmerican;
    this.price_tailAmerican = price_tailAmerican;
    this.price_liveRock = price_liveRock;
    this.price_tailRock = price_tailRock;
}

// declaration for object that holds quantities, with constructor
function QuantityObject(q_liveAmerican, q_tailAmerican, q_liveRock, q_tailRock){
    this.q_liveAmerican = q_liveAmerican;
    this.q_tailAmerican = q_tailAmerican;
    this.q_liveRock = q_liveRock;
    this.q_tailRock = q_tailRock;
}

function initializeCost() {
    "use strict";

    window.Cost = new CostObject(0.075, 0.055, 15, 65, 25, 45, 17);
}

function initializeQuantity() {
    window.Quantity = new QuantityObject(0, 0, 0, 0);
}

function setQuantity(quantity, lobsterType) {
    'use strict';

    if (lobsterType == 'liveAmerican') window.Quantity.q_liveAmerican = quantity;
    else if (lobsterType == 'tailAmerican') {
        window.Quantity.q_tailAmerican = quantity;
    } else if (lobsterType == 'liveRock') window.Quantity.q_liveRock = quantity;
    else if (lobsterType == 'tailRock') window.Quantity.q_tailRock = quantity;
}

function setName(name) {
    "use strict";

    if (/[&;'%#@\^$!"?<>_*()+\=]/.test(name) == true) {
        document.getElementById("name").innerHTML =
            "Special character(s) entered.";
        if (/[0-9]/.test(name) == true)
            document.getElementById("name").innerHTML =
                "Numbers and special character(s) entered.";
    }
    else if (/[[0-9]/.test(name) == true) {
        document.getElementById("name").innerHTML = "Numbers entered.";
        if (/[&;'%#@\^$!"?<>_*()+\=]/.test(name) == true)
            document.getElementById("name").innerHTML =
                "Numbers and special character(s) entered.";
    }
    else
        document.getElementById("name").innerHTML = "";
}

function setAddressLine1(addressLine) {
    "use strict";

    if (/[~!@$%\^&*()_+\=;]/.test(addressLine) == true)
        document.getElementById("addressLine1").innerHTML =
            "Invalid special character(s) entered.";
    else document.getElementById("addressLine1").innerHTML = "";
}

function setAddressLine2(addressLine) {
    "use strict";

    if (/[~$%\^*_+\=;]/.test(addressLine) == true)
        document.getElementById("addressLine2").innerHTML =
            "Invalid special character(s) entered.";
    else document.getElementById("addressLine2").innerHTML = "";
}

function setZIP(zip) {
    "use strict";

    if (zip.match(/\d{5}/) == null) {
        document.getElementById("ZIP1").innerHTML = "Invalid ZIP code entered.";

        if (/[&;'%#@\^$!"?<->_*()+\=]/.test(zip) == true)
            document.getElementById("ZIP2").innerHTML =
                "Invalid special character(s) entered.";
        else
            document.getElementById("ZIP2").innerHTML = "";

        if (/[A-Za-z]/.test(zip) == true)
            document.getElementById("ZIP3").innerHTML =
                "Alphabetic character(s) entered.";
        else
            document.getElementById("ZIP3").innerHTML = "";
    }
    else
        document.getElementById("ZIP1").innerHTML = "";
}

function setState(abbrev) {
    if (/[A-Z]{2}/.test(abbrev) == false)
        document.getElementById("state").innerHTML = "Invalid state abbreviation.";
    else {
        document.getElementById("state").innerHTML = "";
        var state = abbrev;
    }
}

function setPhone(phone) {
    "use strict";

    if (/[A-Za-z]/.test(phone) == true) {
        document.getElementById("phone").innerHTML =
            "Alphabetic character(s) entered.";
        if (/[~!@$%\^&*=#]/.test(phone) == true)
            document.getElementById("phone").innerHTML =
                "Alphabetic and invalid special character(s) entered.";
    }
    else if (/[~!@$%\^&*=#]/.test(phone) == true)
        document.getElementById("phone").innerHTML =
            "Invalid special character(s) entered.";
    else
        document.getElementById("phone").innerHTML = "";
}

function setCreditCard(card) {
    "use strict";

    if (card.match(/\d{4}-\d{4}-\d{4}-\d{4}/) == null && card.match(/\d{16}/) == null) {
        document.getElementById("card1").innerHTML =
            "Invalid card number entered.";

        if (/[&;'%#@\^$!"?<>_*()+\=]/.test(card) == true)
            document.getElementById("card2").innerHTML =
                "Invalid special character(s) entered.";
        else
            document.getElementById("card2").innerHTML = "";

        if (/[A-Za-z]/.test(card) == true)
            document.getElementById("card3").innerHTML =
                "Alphabetic character(s) entered.";
        else
            document.getElementById("card3").innerHTML = "";
    }
    else {
        document.getElementById("card1").innerHTML = "";
        document.getElementById("card2").innerHTML = "";
        document.getElementById("card3").innerHTML = "";
    }
}

function calculateTax() {
    "use strict";

    var tax = 0;

    if (window.state == 'ME') {
        tax = window.Cost.taxME;
    }
    if (window.state == 'CA') {
        tax = window.Cost.taxCA;
    }

    return tax;
}

function calculateTotal() {

    var salesTax = calculateTax();

    var subtotal1 = window.Quantity.q_liveAmerican * window.Cost.price_liveAmerican;
    var subtotal2 = window.Quantity.q_liveRock * window.Cost.price_liveRock;
    var subtotal3 = window.Quantity.q_tailAmerican * window.Cost.price_tailAmerican;
    var subtotal4 = window.Quantity.q_tailRock * window.Cost.price_tailRock;

    var total = subtotal1 + subtotal2 + subtotal3 + subtotal4 +
        window.Cost.shipping + salesTax;

    return total;
}

function isCartEmpty() {
    "use strict";

    if (window.Quantity.q_tailAmerican <= 0 && window.Quantity.q_liveAmerican <=
        0 && window.Quantity.q_tailRock <= 0 && window.Quantity.q_liveRock <=
        0) return true;
    else return false;
}

function updateCart() {
    var total = calculateTotal();

    if (isCartEmpty() == false) {
        if (window.Quantity.q_tailAmerican > 0) {
            var str1 = "American Lobster Tail: " + window.Quantity.q_tailAmerican;
            document.getElementById("cart1").innerHTML = str1;
        }
        if (window.Quantity.q_liveAmerican > 0) {
            var str2 = "Live American Lobster: " + window.Quantity.q_liveAmerican;
            document.getElementById("cart2").innerHTML = str2;
        }
        if (window.Quantity.q_tailRock > 0) {
            var str3 = "Rock Lobster Tail: " + window.Quantity.q_tailRock;
            document.getElementById("cart3").innerHTML = str3;
        }
        if (window.Quantity.q_liveRock > 0) {
            var str4 = "Live Rock Lobster: " + window.Quantity.q_liveRock;
            document.getElementById("cart4").innerHTML = str4;
        }
        document.getElementById('shippingCharge').innerHTML =
            "Overnight Shipping: $" + window.Cost.shipping + ".00";
        document.getElementById('total').innerHTML = "Total: $" + total + ".00";
        document.getElementById('empty').innerHTML = "";
    }
    else {
        document.getElementById('empty').innerHTML =
            "Get you some lobster, friend! You'll thank us later!";
    }
}

function show(shown, hiddenPage1, hiddenPage2, hiddenPage3) {
    document.getElementById(shown).style.display = 'block';
    document.getElementById(hiddenPage1).style.display = 'none';
    document.getElementById(hiddenPage2).style.display = 'none';
    document.getElementById(hiddenPage3).style.display = 'none';
}

function showButton(button) {
    document.getElementById(button).style.visibility = 'visible';
}