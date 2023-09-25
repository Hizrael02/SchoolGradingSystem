// var mathMatics = 'bolu'
// console.log(mathMatics)
var DisplayEng4 = document.getElementById('eng4')
// var DisplayEng = document.getElementById('eng')
// var DisplayEng2 = document.getElementById('eng2')
// var DisplayEng3 = document.getElementById('eng3')
var DisplayMath4 = document.getElementById('math4')
var DisplayPhys4 = document.getElementById('phys4')
var DisplayChem4 = document.getElementById('chem4')
var DisplayBio4 = document.getElementById('bio4')
var DisplayAgric4 = document.getElementById('agric4')
var DisplayEco4 = document.getElementById('eco4')
function totalCal() {
    // var TotalCal = document.getElementById('total-dis')



    DisplayEng4.value = +document.getElementById('eng').value + +document.getElementById('eng2').value +
        + document.getElementById('eng3').value;

    DisplayMath4.value = +document.getElementById('math').value + +document.getElementById('math2').value +
        + document.getElementById('math3').value

    DisplayPhys4.value = +document.getElementById('phys').value + +document.getElementById('phys2').value +
        + document.getElementById('phys3').value

    DisplayChem4.value = +document.getElementById('chem').value + +document.getElementById('chem2').value +
        + document.getElementById('chem3').value

    DisplayBio4.value = +document.getElementById('bio').value + +document.getElementById('bio2').value +
        + document.getElementById('bio3').value

    DisplayAgric4.value = +document.getElementById('agric').value + +document.getElementById('agric2').value +
        + document.getElementById('agric3').value

    DisplayEco4.value = +document.getElementById('eco').value + +document.getElementById('eco2').value +
        + document.getElementById('eco3').value


}


function overalCal() {
    var overAll = +document.getElementById('eng').value +
        +document.getElementById('eng2').value +
        + document.getElementById('eng3').value;

    var overAll2 = +document.getElementById('math').value +
        +document.getElementById('math2').value +
        + document.getElementById('math3').value;

    var overAll3 = +document.getElementById('phys').value +
        +document.getElementById('phys2').value +
        + document.getElementById('phys3').value;

    var overAll4 = +document.getElementById('chem').value +
        +document.getElementById('chem2').value +
        + document.getElementById('chem3').value;

    var overAll5 = +document.getElementById('bio').value +
        +document.getElementById('bio2').value +
        + document.getElementById('bio3').value;

    var overAll6 = +document.getElementById('agric').value +
        +document.getElementById('agric2').value +
        + document.getElementById('agric3').value;
    var overAll7 = +document.getElementById('eco').value +
        +document.getElementById('eco2').value +
        + document.getElementById('eco3').value;

    document.getElementById('overal-dis').innerHTML = overAll + overAll2
        + overAll3 + overAll4 + overAll5 + overAll6 + overAll7;
}


function averageCal() {
    var overAll = +document.getElementById('eng').value +
        +document.getElementById('eng2').value +
        + document.getElementById('eng3').value;

    var overAll2 = +document.getElementById('math').value +
        +document.getElementById('math2').value +
        + document.getElementById('math3').value;

    var overAll3 = +document.getElementById('phys').value +
        +document.getElementById('phys2').value +
        + document.getElementById('phys3').value;

    var overAll4 = +document.getElementById('chem').value +
        +document.getElementById('chem2').value +
        + document.getElementById('chem3').value;

    var overAll5 = +document.getElementById('bio').value +
        +document.getElementById('bio2').value +
        + document.getElementById('bio3').value;

    var overAll6 = +document.getElementById('agric').value +
        +document.getElementById('agric2').value +
        + document.getElementById('agric3').value;
    var overAll7 = +document.getElementById('eco').value +
        +document.getElementById('eco2').value +
        + document.getElementById('eco3').value;

    v = overAll + overAll2
        + overAll3 + overAll4 + overAll5 + overAll6 + overAll7;

    document.getElementById('average-dis').innerHTML = Math.round(v / 7) + " %";
}

