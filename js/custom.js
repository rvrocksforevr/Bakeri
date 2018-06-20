$(document).ready(function(){
	$(".testominal_carousel").owlCarousel(
	{
		items:1,
		autoplay:true,
		autoplayTimeout:2000,
		nav:true,
		loop:true,
		responsive:
		{
			0:{
				items:1,
				margin:40,
			},
			560:{
				items:1,
				margin:40,
			},
			767:
			{
				items:1,
				margin:15
			}
			
		}
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
		
		autoplay:true,
		autoplayTimeout:4000,
		nav:false,
		loop:true,
		dots:false,
		margin:15,
		responsive:
		{
			0:{
				items:1,
				margin:10,
			},
			560:{
				items:2,
				margin:15,
			},
			767:
			{
				items:3,
				margin:15
			}
			
		}
	});
	

	$(".main_menu li a, .footer_link_cont li a").click(function(){
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

	$('.tab_conatiner_outer .tab_container_item').click(function(){
		$(".tab_conatiner_outer .tab_container_item").removeClass("active");
		$(this).addClass("active");

		var tab_id = $(this).attr("tab_id");

		$(".tab_container_cont .tab_container_inner").removeClass("active");

		$(tab_id).addClass("active")

	})
})
