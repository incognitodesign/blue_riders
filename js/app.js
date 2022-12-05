const el = (css) => document.querySelector(css);
// var randomColor
let opacityEls = document.querySelectorAll('.position_rel')
el('#randomCol').addEventListener('click',startMyInterval);
el('#changeCol').addEventListener('click',changeColor);
el('#stopCol').addEventListener('click',stopRandom);


let myInterval = false;
function startMyInterval(){
    if(!myInterval){
        randomNewColor();
        myInterval = setInterval(randomNewColor,5000);
    }


    function randomNewColor () {

        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        document.body.style.backgroundColor = "#"+randomColor;
        opacityEls.forEach(function(el){
            el.style.backgroundColor = '#'+randomColor;
        })
        
        };

}

function stopRandom(){
    clearInterval(myInterval)
    document.body.style.backgroundColor = "#1f6095";
    opacityEls.forEach(function(el){
        el.style.backgroundColor = "#1f6095";
    })
}

function changeColor(){
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#"+randomColor;

    opacityEls.forEach(function(el){
        el.style.backgroundColor = '#'+randomColor;
    })

}




