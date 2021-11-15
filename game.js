const random = (max) => {
    return Math.floor (Math.random() * max);
}

const randomCharacter = generatedcharacters[random(generatedcharacters.length)]

class Game {
    constructor (){
        this.characters = generatedcharacters;
        this.selectedCharacter = null;
        this.randomCharacterIndex = random(this.characters.length)
        this.handleCharacters();
    }

    onCharacterClicked(e){
        e.target.classList.add("hide");
    }

    handleCharacters(){
        document.querySelectorAll('.character').forEach((character,index)=>{
            character.id = this.characters[index].name;
            character.addEventListener('click', this.onCharacterClicked);
        })
    }

    createCharacterCard(){
        console.log(this.selectedCharacter);
        const character = document.getElementById(this.selectedCharacter.name);
        const position = window.getComputedStyle(character)["background-position"]
        document.getElementById('selected').style.backgroundPosition = position
    }

    selectedRandomCharacter(){
        this.selectedCharacter = this.characters[this.randomCharacterIndex]
        this.createCharacterCard();
    }

    start(){
        this.selectedRandomCharacter();
    }
}

const game = new Game();
game.start();