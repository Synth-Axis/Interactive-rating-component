let ratingValues = document.querySelectorAll(".ratingValue");

ratingValues.forEach( element => {
    element.addEventListener("click", eventArgs => {
    let ratingClicked = eventArgs.target;
    let chosenRating = ratingClicked.innerHTML;
    let ratingResult = document.querySelector("#chosenRating");
    ratingResult.innerHTML = chosenRating;

    ratingValues.forEach( element => {
        element.classList.remove("rating-clicked");
    });

    ratingClicked.classList.add("rating-clicked");
    });
    
});

let buttonSubmit = document.querySelector("#btnSubmit");

buttonSubmit.addEventListener("click", ()=>{
    let ratingScreen = document.querySelector(".ratingScreen");
    let thankYou = document.querySelector(".thankYouScreen");
    ratingScreen.classList.add("hide");
    thankYou.classList.remove("hide");
});

let myMediaQuery = window.matchMedia('(max-width: 375px)');

function widthChange(myMediaQuery) {
  if(myMediaQuery.matches) {
    document.querySelector("#mainContainer").classList.remove("main-container");
    document.querySelector("#mainContainer").classList.add("main-container-mobile");
    }
}

myMediaQuery.addEventListener('change', widthChange);
