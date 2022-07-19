/* -------------------------------------------

Name: 		Arter
Version:  1.0
Author:		Nazar Miller (millerDigitalDesign)
Portfolio:  https://themeforest.net/user/millerdigitaldesign/portfolio?ref=MillerDigitalDesign

p.s. I am available for Freelance hire (UI design, web development). mail: miller.themes@gmail.com

------------------------------------------- */
function init_plugins() {
  $(function () {

    "use strict";
    var isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;

    if (isWindows) {
      // if we are on windows OS we activate the perfectScrollbar function
      if (document.getElementsByClassName('main-content')[0]) {
        var mainpanel = document.querySelector('.main-content');
        var ps = new PerfectScrollbar(mainpanel);
      };

      if (document.getElementsByClassName('sidenav')[0]) {
        var sidebar = document.querySelector('.sidenav');
        var ps1 = new PerfectScrollbar(sidebar);
      };

      if (document.getElementsByClassName('navbar-collapse')[0]) {
        var fixedplugin = document.querySelector('.navbar:not(.navbar-expand-lg) .navbar-collapse');
        var ps2 = new PerfectScrollbar(fixedplugin);
      };

      if (document.getElementsByClassName('fixed-plugin')[0]) {
        var fixedplugin = document.querySelector('.fixed-plugin');
        var ps3 = new PerfectScrollbar(fixedplugin);
      };
    };

    // swup js
    const options = {
      containers: ["#swup", "#swupMenu"],
      animateHistoryBrowsing: true,
    };

    const swup = new Swup(options);

    // scrollbar
    Scrollbar.use(OverscrollPlugin);
    Scrollbar.init(document.querySelector('#scrollbar'), {
      damping: 0.05,
      renderByPixel: true,
      continuousScrolling: true,
    });
    Scrollbar.init(document.querySelector('#scrollbar2'), {
      damping: 0.05,
      renderByPixel: true,
      continuousScrolling: true,
    });

    // page loading
    $(document).ready(function () {
      anime({
        targets: '.art-preloader .art-preloader-content',
        opacity: [0, 1],
        delay: 200,
        duration: 600,
        easing: 'linear',
        complete: function (anim) {

        }
      });
      anime({
        targets: '.art-preloader',
        opacity: [1, 0],
        delay: 2200,
        duration: 400,
        easing: 'linear',
        complete: function (anim) {
          $('.art-preloader').css('display', 'none');
        }
      });
    });

    var bar = new ProgressBar.Line(preloader, {
      strokeWidth: 1.7,
      easing: 'easeInOut',
      duration: 1400,
      delay: 750,
      trailWidth: 1.7,
      svgStyle: {
        width: '100%',
        height: '100%'
      },
      step: (state, bar) => {
        bar.setText(Math.round(bar.value() * 100) + ' %');
      }
    });

    bar.animate(1);

    // counters
    anime({
      targets: '.art-counter-frame',
      opacity: [0, 1],
      duration: 800,
      delay: 2300,
      easing: 'linear',
    });

    anime({
      targets: '.art-counter',
      delay: 1300,
      opacity: [1, 1],
      complete: function (anim) {
        $('.art-counter').each(function () {
          $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
          }, {
            duration: 2000,
            easing: 'linear',
            step: function (now) {
              $(this).text(Math.ceil(now));
            }
          });
        });
      }
    });

    // progressbars
    // var bar = new ProgressBar.Circle(circleprog1, {
    //   strokeWidth: 7,
    //   easing: 'easeInOut',
    //   duration: 1400,
    //   delay: 2500,
    //   trailWidth: 7,
    //   step: function(state, circle) {
    //     var value = Math.round(circle.value() * 100);
    //     if (value === 0) {
    //       circle.setText('');
    //     } else {
    //       circle.setText(value);
    //     }
    //   }
    // });

    // bar.animate(1);

    // var bar = new ProgressBar.Circle(circleprog2, {
    //   strokeWidth: 7,
    //   easing: 'easeInOut',
    //   duration: 1400,
    //   delay: 2600,
    //   trailWidth: 7,
    //   step: function(state, circle) {
    //     var value = Math.round(circle.value() * 100);
    //     if (value === 0) {
    //       circle.setText('');
    //     } else {
    //       circle.setText(value);
    //     }
    //   }
    // });

    // bar.animate(0.9);

    // var bar = new ProgressBar.Circle(circleprog3, {
    //   strokeWidth: 7,
    //   easing: 'easeInOut',
    //   duration: 1400,
    //   delay: 2700,
    //   trailWidth: 7,
    //   step: function(state, circle) {
    //     var value = Math.round(circle.value() * 100);
    //     if (value === 0) {
    //       circle.setText('');
    //     } else {
    //       circle.setText(value);
    //     }
    //   }
    // });

    // bar.animate(0.7);

    // var bar = new ProgressBar.Line(lineprog1, {
    //   strokeWidth: 1.72,
    //   easing: 'easeInOut',
    //   duration: 1400,
    //   delay: 2800,
    //   trailWidth: 1.72,
    //   svgStyle: {
    //     width: '100%',
    //     height: '100%'
    //   },
    //   step: (state, bar) => {
    //     bar.setText(Math.round(bar.value() * 100) + ' %');
    //   }
    // });

    // bar.animate(.9);

    // var bar = new ProgressBar.Line(lineprog2, {
    //   strokeWidth: 1.72,
    //   easing: 'easeInOut',
    //   duration: 1400,
    //   delay: 2900,
    //   trailWidth: 1.72,
    //   svgStyle: {
    //     width: '100%',
    //     height: '100%'
    //   },
    //   step: (state, bar) => {
    //     bar.setText(Math.round(bar.value() * 100) + ' %');
    //   }
    // });

    // bar.animate(.95);

    // var bar = new ProgressBar.Line(lineprog3, {
    //   strokeWidth: 1.72,
    //   easing: 'easeInOut',
    //   duration: 1400,
    //   delay: 3000,
    //   trailWidth: 1.72,
    //   svgStyle: {
    //     width: '100%',
    //     height: '100%'
    //   },
    //   step: (state, bar) => {
    //     bar.setText(Math.round(bar.value() * 100) + ' %');
    //   }
    // });

    // bar.animate(.75);

    // var bar = new ProgressBar.Line(lineprog4, {
    //   strokeWidth: 1.72,
    //   easing: 'easeInOut',
    //   duration: 1400,
    //   delay: 3100,
    //   trailWidth: 1.72,
    //   svgStyle: {
    //     width: '100%',
    //     height: '100%'
    //   },
    //   step: (state, bar) => {
    //     bar.setText(Math.round(bar.value() * 100) + ' %');
    //   }
    // });

    // bar.animate(.65);

    // var bar = new ProgressBar.Line(lineprog5, {
    //   strokeWidth: 1.72,
    //   easing: 'easeInOut',
    //   duration: 1400,
    //   delay: 3200,
    //   trailWidth: 1.72,
    //   svgStyle: {
    //     width: '100%',
    //     height: '100%'
    //   },
    //   step: (state, bar) => {
    //     bar.setText(Math.round(bar.value() * 100) + ' %');
    //   }
    // });

    // bar.animate(.85);

    // Contact form
    $('.art-input').keyup(function () {
      if ($(this).val()) {
        $(this).addClass('art-active');
      } else {
        $(this).removeClass('art-active');
      }
    });

    $("#form").submit(function () {
      $.ajax({
        type: "POST",
        url: "mail.php",
        data: $(this).serialize()
      }).done(function () {

        var tl = anime.timeline({
          easing: 'easeOutExpo',
        });

        tl
          .add({
            targets: '.art-submit',
            opacity: 0,
            scale: .5,
          })
          .add({
            targets: '.art-success',
            scale: 1,
            height: '45px',
          })
      });
      return false;
    });

    // portfolio filter
    $('.art-filter a').on('click', function () {
      $('.art-filter .art-current').removeClass('art-current');
      $(this).addClass('art-current');

      var selector = $(this).data('filter');
      $('.art-grid').isotope({
        filter: selector
      });
      return false;
    });

    // masonry Grid
    $('.art-grid').isotope({
      filter: '*',
      itemSelector: '.art-grid-item',
      transitionDuration: '.6s',
    });

    // slider testimonials
    var swiper = new Swiper('.art-testimonial-slider', {
      slidesPerView: 3,
      spaceBetween: 30,
      speed: 1400,
      autoplay: false,
      autoplaySpeed: 5000,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.art-testi-swiper-next',
        prevEl: '.art-testi-swiper-prev',
      },
      breakpoints: {
        1500: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 1,
        },
      },
    });

    // slider works
    var swiper = new Swiper('.art-works-slider', {
      slidesPerView: 3,
      spaceBetween: 30,
      speed: 1400,
      autoplay: {
        delay: 4000,
      },
      autoplaySpeed: 5000,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.art-works-swiper-next',
        prevEl: '.art-works-swiper-prev',
      },
      breakpoints: {
        1500: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 1,
        },
      },
    });

    // slider blog
    var swiper = new Swiper('.art-blog-slider', {
      slidesPerView: 3,
      spaceBetween: 30,
      speed: 1400,
      autoplay: {
        delay: 4000,
      },
      autoplaySpeed: 5000,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.art-blog-swiper-next',
        prevEl: '.art-blog-swiper-prev',
      },
      breakpoints: {
        1500: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 1,
        },
      },
    });

    $('[data-fancybox="gallery"]').fancybox({
      animationEffect: "zoom-in-out",
      animationDuration: 600,
      transitionDuration: 1200,
      buttons: [
        "zoom",
        "share",
        "slideShow",
        "thumbs",
        "close"
      ],
    });

    $('[data-fancybox="diplome"]').fancybox({
      animationEffect: "zoom-in-out",
      animationDuration: 600,
      transitionDuration: 1200,
      buttons: [
        "zoom",
        "slideShow",
        "thumbs",
        "close",
      ],
    });

    $('[data-fancybox="avatar"]').fancybox({
      animationEffect: "zoom-in-out",
      animationDuration: 600,
      transitionDuration: 1200,
      buttons: [
        "zoom",
        "close"
      ],
    });

    $('[data-fancybox="recommendation"]').fancybox({
      animationEffect: "zoom-in-out",
      animationDuration: 600,
      transitionDuration: 1200,
      buttons: [
        "zoom",
        "slideShow",
        "thumbs",
        "close",
      ],
    });

    $.fancybox.defaults.hash = false;

    $('.current-menu-item a').clone().appendTo('.art-current-page');

    $('.art-map-overlay').on('click', function () {
      $(this).addClass('art-active');
    });

    $('.art-info-bar-btn').on('click', function () {
      $('.art-info-bar').toggleClass('art-active');
      $('.art-menu-bar-btn').toggleClass('art-disabled');
    });

    $('.art-menu-bar-btn').on('click', function () {
      $('.art-menu-bar-btn , .art-menu-bar').toggleClass("art-active");
      $('.art-info-bar-btn').toggleClass('art-disabled');
    });

    $('.art-info-bar-btn , .art-menu-bar-btn').on('click', function () {
      $('.art-content').toggleClass('art-active');
    });

    $('.art-curtain , .art-mobile-top-bar').on('click', function () {
      $('.art-menu-bar-btn , .art-menu-bar , .art-info-bar , .art-content , .art-menu-bar-btn , .art-info-bar-btn').removeClass('art-active , art-disabled');
    });

    $('.menu-item').on('click', function () {
      if ($(this).hasClass('menu-item-has-children')) {
        $(this).children('.sub-menu').toggleClass('art-active');
      } else {
        $('.art-menu-bar-btn , .art-menu-bar , .art-info-bar , .art-content , .art-menu-bar-btn , .art-info-bar-btn').removeClass('art-active , art-disabled');
      }
    });

    // reinit
    document.addEventListener("swup:contentReplaced", function () {

      Scrollbar.use(OverscrollPlugin);
      Scrollbar.init(document.querySelector('#scrollbar'), {
        damping: 0.05,
        renderByPixel: true,
        continuousScrolling: true,
      });
      Scrollbar.init(document.querySelector('#scrollbar2'), {
        damping: 0.05,
        renderByPixel: true,
        continuousScrolling: true,
      });

      $("#form").submit(function () {
        $.ajax({
          type: "POST",
          url: "mail.php",
          data: $(this).serialize()
        }).done(function () {

          var tl = anime.timeline({
            easing: 'easeOutExpo',
          });

          tl
            .add({
              targets: '.art-submit',
              opacity: 0,
              scale: .5,
            })
            .add({
              targets: '.art-success',
              scale: 1,
              height: '45px',
            })
        });
        return false;
      });

      // Masonry Grid
      $('.art-grid').isotope({
        filter: '*',
        itemSelector: '.art-grid-item',
        transitionDuration: '.6s',
      });

      $('.art-filter a').on('click', function () {
        $('.art-filter .art-current').removeClass('art-current');
        $(this).addClass('art-current');

        var selector = $(this).data('filter');
        $('.art-grid').isotope({
          filter: selector
        });
        return false;
      });

      anime({
        targets: '.art-counter-frame',
        opacity: [0, 1],
        duration: 800,
        delay: 300,
        easing: 'linear',
      });

      $('.art-counter').each(function () {
        $(this).prop('Counter', 0).animate({
          Counter: $(this).text()
        }, {
          duration: 2000,
          easing: 'linear',
          step: function (now) {
            $(this).text(Math.ceil(now));
          }
        });
      });

      // slider testimonials
      var swiper = new Swiper('.art-testimonial-slider', {
        slidesPerView: 3,
        spaceBetween: 30,
        speed: 1400,
        autoplay: false,
        autoplaySpeed: 5000,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.art-testi-swiper-next',
          prevEl: '.art-testi-swiper-prev',
        },
        breakpoints: {
          1500: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 1,
          }
        },
      });

      // slider works
      var swiper = new Swiper('.art-works-slider', {
        slidesPerView: 3,
        spaceBetween: 30,
        speed: 1400,
        autoplay: {
          delay: 4000,
        },
        autoplaySpeed: 5000,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.art-works-swiper-next',
          prevEl: '.art-works-swiper-prev',
        },
        breakpoints: {
          1500: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 1,
          },
        },
      });

      // slider blog
      var swiper = new Swiper('.art-blog-slider', {
        slidesPerView: 3,
        spaceBetween: 30,
        speed: 1400,
        autoplay: {
          delay: 4000,
        },
        autoplaySpeed: 5000,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.art-blog-swiper-next',
          prevEl: '.art-blog-swiper-prev',
        },
        breakpoints: {
          1500: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 3,
          },
          992: {
            slidesPerView: 1,
          },
        },
      });

      $('[data-fancybox="gallery"]').fancybox({
        animationEffect: "zoom-in-out",
        animationDuration: 600,
        transitionDuration: 1200,
        buttons: [
          "zoom",
          "slideShow",
          "thumbs",
          "close"
        ],
      });

      $('[data-fancybox="diplome"]').fancybox({
        animationEffect: "zoom-in-out",
        animationDuration: 600,
        transitionDuration: 1200,
        buttons: [
          "zoom",
          "slideShow",
          "thumbs",
          "close",
        ],
      });

      $('[data-fancybox="recommendation"]').fancybox({
        animationEffect: "zoom-in-out",
        animationDuration: 600,
        transitionDuration: 1200,
        buttons: [
          "zoom",
          "slideShow",
          "thumbs",
          "close",
        ],
      });

      $.fancybox.defaults.hash = false;

      $('.current-menu-item a').clone().prependTo('.art-current-page');

      $('.menu-item').on('click', function () {
        if ($(this).hasClass('menu-item-has-children')) {
          $(this).children('.sub-menu').toggleClass('art-active');
        } else {
          $('.art-menu-bar-btn , .art-menu-bar , .art-info-bar , .art-content , .art-menu-bar-btn , .art-info-bar-btn').removeClass('art-active , art-disabled');
        }
      });

    })

  });
  //Verify navbar blur on scroll
