$(function() {
	$('#div_id_container').fullpage({
		anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6'],
		menu: '#menu',
		//到达页面时
		afterLoad: function(anchorLink, index) {
			var arrive = ".title" + index;
			//如果是第一个页面 下面的hr变成白色
			if(index == 1) {
				$(arrive).css("background-color", "#FFFFFF");
				$(arrive).css("width", "82px");
			}
		},
		//离开页面时
		onLeave: function(index, nextIndex, direction) {
			if(index == 6 && nextIndex == 7) {
				return;
			}
			//如果下一个页面是第一个页面  那么头部的样式背景变成相应样式否则变成另外的样式
			if(nextIndex == 1) {
				$(".div_class_header").removeClass("div_class_header_replace");
				$(".ul_menu").removeClass("ul_menu_replace");
				$(".li_a").removeClass("li_a_replace");
				$(".div_sidebar hr").removeClass("hr_replace");
			} else {
				$(".div_class_header").addClass("div_class_header_replace");
				$(".ul_menu").addClass("ul_menu_replace");
				$(".li_a").addClass("li_a_replace");
				$(".div_hr").addClass("hr_replace");
			}
			var leave = ".title" + index;
			var arrive = ".title" + nextIndex;
			//如果离开的是第二个页面 到达的是第一个页面那么将两个的hr变成白色
			//如果离开的是第一个页面 到达的是第二个页面 那么两个hr变成红色
			//否则只改变一个的颜色
			if(index == 2 && nextIndex == 1) {
				$(leave).css("background-color", "#FFFFFF");
				$(leave).css("width", "0px");

				$(arrive).css("width", "82px");
				$(arrive).css("background-color", "#FFFFFF");
			} else if(index == 1 && nextIndex == 2) {
				$(leave).css("background-color", "red");
				$(leave).css("width", "0px");

				$(arrive).css("width", "82px");
				$(arrive).css("background-color", "red");
			} else {
				$(leave).css("width", "0px");
				$(arrive).css("width", "82px");
			}
			//当离开一个页面时的动画效果取消
			switch(index) {
				case 2:
					$(".div_center span").removeClass("span_head_replace");
					$(".div_center hr").removeClass("center_hr_replace");
					$(".div_center .div_first").removeClass("div_first_replace");
					$(".div_center .div_second").removeClass("div_second_replace");
					break;
				case 3:
					$(".div_class_service .bottom_background").removeClass("bottom_background_ani");
					$(".absolute3 .absolute3_center a:nth-child(2)").removeClass("a_right_ani");
					$(".absolute3 .absolute3_center a:nth-child(1)").removeClass("a_left_ani");
					$(".div_class_service .absolute1").removeClass("absolute1_ani");
				case 5:
					$(".case_one").removeClass("one");
					$(".case_two").removeClass("two");
					$(".case_three").removeClass("three");
					$(".case_four").removeClass("four");
					$(".case_five").removeClass("five");
					$(".case_six").removeClass("six");
					$(".case_seven").removeClass("seven");
					$(".case_eight").removeClass("eight");
					break;
				case 6:
					$(".contact_right").css("margin-right", "-43.1rem");
					$(".contact_top h2").removeClass("contact_right_h2_animation");
					$(".contact_top hr").removeClass("contact_right_hr_animation");
					$(".contact_top span").removeClass("contact_right_span_animation");
					$(".contact_right_info ul li:nth-child(1)").removeClass("contact_right_li1_animation");
					$(".contact_right_info ul li:nth-child(2)").removeClass("contact_right_li2_animation");
					$(".contact_right_info ul li:nth-child(3)").removeClass("contact_right_li3_animation");
					$(".contact_right_info ul li:nth-child(4)").removeClass("contact_right_li4_animation");
					$(".contact_right_info ul li:nth-child(5)").removeClass("contact_right_li5_animation");
					break;
			}
			//当到达一个页面是添加动画效果
			switch(nextIndex) {
				case 2:
					console.log("cvqwefwe");
					$(".div_center span").addClass("span_head_replace");
					$(".div_center hr").addClass("center_hr_replace");
					$(".div_center .div_first").addClass("div_first_replace");
					$(".div_center .div_second").addClass("div_second_replace");
					break;
				case 3:
					$(".div_class_service .bottom_background").addClass("bottom_background_ani");
					$(".absolute3 .absolute3_center a:nth-child(1)").addClass("a_left_ani");
					$(".absolute3 .absolute3_center a:nth-child(2)").addClass("a_right_ani");
					$(".div_class_service .absolute1").addClass("absolute1_ani");

				case 5:
					$(".case_one").addClass("one");
					$(".case_two").addClass("two");
					$(".case_three").addClass("three");
					$(".case_four").addClass("four");
					$(".case_five").addClass("five");
					$(".case_six").addClass("six");
					$(".case_seven").addClass("seven");
					$(".case_eight").addClass("eight");
					break;
				case 6:
					$(".contact_right").css("margin-right", "0");
					$(".contact_top h2").addClass("contact_right_h2_animation");
					$(".contact_top hr").addClass("contact_right_hr_animation");
					$(".contact_top span").addClass("contact_right_span_animation");
					$(".contact_right_info ul li:nth-child(1)").addClass("contact_right_li1_animation");
					$(".contact_right_info ul li:nth-child(2)").addClass("contact_right_li2_animation");
					$(".contact_right_info ul li:nth-child(3)").addClass("contact_right_li3_animation");
					$(".contact_right_info ul li:nth-child(4)").addClass("contact_right_li4_animation");
					$(".contact_right_info ul li:nth-child(5)").addClass("contact_right_li5_animation");
					break;
			}
		}
	});
});
//点击左边空白处关闭侧栏
function slide_close() {
	$("#div_id_slide").css("right", "-21.97%");
	$("#div_id_shadow").css("opacity", 0);
	$("#div_id_shadow").css("z-index", "1000");
	$("#div_id_slide .slide_head img").removeClass("slide_head_img_class");
	$(".slide_li_one").removeClass("ul_one");
	$(".slide_li_two").removeClass("ul_two");
	$(".slide_li_three").removeClass("ul_three");
	$(".slide_li_four").removeClass("ul_four");
	$(".slide_li_five").removeClass("ul_five");
	$(".slide_li_six").removeClass("ul_six");
}
//点击侧栏按钮弹出侧栏
function sidebar_menu() {
	$("#div_id_slide").css("right", "0");
	$("#div_id_shadow").css("opacity", 0.5);
	$("#div_id_shadow").css("z-index", "2500");
	$("#div_id_shadow").css("background-color", "#000000");
	$("#div_id_slide .slide_head img").addClass("slide_head_img_class");
	$(".slide_li_one").addClass("ul_one");
	$(".slide_li_two").addClass("ul_two");
	$(".slide_li_three").addClass("ul_three");
	$(".slide_li_four").addClass("ul_four");
	$(".slide_li_five").addClass("ul_five");
	$(".slide_li_six").addClass("ul_six");
}
//点击关闭按钮关闭侧栏
function close_menu() {
	if(parseInt(document.body.clientWidth) <= 992) {
		$("#div_id_slide").css("right", "-100%");
	} else {
		$("#div_id_slide").css("right", "-21.97%");
	}
	$("#div_id_shadow").css("opacity", 0);
	$("#div_id_shadow").css("z-index", "1000");
	$("#div_id_slide .slide_head img").removeClass("slide_head_img_class");
	$(".slide_li_one").removeClass("ul_one");
	$(".slide_li_two").removeClass("ul_two");
	$(".slide_li_three").removeClass("ul_three");
	$(".slide_li_four").removeClass("ul_four");
	$(".slide_li_five").removeClass("ul_five");
	$(".slide_li_six").removeClass("ul_six");
}
//简介里的了解更多按钮 当鼠标放到上面时
function span_over() {
	$(".div_second span").css("margin-top", "-30px");
	$(".div_second span").css("margin-bottom", "20px");
	$(".div_second .second_span").css("background-color", "red");
}
//简介里的了解更多按钮 当鼠标放移开时
function span_out() {
	$(".div_second span").css("margin-top", "0px");
	$(".div_second span").css("margin-bottom", "0px");
	$(".div_second .second_span").css("background-color", "#FFFFFF");
}
//案例里面的标题下面 当鼠标放到上面时
function case_short() {
	$(".div_class_case .case_container hr").css("width", "1rem");
}
//案例里面的标题下面 当鼠标放移开时
function case_long() {
	$(".div_class_case .case_container hr").css("width", "2rem");
}
//向左靠
var news_turn = false;

