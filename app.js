document.querySelector('.banner button')
    .addEventListener('click',() => {
        document.querySelector('.banner').style.display ="none";
        document.querySelector('.slideshow-wrapper').style.cssText =" visibility: visible ; opacity: 1"
        document.querySelector('.slideshow')
            .addEventListener("click",() => {
                document.querySelector('.slideshow').style.animation= 'slideShow 24s infinite';
            })

    })