navbarBlurOnScroll('navbarBlur');


// initialization of Tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

// Fixed Plugin

if (document.querySelector('.fixed-plugin')) {
  var fixedPlugin = document.querySelector('.fixed-plugin');
  var fixedPluginButton = document.querySelector('.fixed-plugin-button');
  var fixedPluginButtonNav = document.querySelector('.fixed-plugin-button-nav');
  var fixedPluginCard = document.querySelector('.fixed-plugin .card');
  var fixedPluginCloseButton = document.querySelectorAll('.fixed-plugin-close-button');
  var navbar = document.getElementById('navbarBlur');
  var buttonNavbarFixed = document.getElementById('navbarFixed');

  if (fixedPluginButton) {
    fixedPluginButton.onclick = function() {
      if (!fixedPlugin.classList.contains('show')) {
        fixedPlugin.classList.add('show');
      } else {
        fixedPlugin.classList.remove('show');
      }
    }
  }

  if (fixedPluginButtonNav) {
    fixedPluginButtonNav.onclick = function() {
      if (!fixedPlugin.classList.contains('show')) {
        fixedPlugin.classList.add('show');
      } else {
        fixedPlugin.classList.remove('show');
      }
    }
  }

  fixedPluginCloseButton.forEach(function(el) {
    el.onclick = function() {
      fixedPlugin.classList.remove('show');
    }
  })

  document.querySelector('body').onclick = function(e) {
    if (e.target != fixedPluginButton && e.target != fixedPluginButtonNav && e.target.closest('.fixed-plugin .card') != fixedPluginCard) {
      fixedPlugin.classList.remove('show');
    }
  }

  if (navbar) {
    if (navbar.getAttribute('navbar-scroll') == 'true') {
      buttonNavbarFixed.setAttribute("checked", "true");
    }
  }

}

