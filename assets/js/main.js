(function ($) {
    $(document).ready(function () {

	
        //   menu link change
        $('.our-menu-wrapper li').on({
            click: function(e) {
              $('.our-menu-wrapper li').removeClass('active clicked');
              $(this).addClass('active clicked');
            },
            mouseenter: function() {
              $('.our-menu-wrapper li').removeClass('active');
              $(this).addClass('active');
            },
            mouseleave: function() {
              $('.our-menu-wrapper li.clicked').addClass('active');
            }
          });

         // offcanvas humbarger
         let offcanvasElement = $('.header-offcanvas');
         offcanvasElement.on('show.bs.offcanvas', function () {
             $('.humbarger-btn').addClass('open');
             $('.btn-close span:nth-child(1)').css({
                 transform: 'rotate(45deg)',
                 marginBottom: '0'
             });
             $('.btn-close span:nth-child(2)').css({
                 transform: 'rotate(-45deg)',
                 marginTop: '-2px'
             });
         });
         offcanvasElement.on('hide.bs.offcanvas', function () {
             $('.humbarger-btn').removeClass('open');
             $('.btn-close span:nth-child(1)').css({
                 transform: '',
                 marginBottom: ''
             });
             $('.btn-close span:nth-child(2)').css({
                 transform: '',
                 marginTop: ''
             });
         });
         // offcanvas menu 
         $(".mobile-nav a").click(function (e) {
             let subMenu = $(this).next(".sub-menu");
             if (subMenu.length > 0) {
                 e.preventDefault();
                 let parentLi = $(this).parent();
                 parentLi.siblings(".menu-item-has-children").find(".sub-menu").slideUp();
                 parentLi.siblings(".menu-item-has-children").find("a").removeClass("rotate active");
                 $(this).toggleClass("rotate active");
                 subMenu.stop(true, true).slideToggle();
             }
         });

        //  nice select
        $('select').niceSelect();

        // testimonial 

        var swiper = new Swiper(".testimonial-slider", {
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
          });

        //   gast
        $(".rotate-img").each(function () {
            gsap.to($(this), {
              rotation: 360,
              duration: 5, // Adjust speed as needed
              repeat: -1,  // Infinite loop
              ease: "linear"
            });
          });


        // OverlayScrollbars
        const {
            OverlayScrollbars,
            ClickScrollPlugin
        } = OverlayScrollbarsGlobal;
        // Initialize the ClickScrollPlugin
        OverlayScrollbars.plugin(ClickScrollPlugin);
        $("body").each(function () {
            OverlayScrollbars(this, {
                scrollbars: {
                    clickScroll: true,
                    autoHide: "leave",
                    dragScrolling: true,
                    clickScrolling: true,
                },
                scrollBehavior: 'smooth',
            });
        });
        // lenis
        // Initialize a new Lenis instance for smooth scrolling
        const lenis = new Lenis();

        // Listen for the 'scroll' event and log the event data to the console
        // lenis.on('scroll', (e) => {
        //     console.log(e);
        // });

        // Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
        lenis.on('scroll', ScrollTrigger.update);

        // Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
        // This ensures Lenis's smooth scroll animation updates on each GSAP tick
        gsap.ticker.add((time) => {
            lenis.raf(time * 1000); // Convert time from seconds to milliseconds
        });

        // Disable lag smoothing in GSAP to prevent any delay in scroll animations
        gsap.ticker.lagSmoothing(0);
        // lenis




        
    });
})(jQuery);