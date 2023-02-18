

const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const symbols = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"]

let firstPassEl = document.querySelector("#firstpass-el");
let secondPassEl = document.querySelector("#secondpass-el");
let indexArray = [];
let givePass = true;
let symbolCheckbox = document.querySelector("input[name=addsymbol]");
let numberCheckbox = document.querySelector("input[name=addnumber]");

symbolCheckbox.addEventListener('change', function() {
    if (this.checked) {
        characters.push(...symbols);
    } else {;
        let firstNumIndex = characters.indexOf("~");
        characters.splice(firstNumIndex, symbols.length);
        console.log(characters)       
    }
    
});
numberCheckbox.addEventListener('change', function() {
    if (this.checked) {
        characters.push(...numbers);
    } else {
        
        let firstNumIndex = characters.indexOf("0");
        characters.splice(firstNumIndex, numbers.length);
        console.log(characters);
        
    }
    console.log(characters)
})
function getRandomIndex() {
    let randomIndex = 0
    for (let i = 0; i < 30; i++) {
       randomIndex = Math.floor(Math.random() * characters.length);
       indexArray.push(randomIndex)
    }
    console.log(indexArray)
    
}

function generatePassword() {
    getRandomIndex();
    if (givePass === true) {
        for (let i = 0; i < 15; i++) {
        firstPassEl.textContent += characters[indexArray[i]];
        }
        for (let i = 15; i < 30; i++) {
            secondPassEl.textContent += characters[indexArray[i]];
        }
    }
    givePass = false;
}

function resetPassword() {
    firstPassEl.textContent = "";
    secondPassEl.textContent = "";
    indexArray = [];
    givePass = true;

}