// Tabs navigation

var total = document.querySelectorAll('.nav-pills');

total.forEach(function(item, i) {
  var moving_div = document.createElement('div');
  var first_li = item.querySelector('li:first-child .nav-link');
  var tab = first_li.cloneNode();
  tab.innerHTML = "-";

  moving_div.classList.add('moving-tab', 'position-absolute', 'nav-link');
  moving_div.appendChild(tab);
  item.appendChild(moving_div);

  var list_length = item.getElementsByTagName("li").length;

  moving_div.style.padding = '0px';
  moving_div.style.width = item.querySelector('li:nth-child(1)').offsetWidth + 'px';
  moving_div.style.transform = 'translate3d(0px, 0px, 0px)';
  moving_div.style.transition = '.5s ease';

  item.onmouseover = function(event) {
    let target = getEventTarget(event);
    let li = target.closest('li'); // get reference
    if (li) {
      let nodes = Array.from(li.closest('ul').children); // get array
      let index = nodes.indexOf(li) + 1;
      item.querySelector('li:nth-child(' + index + ') .nav-link').onclick = function() {
        moving_div = item.querySelector('.moving-tab');
        let sum = 0;
        if (item.classList.contains('flex-column')) {
          for (var j = 1; j <= nodes.indexOf(li); j++) {
            sum += item.querySelector('li:nth-child(' + j + ')').offsetHeight;
          }
          moving_div.style.transform = 'translate3d(0px,' + sum + 'px, 0px)';
          moving_div.style.height = item.querySelector('li:nth-child(' + j + ')').offsetHeight;
        } else {
          for (var j = 1; j <= nodes.indexOf(li); j++) {
            sum += item.querySelector('li:nth-child(' + j + ')').offsetWidth;
          }
          moving_div.style.transform = 'translate3d(' + sum + 'px, 0px, 0px)';
          moving_div.style.width = item.querySelector('li:nth-child(' + index + ')').offsetWidth + 'px';
        }
      }
    }
  }
});


