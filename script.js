/******************** GSAP animation ********************/

    function politeInit() {

            var select = function(s) {
                return document.querySelector(s);
            },
            selectAll = function(s) {
                return document.querySelectorAll(s);
            },
            wrapper = select('#wrapper'),
            wrect = select('#wrect'),
            rasberry = select('#rasberry'),
            lime = select('#lime'),
            mandarin = select('#mandarin'),
            round1 = select('#round-1'),
            round2 = select('#round-2'),
            round3 = select('#round-3'),
            fruits = selectAll('.fruits'),
            tl = new TimelineMax({
                ease: Power1.easeInOut,
                yoyoEase: Power4.easeInOut,
                repeat: -1,
                yoyo: true  
            });

        animate();
        
        /* Animation of all the objects */

        function animate() {      

        var duration = 4.5;
        tl
            .addLabel("fr1")

            .to(rasberry, duration,{rotation:-5, y:"-=38", x:"-=65", ease: Power1.easeInOut}, "fr1")
            .to(lime, duration,{rotation:-10, y:"-=30", x:"+=48", ease: Power1.easeInOut}, "fr1")
            .to(mandarin, duration,{rotation:12, y:"+=35", x:"+=90", ease: Power1.easeInOut}, "fr1")
            .to(round1, duration,{rotation:20, 'webkitFilter': 'blur(0)', y:"+=30", x:"-=75", ease: Power1.easeInOut}, "fr1")
            .to(round2, duration,{rotation:-15, 'webkitFilter': 'blur(0)', y:"-=25", x:"-=80", ease: Power1.easeInOut}, "fr1")
            .to(round3, duration,{rotation:35, 'webkitFilter': 'blur(0)', y:"-=35", x:"+=55", ease: Power1.easeInOut}, "fr1")

            .addLabel("fr2", "4.5")

            .to(rasberry, duration,{rotation:10, zIndex:3, y:"+=15", x:"0", ease: Power1.easeInOut}, "fr2")
            .to(lime, duration,{rotation:-10, zIndex:6, y:"+=15", x:"-=122", ease: Power1.easeInOut}, "fr2")
            .to(mandarin, duration,{rotation:-10, zIndex:1, y:"-=15", x:"-=42", ease: Power1.easeInOut}, "fr2")
            .to(round1, duration,{rotation:-10, 'webkitFilter': 'blur(0.6px)', y:"+=15", x:"0", ease: Power1.easeInOut}, "fr2")
            .to(round2, duration,{rotation:-10, 'webkitFilter': 'blur(0.6px)', y:"-=5", x:"+=185", ease: Power1.easeInOut}, "fr2")
            .to(round3, duration,{rotation:-10, 'webkitFilter': 'blur(0.6px)', y:"+=15", x:"40", ease: Power1.easeInOut}, "fr2")

        }  

};