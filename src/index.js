const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const arrWords= expr.split('', expr.length);
    // console.log(arrWord);
  
    const arrLetters=[]
    for (let i=0; i<arrWords.length; i+=10) {
      arrLetters.push(arrWords.slice(i, i+10))
    }
    // console.log(arrLetters);
  
    const letter = arrLetters.map(element=>{
      return element.join('')
    })
  // console.log(letter);
  
    const morseNumber = letter.map(element=>{
      if(element.includes(1)) {
    return Number(element);
    }
    return element
  })
  // console.log(morseNumber);
  
    const morseNumberWithSpace = morseNumber.map(element=>{
      if (element === '**********') {
      return element.replaceAll(element, ' ');
  }
  return String(element);
  })
  // console.log(morseNumberWithSpace);
  
    const dots= morseNumberWithSpace.map(element=> {
      return element.replaceAll('10','.')
    })
    // console.log(dots);
  
    const dotsAndDashes = dots.map(element=>{
      return element.replaceAll('11','-')
    })
  // console.log(dotsAndDashes);
  
  const morseCode = Object.entries(MORSE_TABLE)
    // console.log(morseCode);
  
  const result = dotsAndDashes.map(element=>{
    for (let i in morseCode) {
      if(element === morseCode[i][0]) {
        console.log(morseCode[i][0]);
        return element.replaceAll(element, morseCode[i][1]);
      } else if(element === ' ') {
        return element;
      }
    }
  })
  // console.log(result);
  
  const string = result.join('')
  return string;
}

module.exports = {
    decode
}