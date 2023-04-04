  // Set the date we're counting down to
  var countDownDate = new Date("feb 14, 2024 15:37:25").getTime();

  // Update the count down every 1 second
  var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("days").innerHTML = days
  document.getElementById("hours").innerHTML = hours
  document.getElementById("minutes").innerHTML = minutes
  document.getElementById("seconds").innerHTML = seconds

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
  }, 1000);

  // slicker click start


  $('.testimoniaslider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    centerPadding: '0px',
    slidesToScroll: 1,
    prevArrow:'<i class="fa-solid frev fa-angle-left"></i>',
    nextArrow:'<i class="fa-solid next fa-angle-right"></i>',
    responsive: [

      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
    
  });

  const toggleBtn = document.querySelector('.icons');
  const toggleIcon = document.querySelector('.icons i')
  const dropDown = document.querySelector('.drop_down_open');

  toggleBtn.onclick = function (){
    dropDown.classList.toggle('open')
    const isOpen = dropDown.classList.contains('open')
    toggleIcon.classList = isOpen ?
    'fa-solid fa-xmark'
    :
    'fa-solid fa-bars'

  }

  window.addEventListener("scroll", function(){
    var main = document.getElementById("navbar_section");
    main.classList.toggle("navbar" , window.scrollY > 500);
  })




