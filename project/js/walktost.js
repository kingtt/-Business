$(function(){

	// language点击
	$('.li03').click(function(){
		$('.language').slideToggle('fast');
	});
	// 我要询价点击
	$('.li01 a').click(function(event){
		event.preventDefault();
		$('.top_form').slideToggle('fast');
	});
	// 点击询价内部关闭
	$('.top_form_close').click(function(){
		$('.top_form').slideUp('normal');
	});
	// 顶部搜索
	$('.li04').hover(function(){
		$('.li04 input').css({'border':'1px solid #ccc'}).animate({width:'170px'},300);
	},function(){
		$('.li04 input').animate({width:'0px',borderWidth:'0px'},300);
	});

	//pc版nav
	$(window).scroll(function(){
		var scrolltop=$(document).scrollTop();
		if (scrolltop>64) {
			$('nav').css({position:'fix',top:scrolltop});
		}else{
			$('nav').css({position:'absolute',top:'64px'});
		}
	});
	$('.nav_li').hover(function(){
		$(this).children('.nav_div').slideDown('fast');
	},function(){
		$(this).children('.nav_div').slideUp('fast');
	});

	// main5 分支
	$('.fenzhi span').click(function(){
		$('.fzs').slideToggle('fast');
	})
	//回到顶部
	$('.backtop').click(function(){
		$(document).scrollTop(0);
	});
	// mobile版导航
	$('.mobilemenu').click(function(event){
		event.preventDefault();
		$('.mobilenav ul').animate({left:'0px'},1000);
		$('.mobilenav div').show();
	});
	$('.mobilenav div').click(function(){
		$(this).hide();
		$('.mobilenav ul').animate({left:'-50%'},1000);
	});

	window.scrollReveal = new scrollReveal();


	// $('.section2 li').hover(function(){
	// 	$(this).children('.txt').css({'background-color':'rgba(255, 180, 0, 0.7)',
	// 		'background-image':'url(../images/line.png)',
	// 		'background-position':'right top',
	// 		'background-repeat':'no-repeat'
	// 	})
	// 	$(this).children('p').css({opacity: 1});
	// 	$(this).children('h3:after').css({
	// 		'background-color':'#fff'
	// 	});
	// },function(){

	// });

	$('.section2 li').each(function(i){
		$(this).hover(function(){
			$('.li'+(i+1)+' .txt').css({'background-color':'rgba(255, 180, 0, 0.7)',
				'background-image':'url(images/line.png)',
				'background-position':'right top',
				'background-repeat':'no-repeat'
			});
			$('.li'+(i+1)+' p').css({opacity: 1});
			$('.li'+(i+1)+' h3:after').css({'background-color':'#fff'});
		},function(){
			$('.li'+(i+1)+' .txt').css({'background':'none',
				// 'background-image':'url(../images/line.png)',
				// 'background-position':'right top',
				// 'background-repeat':'no-repeat'
			});
			$('.li'+(i+1)+' p').css({opacity: 0});
			$('.li'+(i+1)+' h3:after').css({
				'background-color':'#ff9900'
			});
		});
	});










});