function news_turn_right() {
	if(news_turn) {
		return;
	}

	news_turn = true;
	var margin = parseInt($(".new_display .cloum1").css("margin-left"));
	var width = parseInt($(".new_display .cloum1").css("width"));
	var father_width = parseInt($(".new_display").css("width"));
	var new_margin;
	if(parseInt(document.body.clientWidth <= 992)) {
		new_margin = (margin - width * 2) + "px";
		if(margin == parseInt(father_width * 0.33333 - width * 2)) {
			return;
		}
	} else {
		new_margin = (margin - width * 3) + "px";
		if(margin == parseInt(father_width * 0.33333 - width * 3)) {
			return;
		}
	}

	$(".new_display .cloum1").css("margin-left", new_margin);
	setTimeout("news_turn = false;", 1000);
}
//向右靠
function news_turn_left() {
	if(news_turn) {
		return;
	}
	news_turn = true;
	var margin = parseInt($(".new_display .cloum1").css("margin-left"));
	var width = parseInt($(".new_display .cloum1").css("width"));
	var father_width = parseInt($(".new_display").css("width"));
	var new_margin;
	if(parseInt(document.body.clientWidth <= 992)){
		new_margin = margin + width * 2 + "px";
	}else{
		new_margin = margin + width * 3 + "px";
	}
	if(margin == parseInt(father_width * 0.33333)) {
		return;
	}
	$(".new_display .cloum1").css("margin-left", new_margin);
	setTimeout("news_turn = false;", 1000);
}
//新闻 当鼠标移动上去的时候
function news_over(var1) {
	var id = "#" + var1;
	var class_top = "." + var1 + "_top";
	var class_bottom = "." + var1 + "_bottom";
	var index = parseInt(var1.charAt(var1.length - 1));
	$(".news_container .new_head hr").css("width", "1rem");
	if(index % 2 == 1) {
		$(class_top + " span").css("transform", "translateX(1rem)");
		$(class_top + " span").css("color", "#333333");
		$(class_top + " p:nth-child(2)").css("transform", "translateX(1rem)");
		$(class_top + " p:nth-child(3)").css("transform", "translateX(1rem)");
		$(class_top + " button").css("opacity", "1");
		$(class_bottom).css("transform", "scale(0.9,0.9)");
		$(class_bottom + " .inside_box").css("opacity", "1");
		$(class_bottom + " .inside_box").css("transform", "scale(0.9,0.9)");
	} else {
		$(class_bottom + " span").css("transform", "translateX(1rem)");
		$(class_bottom + " span").css("color", "#333333");
		$(class_bottom + " p:nth-child(2)").css("transform", "translateX(1rem)");
		$(class_bottom + " p:nth-child(3)").css("transform", "translateX(1rem)");
		$(class_bottom + " button").css("opacity", "1");
		$(class_top).css("transform", "scale(0.9,0.9)");
		$(class_top + " .inside_box").css("opacity", "1");
		$(class_top + " .inside_box").css("transform", "scale(0.9,0.9)");
	}
}
//新闻 当鼠标移开时
function news_out(var1) {
	var id = "#" + var1;
	var class_top = "." + var1 + "_top";
	var class_bottom = "." + var1 + "_bottom";
	var index = parseInt(var1.charAt(var1.length - 1));
	$(".news_container .new_head hr").css("width", "2rem");
	if(index % 2 == 1) {
		$(class_top + " span").css("transform", "translateX(0rem)");
		$(class_top + " span").css("color", "#CCCCCC");
		$(class_top + " p:nth-child(2)").css("transform", "translateX(0rem)");
		$(class_top + " p:nth-child(3)").css("transform", "translateX(0rem)");
		$(class_top + " button").css("opacity", "0");
		$(class_bottom).css("transform", "scale(1,1)");
		$(class_bottom + " .inside_box").css("opacity", "0");
		$(class_bottom + " .inside_box").css("transform", "scale(0,0)");
	} else {
		$(class_bottom + " span").css("transform", "translateX(0rem)");
		$(class_bottom + " span").css("color", "#CCCCCC");
		$(class_bottom + " p:nth-child(2)").css("transform", "translateX(0rem)");
		$(class_bottom + " p:nth-child(3)").css("transform", "translateX(0rem)");
		$(class_bottom + " button").css("opacity", "0");
		$(class_top).css("transform", "scale(1,1)");
		$(class_top + " .inside_box").css("opacity", "0");
		$(class_top + " .inside_box").css("transform", "scale(0,0)");
	}
}
//服务烂 往左
var is_play = false;

