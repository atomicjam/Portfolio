import './style.css'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MotionPathPlugin);

import Splitting from "splitting";

import Alpine from 'alpinejs'
import intersect from '@alpinejs/intersect'
Alpine.plugin(intersect)
Alpine.start()
window.Alpine = Alpine

// Split Elements
const wrapElements = (elems, wrapType, wrapClass) => {
    elems.forEach(char => {
        const wrapEl = document.createElement(wrapType);
        wrapEl.classList = wrapClass;
        char.parentNode.appendChild(wrapEl);
        wrapEl.appendChild(char);
    });
}
Splitting();

// Get Titles
const fx1Titles = [...document.querySelectorAll('.title[data-splitting][data-effect1]')];
const fx2Titles = [...document.querySelectorAll('.title[data-splitting][data-effect2]')];
const fx5Titles = [...document.querySelectorAll('.title[data-splitting][data-effect5]')];
const fx6Titles = [...document.querySelectorAll('.title[data-splitting][data-effect6]')];
const fx8Titles = [...document.querySelectorAll('.title[data-splitting][data-effect8]')];
const fx10Titles = [...document.querySelectorAll('.title[data-splitting][data-effect10]')];
const fx11Titles = [...document.querySelectorAll('.title[data-splitting][data-effect11]')];
const fx13Titles = [...document.querySelectorAll('.title[data-splitting][data-effect13]')];
const fx16Titles = [...document.querySelectorAll('.title[data-splitting][data-effect16]')];
const fx17Titles = [...document.querySelectorAll('.title[data-splitting][data-effect17]')];
const fx19Titles = [...document.querySelectorAll('.title[data-splitting][data-effect19]')];
const fx20Titles = [...document.querySelectorAll('.title[data-splitting][data-effect20]')];
const fx22Titles = [...document.querySelectorAll('.title[data-splitting][data-effect22]')];
const fx23Titles = [...document.querySelectorAll('.title[data-splitting][data-effect23]')];
const fx27Titles = [...document.querySelectorAll('.title[data-splitting][data-effect27]')];
const fx28Titles = [...document.querySelectorAll('.title[data-splitting][data-effect28]')];
const fx29Titles = [...document.querySelectorAll('.title[data-splitting][data-effect29]')];