// Tabs navigation resize

window.addEventListener('resize', function(event) {
  total.forEach(function(item, i) {
    item.querySelector('.moving-tab').remove();
    var moving_div = document.createElement('div');
    var tab = item.querySelector(".nav-link.active").cloneNode();
    tab.innerHTML = "-";

    moving_div.classList.add('moving-tab', 'position-absolute', 'nav-link');
    moving_div.appendChild(tab);

    item.appendChild(moving_div);

    moving_div.style.padding = '0px';
    moving_div.style.transition = '.5s ease';

    let li = item.querySelector(".nav-link.active").parentElement;

    if (li) {
      let nodes = Array.from(li.closest('ul').children); // get array
      let index = nodes.indexOf(li) + 1;

      let sum = 0;
      if (item.classList.contains('flex-column')) {
        for (var j = 1; j <= nodes.indexOf(li); j++) {
          sum += item.querySelector('li:nth-child(' + j + ')').offsetHeight;
        }
        moving_div.style.transform = 'translate3d(0px,' + sum + 'px, 0px)';
        moving_div.style.width = item.querySelector('li:nth-child(' + index + ')').offsetWidth + 'px';
        moving_div.style.height = item.querySelector('li:nth-child(' + j + ')').offsetHeight;
      } else {
        for (var j = 1; j <= nodes.indexOf(li); j++) {
          sum += item.querySelector('li:nth-child(' + j + ')').offsetWidth;
        }
        moving_div.style.transform = 'translate3d(' + sum + 'px, 0px, 0px)';
        moving_div.style.width = item.querySelector('li:nth-child(' + index + ')').offsetWidth + 'px';

      }
    }
  });

  if (window.innerWidth < 991) {
    total.forEach(function(item, i) {
      if (!item.classList.contains('flex-column')) {
        item.classList.add('flex-column', 'on-resize');
      }
    });
  } else {
    total.forEach(function(item, i) {
      if (item.classList.contains('on-resize')) {
        item.classList.remove('flex-column', 'on-resize');
      }
    })
  }
});


