const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let pass1El = document.getElementById('pass1') 
let pass2El = document.getElementById('pass2') 

// on click it will generate a password and display to the text fields 
function generatePassword(){
    for(let i = 0; i < characters.length; i++){
        let char1 = Math.floor(Math.random() * 90) + 1
        let char2 = Math.floor(Math.random() * 90) + 1
        let char3 = Math.floor(Math.random() * 90) + 1
        let char4 = Math.floor(Math.random() * 90) + 1
        let char5 = Math.floor(Math.random() * 90) + 1
        
        let final = `${characters[char1]}${characters[char2]}${characters[char3]}${characters[char4]}${characters[char5]}`
        pass1El.value = final       
    }
     for(let i = 0; i < characters.length; i++){
        let char1 = Math.floor(Math.random() * 90) + 1
        let char2 = Math.floor(Math.random() * 90) + 1
        let char3 = Math.floor(Math.random() * 90) + 1
        let char4 = Math.floor(Math.random() * 90) + 1
        let char5 = Math.floor(Math.random() * 90) + 1
        
        let final = `${characters[char1]}${characters[char2]}${characters[char3]}${characters[char4]}${characters[char5]}`
        pass2El.value = final
     }
    
}
console.log(generatePassword())
// when input boxes are clicked, text will copy to the clipboard
function copyText(e){
    //get the text from the field 
    let copyId = e.id 
        
    if(e.id === 'pass1'){
       let copy1 = document.getElementById('pass1')
       copy1.select()
       navigator.clipboard.writeText(copy1.value)
       alert('First password Copied!')
    } else {
        let copy2 = document.getElementById('pass2')
        copy2.select()
        navigator.clipboard.writeText(copy2.value)
        alert('Second password Copied!')
    }
}
