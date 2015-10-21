// Create a Variable called total with a value of 0
var total = 0;
var item = 0;

// Use onsubmit that calls the function enter
document.getElementById('entry').onsubmit = enter;

// Create a function called enter
function enter() {
    // It should have a variable for the form entry that gets the value from newEntry
    var newEntry = document.getElementById('newEntry').value;

    // It should have a variable for the form entry that gets the value from newEntry
    // It should then change the value of entry to a number
    newEntry = parseFloat(newEntry);

    if(isNaN(newEntry)) {
        alert('Please Enter A Number');
        document.getElementById('newEntry').value = '';
        return false;
    }

    // It should have then assign a value to the currency variable using the currencyFormat function you'll create below.
    currency = currencyFormat(newEntry);


    // adds how many items added
    item++;

    // It should set the innerHTML of the entries to the currency value
    document.getElementById('entries').innerHTML += '<tr><td>' + item + '.</td><td>' + currency + '</td></tr>';
    //console.log('<tr><td></td><td>' + currency + '</td></tr>');
    document.getElementById('newEntry').value = '';
    total += newEntry; 

    document.getElementById('total').innerHTML = currencyFormat(total);
    
    return false;
}

function currencyFormat(value) {
    var currency = value;
    var fixedCurrency = '$' + currency.toFixed(2);

    return commafy(fixedCurrency);
}

function commafy( num ) {
    var str = num.toString().split('.');
    if (str[0].length >= 5) {
        str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,');
    }
    if (str[1] && str[1].length >= 5) {
        str[1] = str[1].replace(/(\d{3})/g, '$1 ');
    }
    return str.join('.');
}
// It should reassign the value of total by adding entry to total
// It should set the innerHTML of the total to the total value using the currencyFormat function
// It should then clear the value of newEntry
// It should return false to close the function
// Google ParseFloat


// Create the currencyFormat 
// It should take one parameter that it will store in the a currency variable and return that variable
// Google toFixed(2)
