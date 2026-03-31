
/**

Decimal to Mayan ASCII converter

cero = o
units = .
five-digit = |
twenty-digit separator = /

**/

// convert decimal to maya
const converMaya = (n) => {
    if (n === 0) return "o";

    let levels = [];
    let temp = Math.floor(Math.abs(n));

    // decompose into twenty base
    while (temp > 0) {
        levels.push(temp % 20);
        temp = Math.floor(temp / 20);
    }

    // simplificatior units
    const getUnits = (p) => {
        if (p === 1) return ".";
        if (p === 2) return ":";
        if (p === 3) return ".:";
        if (p === 4) return "::";
        return "";
    };

    // reverse hierarchy
    return levels.reverse().map(v => {
        if (v === 0) return "o";
        let units = getUnits(v % 5);
        let bars = "|".repeat(Math.floor(v / 5));
        return units + bars;
    }).join("/");
};

const valueInput = prompt("Introduce el número decimal:");
const mayanNumber = parseInt(valueInput);

if (!isNaN(mayanNumber)) {
    console.log("Decimal:", mayanNumber);
    console.log("Simbología Maya: [ " + converMaya(mayanNumber) + " ]");
} else {
    console.log("Error: Ingrese un número válido.");
}