// GSAP Scroll Triggers
const scroll = () => {
    fx1Titles.forEach(title => {
        const chars = title.querySelectorAll('.char');
        gsap.fromTo(chars, {
            'will-change': 'opacity, transform',
            opacity: 0,
            scale: 0.6,
            rotationZ: () => gsap.utils.random(-20, 20),
        },
        {
            ease: 'power4',
            opacity: 1,
            scale: 1,
            rotation: 0,
            stagger: 0.4,
            scrollTrigger: {
                trigger: title,
                start: 'center+=20% bottom',
                end: '+=50%',
                scrub: true,
                once: false,
                markers: false
            },
        });
    });

    fx2Titles.forEach(title => {
        const chars = title.querySelectorAll('.char');
        gsap.fromTo(chars, {
            'will-change': 'opacity, transform',
            opacity: 0,
            yPercent: 120,
            scaleY: 2.3,
            scaleX: 0.7,
            transformOrigin: '50% 0%'
        },
        {
            duration: 1,
            ease: 'back.inOut(2)',
            opacity: 1,
            yPercent: 0,
            scaleY: 1,
            scaleX: 1,
            stagger: 0.03,
            scrollTrigger: {
                trigger: title,
                start: 'center bottom+=50%',
                end: 'bottom top+=40%',
                scrub: true
            }
        });
    });

    fx5Titles.forEach(title => {

        const chars = title.querySelectorAll('.char');

        gsap.fromTo(chars, {
            'will-change': 'opacity, transform',
            opacity: 0,
            xPercent: () => gsap.utils.random(-200, 200),
            yPercent: () => gsap.utils.random(-150, 150)
        },
            {
                ease: 'power1.inOut',
                opacity: 1,
                xPercent: 0,
                yPercent: 0,
                stagger: { each: 0.05, grid: 'auto', from: 'random' },
                scrollTrigger: {
                    trigger: title,
                    start: 'center bottom+=10%',
                    end: 'bottom center',
                    scrub: 0.9
                }
            });

    });

    fx6Titles.forEach(title => {

        const words = title.querySelectorAll('.word');

        for (const word of words) {

            const chars = word.querySelectorAll('.char');

            chars.forEach(char => gsap.set(char.parentNode, { perspective: 2000 }));

            gsap.fromTo(chars, {
                'will-change': 'opacity, transform',
                opacity: 0,
                rotationX: -90,
                yPercent: 50
            },
                {
                    ease: 'power1.inOut',
                    opacity: 1,
                    rotationX: 0,
                    yPercent: 0,
                    stagger: {
                        each: 0.03,
                        from: 0
                    },
                    scrollTrigger: {
                        trigger: word,
                        start: 'center bottom+=40%',
                        end: 'bottom center-=30%',
                        scrub: 0.9
                    }
                });

        }

    });

    const lettersAndSymbols = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '!', '@', '#', '$', '%', '^', '&', '*', '-', '_', '+', '=', ';', ':', '<', '>', ','];
    fx8Titles.forEach(title => {

        const chars = title.querySelectorAll('.char');

        chars.forEach((char, position) => {
            let initialHTML = char.innerHTML;

            gsap.fromTo(char, {
                opacity: 0
            },
                {
                    duration: 0.03,
                    innerHTML: () => lettersAndSymbols[Math.floor(Math.random() * lettersAndSymbols.length)],
                    repeat: 1,
                    repeatRefresh: true,
                    opacity: 1,
                    repeatDelay: 0.03,
                    delay: (position + 1) * 0.18,
                    onComplete: () => gsap.set(char, { innerHTML: initialHTML, delay: 0.03 }),
                    scrollTrigger: {
                        trigger: title,
                        start: 'top bottom',
                        end: 'bottom center',
                        toggleActions: "play resume resume reset",
                        onEnter: () => gsap.set(char, { opacity: 0 })
                    }
                });

        });

    });

    fx10Titles.forEach(title => {

        const chars = title.querySelectorAll('.char');

        gsap.fromTo(chars, {
            'will-change': 'opacity',
            opacity: 0,
            filter: 'blur(20px)'
        },
            {
                duration: 0.25,
                ease: 'power1.inOut',
                opacity: 1,
                filter: 'blur(0px)',
                stagger: { each: 0.05, from: 'random' },
                scrollTrigger: {
                    trigger: title,
                    start: 'top bottom',
                    end: 'center center',
                    toggleActions: "play resume resume reset"
                }
            });

    });

    fx11Titles.forEach(title => {

        const chars = title.querySelectorAll('.char');
        wrapElements(chars, 'span', 'char-wrap');

        gsap.fromTo(chars, {
            'will-change': 'transform',
            transformOrigin: '0% 50%',
            xPercent: 105,
        },
            {
                duration: 1,
                ease: 'expo',
                xPercent: 0,
                stagger: 0.042,
                scrollTrigger: {
                    trigger: title,
                    start: 'top bottom',
                    end: 'top top+=10%',
                    toggleActions: "play resume resume reset",
                }
            });

    });

    fx13Titles.forEach(title => {

        const chars = title.querySelectorAll('.char');

        chars.forEach(char => gsap.set(char.parentNode, { perspective: 2000 }));

        gsap.fromTo(chars, {
            'will-change': 'opacity, transform',
            opacity: 0,
            rotationY: 180,
            xPercent: -40,
            yPercent: 100
        },
            {
                ease: 'power4.inOut()',
                opacity: 1,
                rotationY: 0,
                xPercent: 0,
                yPercent: 0,
                stagger: {
                    each: -0.03,
                    from: 0
                },
                scrollTrigger: {
                    trigger: title,
                    start: 'center bottom',
                    end: 'bottom center-=20%',
                    scrub: 0.9
                }
            });

    });


    fx16Titles.forEach(title => {

        /*gsap.fromTo(title, {
            transformOrigin: '0% 50%',
            rotate: 3
        }, {
            ease: 'none',
            rotate: 0,
            scrollTrigger: {
                trigger: title,
                start: 'top bottom',
                end: 'top top',
                scrub: true,
            }
        });*/

        gsap.fromTo(title.querySelectorAll('.word'), {
            'will-change': 'opacity',
            opacity: 0.1
        },
            {
                ease: 'none',
                opacity: 1,
                stagger: 0.05,
                scrollTrigger: {
                    trigger: title,
                    start: 'top bottom-=20%',
                    end: 'center top+=40%',
                    scrub: true,
                }
            });

    });

    fx17Titles.forEach(title => {

        const chars = title.querySelectorAll('.char');

        chars.forEach(char => gsap.set(char.parentNode, { perspective: 1000 }));

        gsap.fromTo(chars, {
            'will-change': 'opacity, transform',
            opacity: 0,
            rotateX: () => gsap.utils.random(-120, 120),
            z: () => gsap.utils.random(-200, 200),
        },
            {
                ease: 'none',
                opacity: 1,
                rotateX: 0,
                z: 0,
                stagger: 0.02,
                scrollTrigger: {
                    trigger: title,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true,
                }
            });

    });


    fx19Titles.forEach(title => {

        const chars = title.querySelectorAll('.char');

        chars.forEach(char => gsap.set(char.parentNode, { perspective: 1000 }));

        gsap.fromTo(chars, {
            'will-change': 'opacity, transform',
            transformOrigin: '50% 0%',
            opacity: 0,
            rotationX: -90,
            z: -200
        },
            {
                ease: 'power1',
                opacity: 1,
                stagger: 0.05,
                rotationX: 0,
                z: 0,
                scrollTrigger: {
                    trigger: title,
                    start: 'center bottom',
                    end: 'bottom top+=20%',
                    scrub: true,
                }
            });

    });

    fx20Titles.forEach(title => {

        const chars = title.querySelectorAll('.char');

        chars.forEach(char => gsap.set(char.parentNode, { perspective: 1000 }));

        gsap.fromTo(chars, {
            'will-change': 'opacity, transform',
            transformOrigin: '50% 100%',
            opacity: 0,
            rotationX: 90
        },
            {
                ease: 'power4',
                opacity: 1,
                stagger: {
                    each: 0.03,
                    from: 'random'
                },
                rotationX: 0,
                scrollTrigger: {
                    trigger: title,
                    start: 'center bottom',
                    end: 'bottom top+=20%',
                    scrub: true,
                }
            });

    });

    

    fx22Titles.forEach(title => {

        const words = [...title.querySelectorAll('.word')];

        for (const word of words) {
            const chars = word.querySelectorAll('.char');
            const charsTotal = chars.length;

            chars.forEach(char => gsap.set(char.parentNode, { perspective: 1000 }));

            gsap.fromTo(chars, {
                'will-change': 'transform',
                x: position => {
                    const factor = position < Math.ceil(charsTotal / 2) ? position : Math.ceil(charsTotal / 2) - Math.abs(Math.floor(charsTotal / 2) - position) - 1;
                    return (charsTotal % 2 ? Math.abs(Math.ceil(charsTotal / 2) - 1 - factor) : Math.abs(Math.ceil(charsTotal / 2) - factor)) * 200 * (position < charsTotal / 2 ? -1 : 1);
                },
                y: position => {
                    const factor = position < Math.ceil(charsTotal / 2) ? position : Math.ceil(charsTotal / 2) - Math.abs(Math.floor(charsTotal / 2) - position) - 1;
                    return factor * 60;
                },
                rotationY: -270,
                rotationZ: position => {
                    const factor = position < Math.ceil(charsTotal / 2) ? position : Math.ceil(charsTotal / 2) - Math.abs(Math.floor(charsTotal / 2) - position) - 1;
                    return position < charsTotal / 2 ? Math.abs(factor - charsTotal / 2) * 8 : -1 * Math.abs(factor - charsTotal / 2) * 8;
                }
            },
                {
                    ease: 'power2.inOut',
                    x: 0,
                    y: 0,
                    rotationZ: 0,
                    rotationY: 0,
                    scale: 1,
                    scrollTrigger: {
                        trigger: word,
                        start: 'top bottom+=40%',
                        end: 'top top+=15%',
                        scrub: true,
                    }
                });

        }

    });

    fx23Titles.forEach(title => {

        const words = [...title.querySelectorAll('.word')];

        for (const [wordPosition, word] of words.entries()) {

            gsap.fromTo(word.querySelectorAll('.char'), {
                'will-change': 'transform',
                scale: 0.01,
                x: (pos, _, arr) => {
                    return wordPosition % 2 ? pos * 50 : (arr.length - pos - 1) * -50
                }
            },
                {
                    ease: 'power4',
                    scale: 1,
                    x: 0,
                    scrollTrigger: {
                        trigger: word,
                        start: 'center bottom',
                        end: 'bottom top-=40%',
                        scrub: true,
                    }
                });

        }

    });

    fx27Titles.forEach(title => {

        const words = [...title.querySelectorAll('.word')];

        words.forEach(word => gsap.set(word.parentNode, { perspective: 1000 }));

        gsap.fromTo(words, {
            'will-change': 'opacity, transform',
            z: () => gsap.utils.random(500, 950),
            opacity: 0,
            xPercent: (pos) => gsap.utils.random(-100, 100),
            yPercent: (pos) => gsap.utils.random(-10, 10),
            rotationX: () => gsap.utils.random(-90, 90)
        },
            {
                ease: 'expo',
                opacity: 1,
                rotationX: 0,
                rotationY: 0,
                xPercent: 0,
                yPercent: 0,
                z: 0,
                scrollTrigger: {
                    trigger: title,
                    start: 'center center',
                    end: '+=300%',
                    scrub: true,
                    pin: title.parentNode,
                },
                stagger: {
                    each: 0.006,
                    from: 'random'
                }
            });

    });

    fx28Titles.forEach(title => {

        const words = [...title.querySelectorAll('.word')];

        for (const word of words) {

            const chars = word.querySelectorAll('.char');
            const charsTotal = chars.length;

            gsap.fromTo(chars, {
                'will-change': 'transform, filter',
                transformOrigin: '50% 100%',
                scale: position => {
                    const factor = position < Math.ceil(charsTotal / 2) ? position : Math.ceil(charsTotal / 2) - Math.abs(Math.floor(charsTotal / 2) - position) - 1;
                    return gsap.utils.mapRange(0, Math.ceil(charsTotal / 2), 0.5, 2.1, factor);
                },
                y: position => {
                    const factor = position < Math.ceil(charsTotal / 2) ? position : Math.ceil(charsTotal / 2) - Math.abs(Math.floor(charsTotal / 2) - position) - 1;
                    return gsap.utils.mapRange(0, Math.ceil(charsTotal / 2), 0, 60, factor);
                },
                rotation: position => {
                    const factor = position < Math.ceil(charsTotal / 2) ? position : Math.ceil(charsTotal / 2) - Math.abs(Math.floor(charsTotal / 2) - position) - 1;
                    return position < charsTotal / 2 ? gsap.utils.mapRange(0, Math.ceil(charsTotal / 2), -4, 0, factor) : gsap.utils.mapRange(0, Math.ceil(charsTotal / 2), 0, 4, factor);
                },
                filter: 'blur(12px) opacity(0)',
            },
                {
                    ease: 'power2.inOut',
                    y: 0,
                    rotation: 0,
                    scale: 1,
                    filter: 'blur(0px) opacity(1)',
                    scrollTrigger: {
                        trigger: word,
                        start: 'top bottom+=40%',
                        end: 'top top+=15%',
                        scrub: true,
                    },
                    stagger: {
                        amount: 0.15,
                        from: 'center'
                    }
                });

        }

    });

    fx29Titles.forEach(title => {

        const words = [...title.querySelectorAll('.word')];

        for (const [pos, word] of words.entries()) {

            const chars = word.querySelectorAll('.char');

            gsap.fromTo(chars, {
                'will-change': 'transform',
                transformOrigin: `${pos % 2 ? 0 : 100}% ${pos % 2 ? 100 : 0}%`,
                scale: 0
            },
                {
                    ease: 'power4',
                    scale: 1,
                    stagger: {
                        each: 0.03,
                        from: pos % 2 ? 'end' : 'start'
                    },
                    scrollTrigger: {
                        trigger: word,
                        start: 'top bottom-=10%',
                        end: 'top top',
                        scrub: true,
                    }
                });
        }

    });
