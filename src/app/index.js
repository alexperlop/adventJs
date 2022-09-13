/*Lara Eloft ha encontrado unos restos élficos en una cueva, cerca del Círculo Polar Ártico, a 8 km al norte de Rovaniemi.

Ahora se encuentra descifrando unas misteriosas cartas que contiene información sobre unos números que le puede hacer llegar al próximo objetivo.

Lara tiene un documento que contiene una serie de números que pueden ser usados para descifrarlos:

Símbolo       Valor
  .             1
  ,             5
  :             10
  ;             50
  !             100
Lara, además, ha notado una cosa. Los símbolos se restan si están inmediatamente a la izquierda de otro mayor. 😱

Tenemos que crear una función que nos pasa una cadena de texto con símbolos y tenemos que transformarlo al número correcto. ¡Ojo! Si encuentras un símbolo que no entendemos, mejor que devolvamos un NaN:

decodeNumbers('...') // 3
decodeNumbers('.,') // 4 (5 - 1)
decodeNumbers(',.') // 6 (5 + 1)
decodeNumbers(',...') // 8 (5 + 3)
decodeNumbers('.........!') // 107 (1 + 1 + 1 + 1 + 1 + 1 + 1 - 1 + 100)
decodeNumbers('.;') // 49 (50 - 1)
decodeNumbers('..,') // 5 (-1 + 1 + 5)
decodeNumbers('..,!') // 95 (1 - 1 - 5 + 100)
decodeNumbers('.;!') // 49 (-1 -50 + 100)
decodeNumbers('!!!') // 300
decodeNumbers(';!') // 50
decodeNumbers(';.W') // NaN
*/


const decodeNumber = (symbols) => {
    const code = ['.', ',', ':', ';', '!'];
    symbols = symbols.split('');
    let includes;
    let obj = {
        answer: true
    };
    let result = 0;
    let initValue = 1;
    let array = [];
    symbols.map((value) => {
        includes = code.includes(value);
        if (!includes) {
            obj.answer = +value;
        }
    })

    if (!obj.answer) return obj.answer;

    code.forEach((item, i) => {
        if (i == 0) {
            obj[item] = initValue
        } else if (i % 2 == 0) {
            initValue *= 2
            obj[item] = initValue
        } else {
            initValue *= 5
            obj[item] = initValue
        }
    })

    symbols.forEach((item, i) => {
        array.push(obj[item])
    })
    array.forEach((el, i) => {
        if (el < array[i + 1]) {
            el = -array[i]
        }
        result += el;
    })

    return result
}