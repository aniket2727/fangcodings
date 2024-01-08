function oneplus(str) {
    const matches = str.match(/^(\D*)(\d*)$/);

    if (!matches) {
        return '';
    }

    const [, nonNumericalPart, numericalPart] = matches;
    let incrementNumber = (parseInt(numericalPart, 10) + 1).toString();

    while (incrementNumber.length < numericalPart.length) {
        incrementNumber = '0' + incrementNumber;
    }

    return nonNumericalPart + incrementNumber;
}

var number = "123";
const result = oneplus(number);
console.log(result);
