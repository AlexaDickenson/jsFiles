let billAmount= 100;

function calculateTip (billAmount)
{return billAmount * .2;};
console.log ("tip amount $"+calculateTip(billAmount));//returns $20

function getBillTotal (billAmount){
    return billAmount + calculateTip(billAmount)
};
console.log ("bill total $"+getBillTotal(billAmount)) //returns $120