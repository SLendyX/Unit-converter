/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputField = document.getElementById("unit-input")

const lengthEl = document.getElementById("length");
const volumeEl = document.getElementById("volume");
const weightEl = document.getElementById("mass");
const unitArr = [lengthEl, volumeEl, weightEl]
const conversions = [3.281, 0.264, 2.204];
const metric = ["meters", "liters", "kilos"]
const imperial = ["feet", "gallons", "pounds"]

for(let i=0; i<3; i++){
    unitArr[i].textContent = `1 ${metric[i]} = ${(1*conversions[i]).toFixed(3)} ${imperial[i]} | 1 ${imperial[i]} = ${(1/conversions[i]).toFixed(3)} ${metric[i]}`
}

inputField.addEventListener("input", function(val){
    val = inputField.value;
    if(val)
        for(let i=0; i<3; i++){
            unitArr[i].textContent = `${val} ${metric[i]} = ${(val*conversions[i]).toFixed(3)} ${imperial[i]} | ${val} ${imperial[i]} = ${(val/conversions[i]).toFixed(3)} ${metric[i]}`
        }
    else
        for(let i=0; i<3; i++){
            unitArr[i].textContent = `1 ${metric[i]} = ${(1*conversions[i]).toFixed(3)} ${imperial[i]} | 1 ${imperial[i]} = ${(1/conversions[i]).toFixed(3)} ${metric[i]}`
        }
})