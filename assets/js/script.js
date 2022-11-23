/**
 * Webinar Slider
 */
document.addEventListener( 'DOMContentLoaded', function() {
    var splide = new Splide( '.splide', {
        direction   : 'ttb',
        height      : 'auto',
        autoHeight  : true,
        wheel       : false,
        perPage     : 4,
        perMove     : 4,
        speed       : 400,
        paginationKeyboard: false,
        gap         : '1rem',
        pagination  : false,
        breakpoints: {
            576: {
                perPage: 2,
                perMove: 2,
            },
            768: {
                perPage: 2,
                perMove: 2,
            },
            992: {
                perPage: 2,
                perMove: 2,
            },
            1200: {
                perPage: 4,
            },
            1400: {
                perPage: 4,
            },
        },
        classes: {
            // Add classes for arrows.
            arrows: 'splide__arrows arrows_slide',
            // arrow : 'splide__arrow your-class-arrow',
            prev  : 'splide__arrow--prev arrow_slide_prev',
            next  : 'splide__arrow--next arrow_slide_next',
        },
        arrows: { 
            prev: "<i class='mns-arrow-top'></i>", 
            next: "<i class='mns-arrow-top'></i>",
        }
      } );
      splide.mount();
});

/**
 * Animations
 */
const faderDown = document.querySelectorAll('.fade_down');
const appearOptions = {
    threshhold: 0,
    rootMargin: "0px 0px -200px 0px"
};

const appearOnScroll = new IntersectionObserver(
    function (entries , appearOnScroll) {
    entries.forEach( entry => {
        if(!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('animate_default');
            appearOnScroll.unobserve( entry.target );
        }
    })
}, appearOptions );

faderDown.forEach(fadeeee => {
    appearOnScroll.observe(fadeeee);
});

/**
 * Responsive Show Scale 
 */
$(document).ready(function() {
    $(window).resize(function(event) {
        let breakpoint = null;
        if (event.target.innerWidth < 576) {
            breakpoint = '| xs '
        }
        else if (event.target.innerWidth < 768) {
            breakpoint = '| sm '
        }
        else if (event.target.innerWidth < 992) {
            breakpoint = '| md '
        }
        else if (event.target.innerWidth < 1200) {
            breakpoint = '| lg '
        }
        else if (event.target.innerWidth < 1400) {
            breakpoint = '| xl '
        }
        else if (event.target.innerWidth >= 1400) {
            breakpoint = '| xxl '
        }
        $('.responsive .width').text(event.target.innerWidth+' px '+breakpoint);
        $('.responsive .height').text(event.target.innerHeight+' px '+breakpoint);
    });
});



