var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
        labels: ["HTML", "CSS", "Javascript", "Jquery", "Wordpress", "PHP", "Bootstrap", "Materialize", "Fetch API", "Vue", "Angular", "React"],
        datasets: [{
            label: 'Experience',
            data: [100, 100, 60, 55, 60, 50,70, 70, 30, 25, 20, 10],
            backgroundColor: [
                'rgba(0, 188, 212, 1)',
              'rgba(0, 188, 212, 1)',
              'rgba(0, 188, 212, 1)',
              'rgba(0, 188, 212, 1)',
              'rgba(0, 188, 212, 1)',
              'rgba(0, 188, 212, 1)',
              'rgba(0, 188, 212, 1)',
              'rgba(0, 188, 212, 1)',
              'rgba(0, 188, 212, 1)',
              'rgba(0, 188, 212, 1)',
              'rgba(0, 188, 212, 1)',
              'rgba(0, 188, 212, 1)',
              

            ],
        }]
    },
    options: {
        scales: {
            xAxes: [{
                ticks: {
                    beginAtZero:true
                },
              display: false,
            }],
        },
       legend: {
            display: false,
        },
      layout: {
							padding: {
								right: 20
							}
						}
    }
});

$(document).ready(function(){  
  $('.button-collapse').sideNav({
    closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
  }
);
  // ===== Scroll to Top ==== 
$(window).scroll(function() {
    if ($(this).scrollTop() >= 100) {        // If page is scrolled more than 50px
        $('#back2top').fadeIn(500);    // Fade in the arrow
    } else {
        $('#back2top').fadeOut(500);   // Else fade out the arrow
    }
});
$('#back2top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});
  
  // Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, );
      }
    }
  });
  });

