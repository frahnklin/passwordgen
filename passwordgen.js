var alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var characters = "!@#$%^&*()[]{}\|;:,<>/?"
var randomString = "";

while (randomString.length < (Math.floor(Math.random() * 0.5 * numbers.length * alphabet.length))) {
    var alppos = Math.floor(Math.random() * alphabet.length)
    randomString += alphabet[alppos]
    var numpos = Math.floor(Math.random() * numbers.length)
    randomString += numbers[numpos]
    var charpos = Math.floor(Math.random() * characters.length)
    randomString += characters[charpos]
}

randomString
console.log(randomString)