function gradeCal() {
    var overAll = +document.getElementById('eng').value +
        +document.getElementById('eng2').value +
        + document.getElementById('eng3').value;

    var overAll2 = +document.getElementById('math').value +
        +document.getElementById('math2').value +
        + document.getElementById('math3').value;

    var overAll3 = +document.getElementById('phys').value +
        +document.getElementById('phys2').value +
        + document.getElementById('phys3').value;

    var overAll4 = +document.getElementById('chem').value +
        +document.getElementById('chem2').value +
        + document.getElementById('chem3').value;

    var overAll5 = +document.getElementById('bio').value +
        +document.getElementById('bio2').value +
        + document.getElementById('bio3').value;

    var overAll6 = +document.getElementById('agric').value +
        +document.getElementById('agric2').value +
        + document.getElementById('agric3').value;
    var overAll7 = +document.getElementById('eco').value +
        +document.getElementById('eco2').value +
        + document.getElementById('eco3').value;
    var firstName = document.getElementById('first-name');
    var lastName = document.getElementById('Last-name')

    if (overAll >= 80) {
        console.log("A");
        document.getElementById("grade-eng").innerHTML = " A";
        console.log(firstName.value + lastName.value + ' you passed')


    }

    else if (overAll >= 60) {
        console.log("B");
        document.getElementById("grade-eng").innerHTML = " B";
    }


    else if (overAll >= 50) {
        console.log("C");
        document.getElementById("grade-eng").innerHTML = " C";
    }

    else if (overAll >= 40) {
        console.log("D");
        document.getElementById("grade-eng").innerHTML = " D";
    }
    else {
        console.log("F");
        document.getElementById("grade-eng").innerHTML = " F";
    }


    if (overAll2 >= 80) {
        console.log("D");
        document.getElementById("grade-math").innerHTML = " D"
    }
    else if (overAll2 >= 60) {
        console.log("B");
        document.getElementById("grade-math").innerHTML = " B"
    }


    else if (overAll2 >= 50) {
        console.log("C");
        document.getElementById("grade-math").innerHTML = " C"
    }

    else if (overAll2 >= 40) {
        console.log("D")
        document.getElementById("grade-math").innerHTML = " D"
    }
    else {
        console.log("F")
        document.getElementById("grade-math").innerHTML = " F"
    }


    if (overAll3 >= 80) {
        console.log("A");
        document.getElementById("grade-phys").innerHTML = " A"
    }

    else if (overAll3 >= 60) {
        console.log("B");
        document.getElementById("grade-phys").innerHTML = " B"
    }

    else if (overAll3 >= 50) {
        console.log("C");
        document.getElementById("grade-phys").innerHTML = " C"
    }

    else if (overAll3 >= 40) {
        console.log("D")
        document.getElementById("grade-phys").innerHTML = " D"
    }
    else {
        console.log("F")
        document.getElementById("grade-phys").innerHTML = " F"
    }

    if (overAll4 >= 80) {
        console.log("A");
        document.getElementById("grade-chem").innerHTML = " A"
    }

    else if (overAll4 >= 60) {
        console.log("B");
        document.getElementById("grade-chem").innerHTML = " B"
    }

    else if (overAll4 >= 50) {
        console.log("C");
        document.getElementById("grade-chem").innerHTML = " C"
    }

    else if (overAll4 >= 40) {
        console.log("D")
        document.getElementById("grade-chem").innerHTML = " D"
    }
    else {
        console.log("F")
        document.getElementById("grade-chem").innerHTML = " F"
    }

    if (overAll5 >= 80) {
        console.log("A");
        document.getElementById("grade-bio").innerHTML = " A"
    }

    else if (overAll5 >= 60) {
        console.log("B");
        document.getElementById("grade-bio").innerHTML = " B"
    }

    else if (overAll5 >= 50) {
        console.log("C");
        document.getElementById("grade-bio").innerHTML = " C"
    }

    else if (overAll5 >= 40) {
        console.log("D")
        document.getElementById("grade-bio").innerHTML = " D"
    }
    else {
        console.log("F")
        document.getElementById("grade-bio").innerHTML = " F"
    }

    if (overAll6 >= 80) {
        console.log("A");
        document.getElementById("grade-agric").innerHTML = " A"
    }
    else if (overAll6 >= 60) {
        console.log("B");
        document.getElementById("grade-agric").innerHTML = " B"
    }

    else if (overAll6 >= 50) {
        console.log("C");
        document.getElementById("grade-agric").innerHTML = " C"
    }

    else if (overAll6 >= 40) {
        console.log("D")
        document.getElementById("grade-agric").innerHTML = " D"
    }
    else {
        console.log("F")
        document.getElementById("grade-agric").innerHTML = " F"
    }

    if (overAll7 >= 80) {
        console.log("A");
        document.getElementById("grade-eco").innerHTML = " A"
    }
    else if (overAll7 >= 60) {
        console.log("B");
        document.getElementById("grade-eco").innerHTML = " B"
    }

    else if (overAll7 >= 50) {
        console.log("C");
        document.getElementById("grade-eco").innerHTML = " C"
    }

    else if (overAll7 >= 40) {
        console.log("D")
        document.getElementById("grade-eco").innerHTML = " D"
    }
    else {
        console.log("F")
        document.getElementById("grade-eco").innerHTML = " F"
    }

}