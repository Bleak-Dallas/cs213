// @flow

function validateAge(age, id) {

	if ((isNaN(age) == true) || (age <= 0 || age > 118))
		document.getElementById(id).innerHTML = "Invalid age";
	else
        document.getElementById(id).innerHTML = "";
}

function validateSSN(ssn, id) {
	if (/(\d{3}-\d{2}-\d{4})/.test(ssn) == false)
		document.getElementById(id).innerHTML = "Invalid SSN entered.";
	else
        document.getElementById(id).innerHTML = "";
}

function validateCard(cardNum, id) {
	if (/(\d{4})/.test(cardNum) == false)
		document.getElementById(id).innerHTML = "Invalid credit card number.";
	else
        document.getElementById(id).innerHTML = "";
}

function validateDate(date, id) {
	let result = date.split("/");
	let month = result[0];
	let day = result[1];
	let year = result[2];

	if ((day < 1 || day > 31) || (month < 1 || month > 12) || (year < 1753 || year > 2100))
		document.getElementById(id).innerHTML = "Invalid date.";
	else
        document.getElementById(id).innerHTML = "";
}

function validateState(abbrev, id) {
	if (/[A-Z]{2}/.test(abbrev) == false)
		document.getElementById(id).innerHTML = "Invalid state abbreviation.";
	else
        document.getElementById(id).innerHTML = "";
}

function validateMoney(money, id) {
	if (/[&;'%#@!"?<>_*a-zA-Z]/.test(money) == true)
		document.getElementById(id).innerHTML = "Invalid money amount.";
	else
        document.getElementById(id).innerHTML = "";
}