function getEventTarget(e) {
  e = e || window.event;
  return e.target || e.srcElement;
}

// End tabs navigation


//Set Sidebar Color
function sidebarColor(a) {
  var parent = a.parentElement.children;
  var color = a.getAttribute("data-color");

  for (var i = 0; i < parent.length; i++) {
    parent[i].classList.remove('active');
  }

  if (!a.classList.contains('active')) {
    a.classList.add('active');
  } else {
    a.classList.remove('active');
  }

  var sidebar = document.querySelector('.sidenav');
  sidebar.setAttribute("data-color", color);

  if (document.querySelector('#sidenavCard')) {
    var sidenavCard = document.querySelector('#sidenavCard');
    let sidenavCardClasses = ['card', 'card-background', 'shadow-none', 'card-background-mask-' + color];
    sidenavCard.className = '';
    sidenavCard.classList.add(...sidenavCardClasses);

    var sidenavCardIcon = document.querySelector('#sidenavCardIcon');
    let sidenavCardIconClasses = ['ni', 'ni-diamond', 'text-gradient', 'text-lg', 'top-0', 'text-' + color];
    sidenavCardIcon.className = '';
    sidenavCardIcon.classList.add(...sidenavCardIconClasses);
  }

}

// Set Navbar Fixed
function navbarFixed(el) {
  let classes = ['position-sticky', 'blur', 'shadow-blur', 'mt-4', 'left-auto', 'top-1', 'z-index-sticky'];
  const navbar = document.getElementById('navbarBlur');

  if (!el.getAttribute("checked")) {
    navbar.classList.add(...classes);
    navbar.setAttribute('navbar-scroll', 'true');
    navbarBlurOnScroll('navbarBlur');
    el.setAttribute("checked", "true");
  } else {
    navbar.classList.remove(...classes);
    navbar.setAttribute('navbar-scroll', 'false');
    navbarBlurOnScroll('navbarBlur');
    el.removeAttribute("checked");
  }
};

