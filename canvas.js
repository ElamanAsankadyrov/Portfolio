
particlesJS("particles-js", {
    "particles": {
    "number": {
        "value": 150,
        "density": {
        "enable": true,
        "value_area": 1000
        }
    },
    "color": {
        "value": "#F0F0F0"
    },
        "shape": {
        "type": "circle",
        "stroke": {
        "width": 0,
        "color": "#D25380"
        },
        "polygon": {
        "nb_sides": 5
        },
        "image": {
        "src": "img/github.svg",
        "width": 200,
        "height": 200
        }
    },
        "opacity": {
        "value": 2,
        "random": false,
        "anim": {
            "enable": false,
            "speed": 0.5,
            "opacity_min": 0.1,
            "sync": false
        }
    },
        "size": {
        "value": 3,
        "random": true,
        "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
        }
    },
        "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.8,
        "width": 0.5
    },
    "move": {
        "enable": true,
        "speed": 1.5,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
        }
    }
    },
    "interactivity": {
    "detect_on": "canvas",
    "events": {
        "onhover": {
            "enable": true,
            "mode": "grab"
        },
        "onclick": {
            "enable": true,
            "mode": "push"
        },
        "resize": true
    },
    "modes": {
        "grab": {
            "distance": 200,
            "line_linked": {
            "opacity": 1
        }
        },
        "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 1
        },
        "repulse": {
            "distance": 200,
            "duration": 0.4
        },
        "push": {
            "particles_nb": 4
        },
        "remove": {
            "particles_nb": 2
        }
    }
    },
    "retina_detect": true
});



    let count_particles, stats, update;
stats = new stats;
stats.setMode(0);
stats.domElement.style.position = 'absolute';
stats.domElement.style.left = '0px';
stats.domElement.style.top = '0px';
document.body.appendChild(stats.domElement);
count_particles = document.querySelector('.js-count-particles');
update = function() {
    stats.begin();
    stats.end();
    if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
        count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
    }
    requestAnimationFrame(update);
};
requestAnimationFrame(update);