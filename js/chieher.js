$(function(){
	loadApp();
	$('.img-lightbox').on('mouseenter', function () {
		$(this).stop(true, true).animate({ opacity: 1 }, 200);
	}).on('mouseleave', function () {
		$(this).stop(true, true).animate({ opacity: 0.5 }, 500);
	});
	//var num_row = $('.row').length;
	//var mousewheel_count = 0;
	var thirdFloorThresh = $('#intro').height()/2;
	$('#public-photobox').css('top',$('#rooftop').height()+$('#intro').height()/16);

	// $(window).on('mousewheel',function(e) {
	// 	if(e.deltaY == -1 && mousewheel_count<num_row)
	// 		mousewheel_count++;
	// 	else if(e.deltaY == 1 && mousewheel_count>1) 
	// 		mousewheel_count--;
	// 	//console.log(mousewheel_count);
	// //	console.log(rooftopHeight,scrollHeight);

	// });

	$(window).scroll(function(){
		var $this = $(this);
		if($this.scrollTop()>thirdFloorThresh) //啟動三樓動畫
			$('#intro img').addClass('animated bounceInLeft');
		
		$('.img-lightbox').on('click', function () {
			$('#intro').animatescroll();
			$('.lightbox, #public-photobox').fadeIn(1000);
			$('#public-photobox img').attr('src', $(this).attr('src'));
			$('#public-photobox .panel-heading').html($(this).attr('alt'));
		});
		$('.lightbox').click(function () {
			$(this).fadeOut(1000);
			$('#public-photobox').fadeOut(1000);
			$('.flipbook-viewport').fadeOut(1000);
		});
	});

	$('.diagonal1,.diagonal2,.diagonal3').on('click',function(){
		$('#product').animatescroll();
		$('.flipbook-viewport').css('top',$('#rooftop').height()+$('#intro').height());
		$('.lightbox, .flipbook-viewport').fadeIn(1000);

	});
});



function loadApp() {

	// Create the flipbook

	$('.flipbook').turn({
			// Width
			width:922,
			// Height
			height:600,
			// Elevation
			elevation: 50,		
			// Enable gradients
			gradients: true,	
			// Auto center this flipbook
			autoCenter: true
	});
}

function addPage(page, book) {

	var id, pages = book.turn('pages');

	// Create a new element for this page
	var element = $('<div />', {});

	// Add the page to the flipbook
	if (book.turn('addPage', element, page)) {

		// Add the initial HTML
		// It will contain a loader indicator and a gradient
		element.html('<div class="gradient"></div><div class="loader"></div>');

		// Load the page
		loadPage(page, element);
	}

}

function loadPage(page, pageElement) {

	// Create an image element

	var img = $('<img />');

	img.mousedown(function(e) {
		e.preventDefault();
	});

	img.load(function() {
		
		// Set the size
		$(this).css({width: '100%', height: '100%'});

		// Add the image to the page after loaded

		$(this).appendTo(pageElement);

		// Remove the loader indicator
		
		pageElement.find('.loader').remove();
	});

	// Load the page

	img.attr('src', 'pages/' +  page + '.jpg');

}


function loadLargePage(page, pageElement) {
	
	var img = $('<img />');

	img.load(function() {

		var prevImg = pageElement.find('img');
		$(this).css({width: '100%', height: '100%'});
		$(this).appendTo(pageElement);
		prevImg.remove();
		
	});

	// Loadnew page
	
	img.attr('src', 'pages/' +  page + '-large.jpg');
}


function loadSmallPage(page, pageElement) {
	
	var img = pageElement.find('img');

	img.css({width: '100%', height: '100%'});

	img.unbind('load');
	// Loadnew page

	img.attr('src', 'pages/' +  page + '.jpg');
}