function service_turn_right() {
	if(is_play)
		return;
	is_play = true;
	var width = parseInt($(".absolute2 .absolute2_center .service").css("width"));
	var margin_left = parseInt($(".absolute2 .absolute2_center .service_one").css("margin-left"));
	var index = margin_left / width;
	var i, j;
	if(-margin_left == width * 3) {
		return;
	}
	margin_left -= width;
	margin_left = margin_left + "px";
	$(".absolute2 .absolute2_center .service_one").css("margin-left", margin_left);
	switch(index) {
		case 1:
			$(".div_class_service img").removeClass("img_place_hidden");
			$(".absolute2 .absolute2_center .service_one").removeClass("service_addclass");
			$(".absolute2 .absolute2_center .service_one span").removeClass("span_addclass");
			$(".absolute2 .absolute2_center .service_two").addClass("service_addclass");
			$(".absolute2 .absolute2_center .service_two span").addClass("span_addclass");

			$(".div_class_service").css("background-image", "url(img/service2.jpg)")
			$(".div_class_service").css("background-size", "100% 100%");
			$(".div_class_service").css("background-repeat", "no-repeat");
			$(".div_class_service img").addClass("img_place_hidden");
			setTimeout("$('.div_class_service img').attr('src', 'img/service2.jpg');$('.div_class_service img').attr('opacity', '1');$(\".div_class_service img\").removeClass(\"img_place_hidden\");is_play=false;", 1500);
			break;
		case 0:
			$(".absolute2 .absolute2_center .service_two").removeClass("service_addclass");
			$(".absolute2 .absolute2_center .service_two span").removeClass("span_addclass");
			$(".absolute2 .absolute2_center .service_three").addClass("service_addclass");
			$(".absolute2 .absolute2_center .service_three span").addClass("span_addclass");
			$(".div_class_service").css("background-image", "url(img/service3.jpg)")
			$(".div_class_service").css("background-size", "100% 100%");
			$(".div_class_service").css("background-repeat", "no-repeat");
			$(".div_class_service img").addClass("img_place_hidden");
			setTimeout("$('.div_class_service img').attr('src', 'img/service3.jpg');$('.div_class_service img').attr('opacity', '1');$(\".div_class_service img\").removeClass(\"img_place_hidden\");is_play=false;", 1500);
			break;
		case -1:
			$(".absolute2 .absolute2_center .service_three").removeClass("service_addclass");
			$(".absolute2 .absolute2_center .service_three span").removeClass("span_addclass");
			$(".absolute2 .absolute2_center .service_four").addClass("service_addclass");
			$(".absolute2 .absolute2_center .service_four span").addClass("span_addclass");
			setTimeout("$('.div_class_service img').attr('src', 'img/service4.jpg');$('.div_class_service img').attr('opacity', '1');$(\".div_class_service img\").removeClass(\"img_place_hidden\");is_play=false;", 1500);
			$(".div_class_service").css("background-image", "url(img/service4.jpg)")
			$(".div_class_service").css("background-size", "100% 100%");
			$(".div_class_service").css("background-repeat", "no-repeat");
			$(".div_class_service img").addClass("img_place_hidden");
			break;
		case -2:
			$(".absolute2 .absolute2_center .service_four").removeClass("service_addclass");
			$(".absolute2 .absolute2_center .service_four span").removeClass("span_addclass");
			$(".absolute2 .absolute2_center .service_five").addClass("service_addclass");
			$(".absolute2 .absolute2_center .service_five span").addClass("span_addclass");
			$(".div_class_service").css("background-image", "url(img/service5.jpg)")
			$(".div_class_service").css("background-size", "cover");
			$(".div_class_service").css("background-repeat", "no-repeat");
			$(".div_class_service img").addClass("img_place_hidden");
			setTimeout("$('.div_class_service img').attr('src', 'img/service5.jpg');$('.div_class_service img').attr('opacity', '1');$(\".div_class_service img\").removeClass(\"img_place_hidden\");is_play=false;", 1500);
			break;
	}
}
//服务烂 往右
function service_turn_left() {
	if(is_play)
		return;
	is_play = true;
	var width = parseInt($(".absolute2 .absolute2_center .service").css("width"));
	var margin_left = parseInt($(".absolute2 .absolute2_center .service_one").css("margin-left"));
	var index = margin_left / width;
	if(margin_left == width) {
		return;
	}
	margin_left += width;
	margin_left = margin_left + "px";
	$(".absolute2 .absolute2_center .service_one").css("margin-left", margin_left);
	switch(index) {
		case -3:
			$(".absolute2 .absolute2_center .service_five").removeClass("service_addclass");
			$(".absolute2 .absolute2_center .service_five span").removeClass("span_addclass");
			$(".absolute2 .absolute2_center .service_four").addClass("service_addclass");
			$(".absolute2 .absolute2_center .service_four span").addClass("span_addclass");
			$(".div_class_service").css("background-image", "url(img/service4.jpg)")
			$(".div_class_service").css("background-size", "100% 100%");
			$(".div_class_service").css("background-repeat", "no-repeat");
			$(".div_class_service img").addClass("img_place_hidden");
			setTimeout("$('.div_class_service img').attr('src', 'img/service4.jpg');$('.div_class_service img').attr('opacity', '1');$(\".div_class_service img\").removeClass(\"img_place_hidden\");is_play=false;", 1500);
			break;
		case -2:
			$(".absolute2 .absolute2_center .service_four").removeClass("service_addclass");
			$(".absolute2 .absolute2_center .service_four span").removeClass("span_addclass");
			$(".absolute2 .absolute2_center .service_three").addClass("service_addclass");
			$(".absolute2 .absolute2_center .service_three span").addClass("span_addclass");
			$(".div_class_service").css("background-image", "url(img/service3.jpg)")
			$(".div_class_service").css("background-size", "100% 100%");
			$(".div_class_service").css("background-repeat", "no-repeat");
			$(".div_class_service img").addClass("img_place_hidden");
			setTimeout("$('.div_class_service img').attr('src', 'img/service3.jpg');$('.div_class_service img').attr('opacity', '1');$(\".div_class_service img\").removeClass(\"img_place_hidden\");is_play=false;", 1500);
			break;
		case -1:
			$(".absolute2 .absolute2_center .service_three").removeClass("service_addclass");
			$(".absolute2 .absolute2_center .service_three span").removeClass("span_addclass");
			$(".absolute2 .absolute2_center .service_two").addClass("service_addclass");
			$(".absolute2 .absolute2_center .service_two span").addClass("span_addclass");
			$(".div_class_service").css("background-image", "url(img/service2.jpg)")
			$(".div_class_service").css("background-size", "100% 100%");
			$(".div_class_service").css("background-repeat", "no-repeat");
			$(".div_class_service img").addClass("img_place_hidden");
			setTimeout("$('.div_class_service img').attr('src', 'img/service2.jpg');$('.div_class_service img').attr('opacity', '1');$(\".div_class_service img\").removeClass(\"img_place_hidden\");is_play=false;", 1500);
			break;
		case 0:
			$(".absolute2 .absolute2_center .service_two").removeClass("service_addclass");
			$(".absolute2 .absolute2_center .service_two span").removeClass("span_addclass");
			$(".absolute2 .absolute2_center .service_one").addClass("service_addclass");
			$(".absolute2 .absolute2_center .service_one span").addClass("span_addclass");
			$(".div_class_service").css("background-image", "url(img/service1.jpg)")
			$(".div_class_service").css("background-size", "100% 100%");
			$(".div_class_service").css("background-repeat", "no-repeat");
			$(".div_class_service img").addClass("img_place_hidden");
			setTimeout("$('.div_class_service img').attr('src', 'img/service1.jpg');$('.div_class_service img').attr('opacity', '1');$(\".div_class_service img\").removeClass(\"img_place_hidden\");is_play=false;", 1500);
			break;
	}
}
//服务里的查看简介按钮 当鼠标放到上面时
function service_span_over() {
	$(".absolute3 .absolute3_bottom span ").css("margin-top", "-1.5rem");
	$(".absolute3 .absolute3_bottom span ").css("margin-bottom", "1rem");
	$(".absolute3 .absolute3_bottom span:nth-child(2)").css("background-color", "red");
}
//服务里的查看简介按钮 当鼠标放移开时
function service_span_out() {
	$(".absolute3 .absolute3_bottom span ").css("margin-top", "0px");
	$(".absolute3 .absolute3_bottom span ").css("margin-bottom", "0px");
	$(".absolute3 .absolute3_bottom span:nth-child(2)").css("background-color", "#FFFFFF");
}

