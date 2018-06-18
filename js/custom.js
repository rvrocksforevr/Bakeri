$(document).ready(function(){
	$(".testominal_carousel").owlCarousel(
	{
		items:1,
		autoplay:true,
		autoplayTimeout:2000,
		nav:true,
		loop:true,
	});

	$(".case_carousel").owlCarousel(
	{
		items:1,
		autoplay:true,
		autoplayTimeout:4000,
		nav:true,
		loop:true,
		dots:false
	});
	$(".branch_carousel").owlCarousel(
	{
		items:3,
		autoplay:true,
		autoplayTimeout:4000,
		nav:false,
		loop:true,
		dots:false,
		margin:15,
		responsive:
		{
			767:{
				items:3,
				margin:15,
			},
			560:{
				items:2,
				margin:15,
			}
		}
	});
	

	$(".main_menu li a").click(function(){
		$(".main_menu li a").parent("li").removeClass("active");
		$(this).parent("li").addClass("active");

		var id_link = $(this).attr("data-link");
		$("body , html").animate({
			scrollTop:$(id_link).offset().top - 50
		},1500)
	})


	$('.faq_data').click(function(){
		$(".faq_data .faq_answer").removeClass("active");
		$("body , html").animate({
			scrollTop:$(this).offset().top - 60
		},500)
		$(this).children(".faq_answer").addClass("active");
	})
})