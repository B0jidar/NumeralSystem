
function convert() {
    let number = document.getElementById("number").value.trim();
    let fromBase = Number(document.getElementById("fromBase").value);
    let toBase = Number(document.getElementById("toBase").value);

    let result = document.getElementById("result");
    let allResults = document.getElementById("allResults");

    result.textContent = "";
    allResults.textContent = "";

    if (number === "") {
        result.textContent = "Въведи число!";
        return;
    }

    let patterns = {
        2: /^-?[01]+$/,
        8: /^-?[0-7]+$/,
        10: /^-?[0-9]+$/,
        16: /^-?[0-9a-fA-F]+$/
    };

    if (!patterns[fromBase].test(number)) {
        result.textContent = "Невалидно число!";
        return;
    }

    let negative = number.startsWith("-");
    let digits = negative ? number.slice(1) : number;
    let value = 0n;

    for (let char of digits.toUpperCase()) {
        let digit = parseInt(char, 16);
        value = value * BigInt(fromBase) + BigInt(digit);
    }

    if (negative) {
        value = -value;
    }

    let converted = value.toString(toBase).toUpperCase();

    result.textContent = "Резултат: " + converted;

    allResults.innerHTML =
        "<hr><p>Двоична: " + value.toString(2) +
        "</p><p>Осмична: " + value.toString(8) +
        "</p><p>Десетична: " + value.toString(10) +
        "</p><p>Шестнадесетична: " +
        value.toString(16).toUpperCase() + "</p>";
}