// Navbar blur on scroll

function navbarBlurOnScroll(id) {
  const navbar = document.getElementById(id);
  let navbarScrollActive = navbar ? navbar.getAttribute("navbar-scroll") : false;
  let scrollDistance = 5;
  let classes = ['position-sticky', 'blur', 'shadow-blur', 'mt-4', 'left-auto', 'top-1', 'z-index-sticky'];
  let toggleClasses = ['shadow-none'];

  if (navbarScrollActive == 'true') {
    window.onscroll = debounce(function() {
      if (window.scrollY > scrollDistance) {
        blurNavbar();
      } else {
        transparentNavbar();
      }
    }, 10);
  } else {
    window.onscroll = debounce(function() {
      transparentNavbar();
    }, 10);
  }

  function blurNavbar() {
    navbar.classList.add(...classes)
    navbar.classList.remove(...toggleClasses)

    toggleNavLinksColor('blur');
  }

  function transparentNavbar() {
    if (navbar) {
      navbar.classList.remove(...classes)
      navbar.classList.add(...toggleClasses)

      toggleNavLinksColor('transparent');
    }
  }

  function toggleNavLinksColor(type) {
    let navLinks = document.querySelectorAll('.navbar-main .nav-link')
    let navLinksToggler = document.querySelectorAll('.navbar-main .sidenav-toggler-line')

    if (type === "blur") {
      navLinks.forEach(element => {
        element.classList.remove('text-body')
      });

      navLinksToggler.forEach(element => {
        element.classList.add('bg-dark')
      });
    } else if (type === "transparent") {
      navLinks.forEach(element => {
        element.classList.add('text-body')
      });

      navLinksToggler.forEach(element => {
        element.classList.remove('bg-dark')
      });
    }
  }
}


