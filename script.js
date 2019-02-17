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

        tl
            .addLabel("fr1")

            .to(rasberry, 3.5,{rotation:10, y:"-=15", x:"-=20", ease: Power1.easeInOut}, "fr1")
            .to(lime, 3.5,{rotation:-10, y:"-=25", x:"+=20", ease: Power1.easeInOut}, "fr1")
            .to(mandarin, 3.5,{rotation:12, y:"+=15", x:"+=70", ease: Power1.easeInOut}, "fr1")
            .to(round1, 3.5,{rotation:20, y:"+=30", x:"-=25", ease: Power1.easeInOut}, "fr1")
            .to(round2, 3.5,{rotation:-15, y:"-=15", x:"+=20", ease: Power1.easeInOut}, "fr1")
            .to(round3, 3.5,{rotation:35, y:"-=35", x:"+=25", ease: Power1.easeInOut}, "fr1")

            .addLabel("fr2", "3.5")

            .to(rasberry, 3.5,{rotation:-10, y:"+=15", x:"0", ease: Power1.easeInOut}, "fr2")
            .to(lime, 3.5,{rotation:-10, y:"+=15", x:"0", ease: Power1.easeInOut}, "fr2")
            .to(mandarin, 3.5,{rotation:-10, y:"+=15", x:"0", ease: Power1.easeInOut}, "fr2")
            .to(round1, 3.5,{rotation:-10, 'webkitFilter': 'blur(0.6px)', y:"+=15", x:"0", ease: Power1.easeInOut}, "fr2")
            .to(round2, 3.5,{rotation:-10, 'webkitFilter': 'blur(1px)', y:"+=15", x:"0", ease: Power1.easeInOut}, "fr2")
            .to(round3, 3.5,{rotation:-10, 'webkitFilter': 'blur(0.2px)', y:"+=15", x:"40", ease: Power1.easeInOut}, "fr2")

        }  

};