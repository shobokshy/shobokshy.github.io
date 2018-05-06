import './style.css';
import 'bulma/css/bulma.css';

import anime from 'animejs';



window.onload = function() {
    
    var lineDrawing = anime({
        targets: '#logo rect',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 1500,
        delay: function(el, i) { return i * 250 },
        direction: 'alternate',
        loop: true
    });


};

