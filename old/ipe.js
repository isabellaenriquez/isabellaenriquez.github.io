
// for animations!
document.addEventListener('DOMContentLoaded', () => {
    //console.log('loaded');
    const skillContainer = document.getElementById('skill-container');
    const skills = skillContainer.children;
    //const interests = document.getElementById('interest-container').children;


    const home = document.getElementById('home');
    const headshot = document.getElementById('headshot');
    const about = document.getElementById('about');
    const aboutTitle = document.getElementById('about-title');
    const skillTitle = document.getElementById('skill-title');
    const projects = document.getElementById('projects');
    const projectsTitle = document.getElementById('featured-projects');
    animate();


    // listen for scroll event and call animate function
    document.addEventListener('scroll', animate);


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
        if (currentScroll >= elementY) {
            return true;
        }

        return false;
    }

    // animate certain elements when they are in view
    function animate() {
        // animate home
        if (isInView(headshot) && (!home.style.visibility || home.style.visibility === 'hidden')) {
            home.style.visibility = 'visible';
            home.classList.add('animate__animated', 'animate__slower', 'animate__fadeIn');
        }

        if (isInView(aboutTitle) && (!about.style.visibility || about.style.visibility === 'hidden')) {
            about.style.visibility = 'visible';
            about.classList.add('animate__animated', 'animate__slow', 'animate__fadeIn');
        }

        if (isInView(skillTitle) && (!skillTitle.style.visibility || skillTitle.style.visibility === 'hidden')) {
            skillTitle.style.visibility = 'visible';
            skillTitle.classList.add('animate__animated', 'animate__slow', 'animate__fadeIn');
        }

        if (isInView(projectsTitle) && (!projects.style.visibility || projects.style.visibility === 'hidden')) {
            projects.style.visibility = 'visible';
            projects.classList.add('animate__animated', 'animate__slow', 'animate__fadeIn');
        }

        // animate skills
        for (let i = 0; i < skills.length; i++) {
            let element = skills[i];
            // only animate first time site is loaded
            if (isInView(element) && !element.style.visibility) {
                //console.log(element)
                element.style.visibility = 'visible';
                element.classList.add('animate__animated', 'animate__fadeIn');
            }
        }

    }
});