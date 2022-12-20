let rating = document.getElementById("rating");
let thanks = document.getElementById("thanks");
let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let submit = document.getElementById("submit");
let thanksrating = document.getElementById("thanksrating");
let ratingValue ;
let possibleRatings =[one, two, three, four, five];

possibleRatings.forEach(function(e) {
    e.addEventListener("click",function(){
        let arr = possibleRatings.filter(l => l != e);
        e.style.backgroundColor = 'hsl(25, 97%, 53%)';
        arr.forEach(l => l.style.backgroundColor ='hsl(214, 19%, 23%)');
        ratingValue = e.innerHTML;   
        submit.addEventListener("click", function(){   
            rating.style.display ='none';
            thanks.style.display ='block';
            thanksrating.innerHTML = 'You Selected '+ratingValue+' out of 5';
        })   
    });
});



