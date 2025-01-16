const names = require("./names");
const hobbies = require("./hobbies");
const people = () =>{
    return { 
        fullName: names("Christian Francesco","Palascino"),
        hobbies: hobbies("Musica", "Serie TV","Videogames")
    }
}

console.log(people());