// Pop Images Animations (All Pages)
    const image_wrapper = [...document.querySelectorAll('.image_wrapper')];
    image_wrapper.forEach(item => { 
        gsap.to(item.querySelector('img'), {
            'will-change': 'transform',
            transformOrigin: '50% 50%',
            scale: 1.05,
            translateY: 50,
            height: +400,
            scrollTrigger: {
                trigger: item,
                start: 'top bottom',
                scrub: true,
            }
        });
    });
// Spin Flower Animation (Flourish)
    const flower = [...document.querySelectorAll('svg[data-effect-flower]')];
    flower.forEach(item => { 
        gsap.to(item, {
            'will-change': 'transform',
            transformOrigin: '50% 50%',
            opacity: 0.6,
            rotate: 90,
            scale: 0.65,
            ease: 'back',
            scrollTrigger: {
                trigger: item,
                start: 'center bottom',
                end: 'top top+=20%',
                scrub: true,
            }
        });
    });
    const flower2 = [...document.querySelectorAll('svg[data-effect-flower2]')];
    flower2.forEach(item => { 
        gsap.to(item, {
            'will-change': 'transform',
            transformOrigin: '50% 50%',
            opacity: 0.6,
            rotate: -90,
            scale: 0.75,
            ease: 'back',
            scrollTrigger: {
                trigger: item,
                start: 'center center+=45%',
                end: 'top top',
                scrub: true,
            }
        });
    });