function service_mouseouer() {
	$(".absolute2 .absolute2_top .absolute2_top_bottom hr").css("width", "1.5rem");
}

function service_mouseout() {
	$(".absolute2 .absolute2_top .absolute2_top_bottom hr").css("width", "2.5rem");
}
$(".div_class_homePage .lun_bo_container .contain .more").mouseover(function() {
	$(".div_class_homePage .lun_bo_container .contain span ").css("margin-top", "-1.5rem");
	$(".div_class_homePage .lun_bo_container .contain span ").css("margin-bottom", "1rem");
	$(".div_class_homePage .lun_bo_container .contain span:nth-child(2)").css("background-color", "red");
});
$(".div_class_homePage .lun_bo_container .contain .more").mouseout(function() {
	$(".div_class_homePage .lun_bo_container .contain span ").css("margin-top", "0px");
	$(".div_class_homePage .lun_bo_container .contain span ").css("margin-bottom", "0px");
	$(".div_class_homePage .lun_bo_container .contain span:nth-child(2)").css("background-color", "#FFFFFF");
});
//轮播
window.onload = function() {
	var turn_left = $(".div_class_homePage .homepage_left a");
	var turn_right = $(".div_class_homePage .homepage_right a");
	var lunbo_first = $(".div_class_homePage .lun_bo_container .index_first");
	var length = parseInt(lunbo_first.css("width"));
	var is_lunbo = false;
	var page = 1;
	$(".div_class_homePage  .contain h3").addClass("contain_h3_ani");
	$(".div_class_homePage  .contain h4").addClass("contain_h4_ani");
	$(".div_class_homePage  .contain hr").addClass("contain_hr_ani");
	$(".div_class_homePage  .contain p").addClass("contain_p_ani");
	$(".div_class_homePage  .contain .more").addClass("contain_more_ani");
	//自动轮播
	var timer = setInterval(function() {
		animate(-length);
	}, 5000);
	turn_left.click(function() {
		if(!is_lunbo) {
			clearInterval(timer);
			animate(length);
		}
	});
	turn_right.click(function() {
		if(!is_lunbo) {
			clearInterval(timer);
			animate(-length);
		}
	});

	function animate(var1) {
		$(".div_class_homePage  .contain h3").removeClass("contain_h3_ani");
		$(".div_class_homePage  .contain h4").removeClass("contain_h4_ani");
		$(".div_class_homePage  .contain hr").removeClass("contain_hr_ani");
		$(".div_class_homePage  .contain p").removeClass("contain_p_ani");
		$(".div_class_homePage  .contain .more").removeClass("contain_more_ani");
		is_lunbo = true;
		var margin_left = parseInt(lunbo_first.css("margin-left"));
		var new_margin = margin_left + var1;
		var times = 500;
		var time = 10;
		var one_length = var1 / (times / time);
		page = new_margin / length;
		if(page < 0)
			page = -page;

		function go() {
			var new_margin_left = parseInt(lunbo_first.css("margin-left"));
			if(var1 < 0 && new_margin_left > new_margin || var1 > 0 && new_margin_left < new_margin) {
				new_margin_left = new_margin_left + one_length + "px";
				lunbo_first.css("margin-left", new_margin_left);
				setTimeout(go, 10);
			} else {
				is_lunbo = false;
				$(".div_class_homePage  .contain h3").addClass("contain_h3_ani");
				$(".div_class_homePage  .contain h4").addClass("contain_h4_ani");
				$(".div_class_homePage  .contain hr").addClass("contain_hr_ani");
				$(".div_class_homePage  .contain p").addClass("contain_p_ani");
				$(".div_class_homePage  .contain .more").addClass("contain_more_ani");
				if(var1 > 0) {
					if(new_margin >= 0) {
						new_margin = -3 * length;
					}
				} else {
					if(new_margin <= -4 * length) {
						new_margin = -length;
					}
				}
				new_margin = new_margin + "px";
				lunbo_first.css("margin-left", new_margin);
			}
		}
		go();
	}
}