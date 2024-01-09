



// roman number problems 



function intToRoman(num) {
    const romanNumerals = {
        1000: 'M',
        900: 'CM',
        500: 'D',
        400: 'CD',
        100: 'C',
        90: 'XC',
        50: 'L',
        40: 'XL',
        10: 'X',
        9: 'IX',
        5: 'V',
        4: 'IV',
        1: 'I'
    };

    let result = '';

    for (let value in romanNumerals) {
        while (num >= value) {
            result += romanNumerals[value];
            num -= value;
        }
    }

    return result;
}


const number = 10;
const romanNumeral = intToRoman(number);

console.log(`Roman numeral representation of ${number}: ${romanNumeral}`);


// this is simple mathods
function romannumbers(data){
     var seperated=data.split('')
     var sum=0

     seperated.forEach(element => {
         if(element=='X'){
            sum=sum+10
         }
         else if(element=='V'){
            sum=sum+5
         }
         else if(element=='L'){
            sum=sum+50
         }
         else{
            sum=sum+100
         }
     });

     return sum
}



const s="XVII"
const result=romannumbers(s)
console.log(result)