// Debounce Function
// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
function debounce(func, wait, immediate) {
  var timeout;
  return function() {
    var context = this,
      args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

//Set Sidebar Type
function sidebarType(a) {
  var parent = a.parentElement.children;
  var color = a.getAttribute("data-class");

  var colors = [];

  for (var i = 0; i < parent.length; i++) {
    parent[i].classList.remove('active');
    colors.push(parent[i].getAttribute('data-class'));
  }

  if (!a.classList.contains('active')) {
    a.classList.add('active');
  } else {
    a.classList.remove('active');
  }

  var sidebar = document.querySelector('.sidenav');

  for (var i = 0; i < colors.length; i++) {
    sidebar.classList.remove(colors[i]);
  }

  sidebar.classList.add(color);
}


// Toggle Sidenav

// Resize navbar color depends on configurator active type of sidenav

// let referenceButtons = document.querySelector('[data-class]');


// window.addEventListener("resize", navbarColorOnResize);

// function navbarColorOnResize() {
//   console.log(referenceButtons)

//   if (window.innerWidth > 1200) {
//     if (referenceButtons.classList.contains('active') && referenceButtons.getAttribute('data-class') === 'bg-transparent') {
//       sidenav.classList.remove('bg-white');
//     } else {
//       sidenav.classList.add('bg-white');
//     }
//   } else {
//     sidenav.classList.add('bg-white');
//     sidenav.classList.remove('bg-transparent');
//   }
// }
let referenceclas = document.getElementById('main');
if (referenceclas) {
  window.addEventListener("load", mainsize);
  window.addEventListener("resize", mainsize);
}

function mainsize() {
  (window.innerWidth > 1200) ? referenceclas.classList.add('ms-xl-13'):referenceclas.classList.add('ms-xl-0') }

// Deactivate sidenav type buttons on resize and small screens
window.addEventListener("resize", sidenavTypeOnResize);
window.addEventListener("load", sidenavTypeOnResize);


function sidenavTypeOnResize() {
  let elements = document.querySelectorAll('[onclick="sidebarType(this)"]');
  if (window.innerWidth < 1200) {
    elements.forEach(function(el) {
      el.classList.add('disabled');
    });
  } else {
    elements.forEach(function(el) {
      el.classList.remove('disabled');
    });
  }
}
}

 
