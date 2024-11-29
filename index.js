const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const input1El = document.getElementById("password-1")
const input2El = document.getElementById("password-2")

const passwordLength = 15

document.getElementById("password-btn").addEventListener("click", function () {
    let passwordOne = generatePassword()
    let passwordTwo = generatePassword()
    
    // document.getElementById("password-1").innerHTML = input1El
    // document.getElementById("password-1").innerHTML = input2El
    
    input1El.value = passwordOne
    input2El.value = passwordTwo
})

function getRandomCharacter () {
    let randomCharacter = Math.floor(Math.random() * characters.length)
    
    return characters[randomCharacter]
}

function generatePassword () {
    let password = ""
    
    for (let i = 0; i < passwordLength; i++) {
        password += getRandomCharacter()
    }
    return password
}




