

const diamond = document.querySelector("#diamonds");
const clubs = document.querySelector("#clubs");
const hearts = document.querySelector("#hearts");
const spades = document.querySelector("#spades");

const randomNumber = function() {
    return Math.floor(Math.random() * 4) + 1;
};

const buttonOne = document.querySelector("#buttonOne");

buttonOne.addEventListener("click", function(){
    const randomNum = randomNumber();
    if(randomNum === 1) {
        const currentMarginDiamond = parseInt(diamond.style.marginLeft) || 0;
        diamond.style.marginLeft = `${currentMarginDiamond + 97}px`;
        if(currentMarginDiamond >= 1164) {
            alert("DIAMOND WON")
        }
    }
    else if(randomNum === 2) {
        const currentMarginClubs = parseInt(clubs.style.marginLeft) || 0;
        clubs.style.marginLeft = `${currentMarginClubs + 97}px`;
        if(currentMarginClubs >= 1164) {
            alert("CLUBS WON")
        }
    }
    else if(randomNum === 3) {
        const currentMarginHearts = parseInt(hearts.style.marginLeft) || 0;
        hearts.style.marginLeft = `${currentMarginHearts + 97}px`;
        if(currentMarginHearts >= 1164) {
            alert("HEARTS WON")
        }
    }
    else if(randomNum === 4) {
        const currentMarginSpades = parseInt(spades.style.marginLeft) || 0;
        spades.style.marginLeft = `${currentMarginSpades + 97}px`;
        if(currentMarginSpades >= 1164) {
            alert("SPADES WON")
        }
    }

});


const buttonTwo = document.querySelector("#buttonTwo");

buttonTwo.addEventListener("click", function(){

    const randomNum = randomNumber();
    if(randomNum === 1) {
        const currentMarginDiamond = parseInt(diamond.style.marginLeft) || 0;
        if(currentMarginDiamond > 0) {
            diamond.style.marginLeft = `${currentMarginDiamond - 97}px`;
        }
    }
    else if(randomNum === 2) {
        const currentMarginClubs = parseInt(clubs.style.marginLeft) || 0;
        if(currentMarginClubs > 0) {
        clubs.style.marginLeft = `${currentMarginClubs - 97}px`;
        }
    }
    else if(randomNum === 3) {
        const currentMarginHearts = parseInt(hearts.style.marginLeft) || 0;
        if(currentMarginHearts > 0) {
        hearts.style.marginLeft = `${currentMarginHearts - 97}px`;
        }
    }
    else if(randomNum === 4) {
        const currentMarginSpades = parseInt(spades.style.marginLeft) || 0;
        if(currentMarginSpades > 0) {
        spades.style.marginLeft = `${currentMarginSpades - 97}px`;
        }
    }
});


//BACK OF CARD TURNOFF SECTION   

const backCardOne = document.querySelector("#backCardOne");
const backCardTwo = document.querySelector("#backCardTwo");
const backCardThree = document.querySelector("#backCardThree");
const backCardFour = document.querySelector("#backCardFour");
const backCardFive = document.querySelector("#backCardFive");
const backCardSix = document.querySelector("#backCardSix");
const backCardSeven = document.querySelector("#backCardSeven");
const backCardEight = document.querySelector("#backCardEight");
const backCardNine = document.querySelector("#backCardNine");
const backCardTen = document.querySelector("#backCardTen");
const backCardEleven = document.querySelector("#backCardEleven");
const backCardTwelve = document.querySelector("#backCardTwelve");

backCardOne.addEventListener("click", function(){
    backCardOne.style.visibility = "hidden";
});

backCardTwo.addEventListener("click", function(){
    backCardTwo.style.visibility = "hidden";
});

backCardThree.addEventListener("click", function(){
    backCardThree.style.visibility = "hidden";
});

backCardFour.addEventListener("click", function(){
    backCardFour.style.visibility = "hidden";
});

backCardFive.addEventListener("click", function(){
    backCardFive.style.visibility = "hidden";
});

backCardSix.addEventListener("click", function(){
    backCardSix.style.visibility = "hidden";
});
backCardSeven.addEventListener("click", function(){
    backCardSeven.style.visibility = "hidden";
});

backCardEight.addEventListener("click", function(){
    backCardEight.style.visibility = "hidden";
});

backCardNine.addEventListener("click", function(){
    backCardNine.style.visibility = "hidden";
});

backCardTen.addEventListener("click", function(){
    backCardTen.style.visibility = "hidden";
});

backCardEleven.addEventListener("click", function(){
    backCardEleven.style.visibility = "hidden";
});

backCardTwelve.addEventListener("click", function(){
    backCardTwelve.style.visibility = "hidden";
});



const restartButton = document.querySelector("#buttonThree");

restartButton.addEventListener("click", function(){
    diamond.style.marginLeft = 0;
    clubs.style.marginLeft = 0;
    hearts.style.marginLeft = 0;
    spades.style.marginLeft = 0;

    backCardOne.style.visibility = "visible";
    backCardTwo.style.visibility = "visible";
    backCardThree.style.visibility = "visible";
    backCardFour.style.visibility = "visible";
    backCardFive.style.visibility = "visible";
    backCardSix.style.visibility = "visible";
    backCardSeven.style.visibility = "visible";
    backCardEight.style.visibility = "visible";
    backCardNine.style.visibility = "visible";
    backCardTen.style.visibility = "visible";
    backCardEleven.style.visibility = "visible";
    backCardTwelve.style.visibility = "visible";
})