// Grow Leaf Animation (Flourish)
const leaf = [...document.querySelectorAll('svg[data-effect-leaf]')];
leaf.forEach(item => { 
    gsap.to(item, {
        'will-change': 'transform',
        transformOrigin: '30% 100%',
        opacity: 0.55,
        rotate: 20,
        scale: 1,
        ease: 'back',
        scrollTrigger: {
            trigger: item,
            start: 'center center+=25%',
            end: 'top top+=20%',
            scrub: true,
            //markers: true,
        }
    });
});
// Broken bulb Animation (Helpdesk)
const bulb = [...document.querySelectorAll('svg[data-effect-bulb]')];
bulb.forEach(item => { 
    gsap.to(item, {
        'will-change': 'transform',
        transformOrigin: '30% 100%',
        opacity: 0.85,
        rotate: 10,
        ease: 'back',
        scrollTrigger: {
            trigger: item,
            start: 'center center+=25%',
            end: 'top top+=20%',
            scrub: true,
            //markers: true,
        }
    });
    gsap.to(item.querySelectorAll('#filament'), {
        repeat: -1,
        opacity: 0,
        stroke: '#ffff00',
        scrollTrigger: {
            trigger: item,
            start: 'center center-=15%',
            end: 'top top-=15%',
            scrub: true,
        }
    });
});
// Springy line (Springboard)
const spring = [...document.querySelectorAll('svg[data-effect-spring]')];
spring.forEach(item => {
    gsap.defaults({ease: 'elastic(1, 0.2)'});
    var svg  = document.querySelector('svg[data-effect-spring]');
    var path = document.querySelector('#spring-path');
    var connected = false;
    var snapDist = 50;
    var startY = 50;
    // Break the path down into points
    var p0 = { x: 0, y: startY };
    var p1 = { x: 150, y: startY };
    var p2 = { x: 300, y: startY };
    svg.addEventListener("mousemove", onMove);
    gsap.ticker.add(update);
    update();
    function update() {
        var d = "M" + p0.x + "," + p0.y + " Q" + p1.x + "," + p1.y + " " + p2.x + "," + p2.y;
        path.setAttribute("d", d);
        if (Math.abs(p1.y - startY) > snapDist * 2) {        
        connected = false;
        gsap.to(p1, { duration: 2,  y: startY });
        }  
    } 
    function onMove(event) {
        if (!connected && event.target === path) {    
        connected = true;    
        gsap.killTweensOf(p1); // Kill any active tweens on the point
        }
        if (connected) { 
            p1.y = 200; // move center point down 200  
        }
    }
});
// Roll ball (Enrolment)
const roll = [...document.querySelectorAll('svg[data-effect-roll]')];
roll.forEach(item => {
    gsap.to(item, {
        'will-change': 'transform',
        transformOrigin: '50% 50%',
        opacity: 1,
        x: document.querySelector('#enrolment').clientWidth + (document.body.clientWidth / 100 * 14),
        ease: 'back',
        scrollTrigger: {
            trigger: item,
            start: 'center+=20% bottom',
            end: '+=50%',
            scrub: true,
        }
    });
});


};


// GSAP Scroll Triggers
scroll();

// Show DOM when everything is ready
let domReady = (cb) => {
    (document.readyState === 'interactive' || document.readyState === 'complete') ? cb() : document.addEventListener('DOMContentLoaded', cb);
};
domReady(() => {
    document.body.style.visibility = 'visible';
});