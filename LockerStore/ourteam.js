$(function(){
	$(document).ready(function(){
		$(".pic_a").hover(function(){
			$(".text_a").fadeIn();
			$(".pic_a").attr("src","./public/images/about_us/our-team-undone/under_cover/undercover_wei_07.png");
		},function(){
			$(".text_a").fadeOut();
			$(".pic_a").attr("src","./public/images/about_us/our-team-undone/no_cover/svg_file/nocover_wei.svg");
		});
		$(".pic_b").hover(function(){
			$(".text_b").fadeIn();
		},function(){
			$(".text_b").fadeOut();
		});
		$(".pic_c").hover(function(){
			$(".text_c").fadeIn();
		},function(){
			$(".text_c").fadeOut();
		});
		$(".pic_d").hover(function(){
			$(".text_d").fadeIn();
		},function(){
			$(".text_d").fadeOut();
		});
		$(".pic_e").hover(function(){
			$(".text_e").fadeIn();
		},function(){
			$(".text_e").fadeOut();
		});
	});
});
