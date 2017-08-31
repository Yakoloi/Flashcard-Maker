var BasicCard = require("./BasicCard.js");

var ClozeCard = function (text, cloze) {
    this.fullText = text;
    this.cloze = cloze;
    this.check = function () {
        if (this.fullText.match(this.cloze) != null) {
            return this.fullText.replace(this.cloze, "...");
        } else console.log("error " + this.cloze + " doesn't appear in " + this.fullText);
    }
    this.partial = this.check();
};

module.exports = ClozeCard;

var firstPresident = new BasicCard(
    "Who was the first president of the United States?", "George Washington");

var firstPresidentCloze = new ClozeCard(
    "George Washington was the first president of the United States.", "George Washington");

    // "George Washington"
console.log(firstPresidentCloze.cloze); 

// " ... was the first president of the United States.
console.log(firstPresidentCloze.partial); 

// "George Washington was the first president of the United States.
console.log(firstPresidentCloze.fullText);