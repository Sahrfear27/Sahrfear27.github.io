// Function to check for vowels

export function isVowel(character: string){
    let char = character.toLocaleLowerCase();
    if(char === "a" || char === "e" || char == "i" || char === "o" || char === "u"){
        return true;
    }
    else{
        return false;
    }
    
}

