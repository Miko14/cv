$('a[href^="#"]').on('click', function(event) {

    var target = $(this.getAttribute('href'));

    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }

});

var shouldDestroy;

$( "#yes-destroy" ).click(function() {
    shouldDestroy = "yes";
});


$( "#no-destroy" ).click(function() {
    shouldDestroy = "no";
});

var destryableObject = $('.destroyable'),
	siteHeight = $('body').height(),
	speed = 2000;
	styles = {
		position: 'relative',
		backgroundColor: 'green',
		color: 'white',
		zIndex: 10
	},
	settings = {
		top: siteHeight,
		right: 500,
		opacity: 0.0
	}

destryableObject.on('mouseenter', function() {
    if (shouldDestroy == "yes") {
        var plusOrMinus = Math.random() < 0.5 ? -1 : 1;
        var randomNumber = (Math.random() * 1000 + 1) * plusOrMinus;
        var randomNumber2 = (Math.random() * 1000 + 1) * plusOrMinus;
        $(this).css(styles).animate({top: randomNumber, right: randomNumber2}, speed).fadeOut();
        console.log('randomNumber: ' + randomNumber + 'randomNumber2: '+randomNumber2);
    }
});

$('#my-photo').on('mouseover', function() {
    this.src='img/cartoon.PNG';
});

$('#my-photo').on('mouseout', function() {
    this.src='img/photo.png';
});