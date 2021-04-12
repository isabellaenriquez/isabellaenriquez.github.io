
// for animations!
document.addEventListener('DOMContentLoaded', () => {
    //console.log('loaded');
    const skills = document.getElementById('skill-container').children;
    //const interests = document.getElementById('interest-container').children;

    // listen for scroll event and call animate function
    document.addEventListener('scroll', animate);

    
    const name = document.getElementById('my-name');
    name.addEventListener('mouseover', () =>{
        name.style.visibility = 'hidden';
        name.classList.remove('animate__animated', 'animate__tada');
        showName();
    });

    showName(); // put a timer here at some point

    function showName() {
        if (isInView(name) && (!name.style.visibility || name.style.visibility == 'hidden')) {
            name.style.visibility = 'visible';
            name.classList.add('animate__animated', 'animate__tada');
        }
    }


    // check if element is in view
    function isInView(element) {
        // get window height
        const windowHeight = window.innerHeight;
        // get number of pixels that the document is scrolled
        let scrollPixels = window.scrollY || window.pageYOffset;

        // get height of individual element
        let elementHeight = element.clientHeight;

        // get current scroll position (top of the page to the bottom of the current viewport)
        let currentScroll = scrollPixels + windowHeight;
        // get element position (top of the page to bottom of the element)
        let elementY = element.getBoundingClientRect().top + scrollPixels + elementHeight;

        // if scroll position > element position, then element is in view
        if (currentScroll > elementY) {
            return true;
        }

        return false;
    }

    // animate certain elements when they are in view
    function animate() {

        // animate skills
        for (let i = 0; i < skills.length; i++) {
            let element = skills[i];
            // only animate first time site is loaded
            if (isInView(element) && !element.style.visibility) {
                //console.log(element)
                element.style.visibility = 'visible';
                element.classList.add('animate__animated', 'animate__fadeInLeft');
            }
        }
    }

    /*document.getElementsByClassName('resume').foreach((button) => {
        button.addEventListener('click', () =>{
            // open popup 
            //<embed src="resume.pdf" height="100vh" width="auto"/>
        })
    })*/
});