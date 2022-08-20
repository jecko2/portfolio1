(function() {
    "use strict"

    // DOM
    const header = document.querySelector("header");
    const navLink = document.querySelectorAll(".nav-link");
    const scrollTop = document.querySelector(".scroll-top");


    // skills

    const skill1 = document.querySelector(".skill:first-child ");
    const skillCounters = document.querySelectorAll(".counter span");
    const progressBar = document.querySelectorAll(".sk-progress svg circle")


    // services
    const service_selection = document.querySelector(".milestone");
    const numberCount = document.querySelectorAll(".milestone .ml .number span");

    // image holder

    const showcaseImg = document.querySelector(".showcase-image img");

    const  hasReached = (event) => {
        let topPos = event.getBoundingClientRect().top;
        if (window.innerHeight >= topPos + event.offsetHeight) {
            return true;
        }
        else {
            return false
        }
    }


    const updateCount = (num, maxVal) => {
        const curNum = +num.innerText;
        // console.log(curNum);

        if (curNum < maxVal) {
            num.innerText = curNum + 1;
            setTimeout(() => {
                updateCount(num, maxVal);
            }, 20);
        } else {
            
        }
    }






    const skillsCounter = () => {
        if (!hasReached(skill1)) return;

        skillCounters.forEach((count, id) => {


            let target = +count.dataset.target;
            let strokeValue = 427 - 427 * (target / 100);


            progressBar[id].style.setProperty("--target", strokeValue);


            setTimeout(() => { 
                updateCount(count, target);
            },  400)
        })

        progressBar.forEach((p) => {
            p.style.animation = "progress 3s ease-in-out";
        });

    }

    setTimeout(() => {
        updateServiceDeliver();
    }, 300);


    window.addEventListener("scroll", skillsCounter);

    // function to handle the navbar behaviour
    const navBarSticky = () => {
        header.classList.toggle("nav-sticky", window.pageYOffset > 0);
        
        navLink.forEach((elem, i) => {
            elem.classList.toggle("unscrolled", window.pageYOffset < 0.9);
            if (i === 5) {
                elem.classList.toggle("unscrolled", false);
            }
             if (i === 4) {
                elem.classList.toggle("unscrolled", false);
            }
        });

        if (window.scrollY > 50) {
            scrollTop.classList.add("show");
        }
        else {
            scrollTop.classList.remove("show")
        }
    }

    // scroll to top by clicking the backtotop


    scrollTop.addEventListener("click", () => {
        document.querySelector("html").scrollTop = 0;
    })


    // navBarSticky();

    window.addEventListener("scroll", navBarSticky);




    // services scroll

        const updateServiceDeliver = () => {
        if (!hasReached(service_selection)) return;

        numberCount.forEach((elem, id) => {
            const value = +elem.dataset.target;
            // console.log(typeof value);
            setTimeout(() => { 
                updateCount(elem, value)
            }, 400)
        })
    }


    window.addEventListener("scroll", updateServiceDeliver)



    /**
     * --------------------LIBRARIES--------------------
     */

    // scroll Reveal

    let sr = ScrollReveal({
        duration: 2500,
        distance: "60px",
    });

    sr.reveal(".showcase-info", { delay: 400 });
    sr.reveal(".showcase-image", { origin: "top", delay: 600 });


    // typed animation

    var typed = new Typed(".typing", {
        strings: ['Coding', "Reading", "Debating", "Travelling"],
        typedSpeed: 100,
        backSpeed: 60,
        loop: true
    })

    var typed = new Typed(".clanName", {
        strings: ["Kwasa", "Onyango", "Auta", "Okumu", "Oginga"],
        typedSpeed: 10,
        backSpeed: 60,
        loop: true
    })


    











// images array to change
    

    

    const changeImage = () => {

    let images = new Array(
        // "assets/person1.jpg",
        // "assets/person.jpg",
        // "assets/pro1.jpg",
        "assets/pro2.jpg",
        "assets/pro3.jpg",
        "assets/pro4.jpg",
        "assets/pro5.jpg",
        "assets/pro6.jpg",
        "assets/pro7.jpg",
        "assets/pro8.jpg"
    );



        let len = images.length;
        let i = 0;



        function slider() {
            if (i > len - 1) {
                i = 0;
            }

            showcaseImg.src = images[i];
            i++;
        }

        setTimeout(()=>slider(), 3000)
    }

    changeImage();

})();