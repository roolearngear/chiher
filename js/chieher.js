$(function(){
	loadApp();

	//product area
	var thirdFloorThresh = $('#intro').height()/2;
	$('#public-photobox').css('top',$('#rooftop').height()+$('#intro').height()/16);



	$('.img-lightbox').on('mouseenter', function () {//滑鼠移入
		$(this).stop(true, true).animate({ opacity: 1 }, 200);
	}).on('mouseleave', function () {//滑鼠移出
		$(this).stop(true, true).animate({ opacity: 0.5 }, 500);
	});
	$('.img-lightbox').on('click', function () {//點選開啟lightbox mode
			$('#intro').animatescroll();
			$('.lightbox, #public-photobox').fadeIn(1000);
			$('#public-photobox img').attr('src', $(this).attr('src'));//載入圖片
			$('#public-photobox .panel-heading').html($(this).attr('alt'));//載入標題
			var html = "";
			$('#photobox-intro').empty();
			if($(this).attr('src')=="img/intro-company.jpg"){
				html = '<ul style="text-align: left;"><li>1998年成立於澎湖馬公，以銷售「服務」為初始利基。為澎湖居民提供最在地的電梯保養維修，以及各種電器設備的服務諮詢，開始電梯服務事業。現今，本公司不僅是澎湖本島最主要的電梯服務公司之一，並延展服務到澎湖的離島七美、吉貝與望安等偏遠地區，做到真正的服務便民。</li>'
					+'<li>2003年，基於對技術提升的要求以及業務的擴展需要，開始投入電梯控制系統的「研發」與「合作」銷售。一方面開發以客梯為主的電梯控制系統【SCH-168】，另一方面與電梯相關同業合作，互補互利以擴展業務並與國際接軌，目前服務的客戶不僅侷限於臺灣本土，更將系統推廣到亞洲地區的澳洲、新加坡、日本，中東地區的科威特、杜拜以及非洲的奈及利亞等國家，而且運轉數量正在穩定的持續增加中。</li>'
					+'<li>2004年接續開發的【SCH-568】家庭梯控制系統，在台灣的銷售數量更突破千台以上。其禾(宜禾)公司本著「安全運轉」、「簡單操作」為基礎，研發製造最適合客戶需求的客製化控制系統。目標是要將「服務」與技術隨客戶延伸至世界各地。</li>'
					+'</ul>';
			}
			else if ($(this).attr('src')=="img/intro-history.jpg") {
				html ='<ul style="text-align:left;"><li>1998.06其禾實業公司成立，營業項目涵蓋電梯、電扶梯與發電機的銷售、安裝、維修與國際貿易等項目。</li>'
            		+'<li>1998.11	取得昇降設備專業廠商登記通知書</li>'
            		+'<li>1999	取得澎湖縣商業會會員證書，取得甲一類團體會員證書</li>'
            		+'<li>2003.08	CH-168控制 研發、生產、銷售</li>'
            		+'<li>2004.01	CH-568家庭梯控制研發、生產、銷售</li>'
            		+'<li>2004	外銷澳洲、新加坡、馬來西亞、印度尼西亞、中國</li>'
            		+'<li>2005	外銷科威特、杜拜、菲律賓、阿曼</li>'
            		+'<li>2006	外銷日本、紐西蘭</li>'
            		+'<li>2006.10	取得國際CE認證</li>'
            		+'<li>2007	外銷越南、泰國</li>'
            		+'<li>2007.09	其禾工廠及試驗塔開始設計、營建</li>'
            		+'<li>2008	外銷印度、奈及利亞</li>'
            		+'<li>2008.06	其禾試驗塔竣工</li>'
            		+'<li>2009.06	取得ISO 9001:2008 認證</li>'
            		+'<li>2009.07	取得經濟部工廠登記證</li>'
            		+'<li>2009.11	取得建築物機械停車設備專業廠商登記證，測試塔採用高速電梯，速度達180m/min</li></ul>';
			}
			$('#photobox-intro').append(html);
		});
	$('.lightbox').click(function () {//關閉lightbox mode
			$(this).fadeOut(1000);
			$('#public-photobox').fadeOut(1000);
			$('.flipbook-viewport').fadeOut(1000);
		});
	//var num_row = $('.row').length;
	//var mousewheel_count = 0;
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
		if($this.scrollTop()>thirdFloorThresh){ //啟動intro動畫
			$('#intro-history').show().addClass('animated bounceInRight');
			$('#intro-company').show().addClass('animated bounceInLeft');
		}
	});

	$('.diagonal1,.diagonal2,.diagonal3').on('click',function(){
		$('#product').animatescroll();
		$('.flipbook-viewport').css('top',$('#rooftop').height()+$('#intro').height());
		$('.lightbox, .flipbook-viewport').fadeIn(1000);

	});

	//contact area
	$('#contact i').on('mouseenter',function () {
		$(this).addClass('animated tada');
	}).on('mouseleave',function (){
		$(this).removeClass('animated tada');
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
