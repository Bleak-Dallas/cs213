function problem1() {
    alert("Hello World!\n");
}

function problem2(newName, text) {
    text = text.replace(/RICH_GUY/g, newName);
    alert(text);
}

function problem3(temp) {

    temp = (5/9) * (temp - 32);
    var t = temp.toFixed(1);
    alert(t);
}

function problem4(weight) {
    if (weight < 1 || weight > 5)
        alert("Invalid weight");
    else if(weight == 1)
        alert("$0.98");
    else if (weight == 2)
        alert("$1.19");
    else if (weight == 3)
        alert("$1.40");
    else if(weight == 4)
        alert("$1.61");
    else if (weight == 5)
        alert("$1.82");
}

function problem5(APR, term, amount){
    APR = Number(APR * 0.01);
     term = Number(term);
    amount = Number(amount);

    for (var i = 0; i < term; i++){
        amount = amount + (amount * APR);
    }
    var total = "$" + amount.toFixed(2);
    alert(total);
}