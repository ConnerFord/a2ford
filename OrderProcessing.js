/*
function count(orderForm, lineNumber, itemCost) {
orderForm.line_sum[lineNumber].value = orderForm.line[lineNumber].value * itemCost;
orderForm.line_sum[lineNumber].value = Math.ceil(orderForm.line_sum[lineNumber].value * 1000) / 1000;
orderForm.line_sum[lineNumber].value = Math.floor(orderForm.line_sum[lineNumber].value * 1000) / 1000;
orderForm.line_sum[lineNumber].value = Math.round(orderForm.line_sum[lineNumber].value * 100) / 100;
if (orderForm.line_sum[lineNumber].value == "NaN") {
alert("Error:\nYou may only enter numbers...\nPlease retry");
orderForm.line[lineNumber].value = orderForm.line[lineNumber].value.substring(0, orderForm.line[lineNumber].value.length - 1);
orderForm.line_sum[lineNumber].value = orderForm.line[lineNumber].value * itemCost;
if (orderForm.line_sum[lineNumber].value == "0")
orderForm.line_sum[lineNumber].value = "";
} else {
var grandTotal = 0;
for ( i = 0; i < orderForm.line_sum.length; i++) {
grandTotal += Math.ceil(orderForm.line_sum[i].value * 1000) / 1000;
}
grandTotal = Math.round(grandTotal * 1000) / 1000;
orderForm.grand_total.value = grandTotal;
decimal(orderForm);
}
}*/
/* <input type="radio" name="gender" value="male">
Male
<br>
<input type="radio" name="gender" value="female">
Female
<br>
<input type="radio" name="gender" value="other">
Other*/
function setSize(size) {
var price = 0.0;
document.getElementById("mySize").value = size;
if (size == "Extra Small") {
price = 4.95;
document.getElementById("lineSize").value = price;
} else if (size == "Small") {
price = 9.95;
document.getElementById("lineSize").value = price;
} else if (size == "Medium") {
price = 14.95;
document.getElementById("lineSize").value = price;
} else if (size == "Large") {
price = 19.95;
document.getElementById("lineSize").value = price;
} else if (size == "Extra Large") {
price = 25.95;
document.getElementById("lineSize").value = price;
} else {
document.getElementById("lineSize").value = "error";
}
}
function setShipper() {
// find the drop-down choice input
var shipDropDown = document.getElementById("theShipper");
var displayShipper = document.getElementById("myShipper");
var price;
if (shipDropDown.options[shipDropDown.selectedIndex].text == "USPS") {
price = parseFloat(9.95);
displayShipper.value = "USPS - $9.95";
document.orderForm.lineShip.value = accounting.formatMoney(price);
}  else if (shipDropDown.options[shipDropDown.selectedIndex].text == "UPS") {
price = parseFloat(12.95);
displayShipper.value = "UPS - $12.95";
document.orderForm.lineShip.value = accounting.formatMoney(price);
} else if (shipDropDown.options[shipDropDown.selectedIndex].text == "FedEx") {
price = parseFloat(14.95);
displayShipper.value = "FedEx - $14.95";
document.orderForm.lineShip.value = accounting.formatMoney(price);
} else {
price = parseFloat(0.00);
displayShipper.value = "Pick Up - $0.00";
document.orderForm.lineShip.value = accounting.formatMoney(price);
}
}
function get_data(orderForm) {
var order_data = "This Order is ...\n";

for ( i = 0; i < orderForm.line.length; i++) {
if (orderForm.line[i].value == "") {
orderForm.line[i].value = "0";
}
order_data += "Line " + i + ", Qty = " + orderForm.line[i].value + ", Price = $" + orderForm.line_sum[i].value + "\n";
}
if (orderForm.grand_total.value == "") {
orderForm.grand_total.value = "Nothing yet";
}

order_data += "Total Order value = " + orderForm.grand_total.value;

document.confirmationForm.order.value = order_data;

}

function count(orderForm, lineNumber, itemCost) {
orderForm.line_sum[lineNumber].value = orderForm.line[lineNumber].value * itemCost;

var grandTotal = 0;
for ( i = 0; i < orderForm.line_sum.length; i++) {
grandTotal += Math.ceil(orderForm.line_sum[i].value * 100) / 100;
}
grandTotal = Math.round(grandTotal * 100) / 100;
grandTotal = accounting.formatMoney(grandTotal);
//
orderForm.grand_total.value = grandTotal;

}//End of count function
function get_data(orderForm) {
var order_data = "This Order is ...\n";

for ( i = 0; i < orderForm.line.length; i++) {
if (orderForm.line[i].value == "") {
orderForm.line[i].value = "0";
}
order_data += "Line " + i + ", Qty = " + orderForm.line[i].value + ", Price = $" + orderForm.line_sum[i].value + "\n";
}
if (orderForm.options_Total.value == "") {
orderForm.options_Total.value = "Nothing yet";
}

order_data += "Total Order value = " + orderForm.options_Total.value;

document.confirmationForm.order.value = order_data;

}
function count(orderForm, lineNumber, itemCost) {
orderForm.line_sum[lineNumber].value = orderForm.line[lineNumber].value * itemCost;

var optionsTotal = 0;
for ( i = 0; i < orderForm.line_sum.length; i++) {
optionsTotal += Math.ceil(orderForm.line_sum[i].value * 100) / 100;
}
optionsTotal = Math.round(optionsTotal * 100) / 100;
optionsTotal = accounting.formatMoney(optionsTotal);
//
orderForm.options_Total.value = optionsTotal;

}//End of count function

function init() {
document.orderForm.reset();
document.orderForm.line[0].select();
document.orderForm.line[0].focus();
document.confirmationForm.order.value = " ";

}


window.onload = init;
