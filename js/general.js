$(document).ready(function() {
	//Prevent Page Reload on all # links
	$("a[href='#']").click(function(e) {
		e.preventDefault();
	});

// On scroll header small
	/*$(window).scroll(function(e) {
		if($(window).scrollTop() > 0)
			$(".wrapper").addClass('small-header');
		else
			$(".wrapper").removeClass('small-header');
	});*/


$(".toggle-link a").click(function(){
	$(".toggle-box").stop(true,true).slideToggle();
});


//Accordion
$(".accordion li").click(function(){
	if($(this).hasClass("active")){
		$(this).removeClass('active');
		$(this).find(".content").stop(true,true).slideUp();
	}
	else{
		$(this).addClass('active');
		$(this).siblings("li").removeClass('active');
		$(this).find(".content").stop(true,true).slideDown();
		$(this).siblings("li").find(".content").slideUp();
	}
});

//Tab
$(".tab-listing li a").click(function(e){
	e.preventDefault();
	$(this).parent().addClass("current");
	$(this).parent().siblings().removeClass("current");
	var tabing = $(this).attr("href");
	$(".tab").not(tabing).css("display", "none");
	$(tabing).stop(true,true).fadeIn();
});


$(".btn").click(function(){
	/*alert("HTML:" + $(".simple-text").html());
	alert("Text:" + $(".simple-text").text());
	alert("Text:" + $(".test").val());*/
	$(".test").attr("val")
});



$("button").click(function(){
	alert("Value: " + $("#test").val());
	$("button").css({"background-color":"#000","color":"#FFF", "border-radius":"10px"});
});


$(window).scroll(function(){
	if($(window).scrollTop() > 150){
		$(".right-box").addClass("fixed");
	}
	else{
		$(".right-box").removeClass("fixed");
	};
});


//placeholder
$("[placeholder]").each(function () {
	$(this).attr("data-placeholder", this.placeholder);

	$(this).bind("focus", function () {
		this.placeholder = '';
	});
	$(this).bind("blur", function () {
		this.placeholder = $(this).attr("data-placeholder");
	});
});


//fast click for touch devices  
FastClick.attach(document.body);

// footer adj
function footerAdj(){
	var $px = $("#footer").innerHeight();
	$(".container").css({"padding-bottom":$px});
	$("#footer").css({"margin-top":-$px});		
}

footerAdj();
$(window).resize(function() {
	setTimeout(function(){
		footerAdj();
	}, 300);
});
});

$(window).load(function(){
	setTimeout(function(){
		$("img").css({opacity:1});
	}, 1000);
});