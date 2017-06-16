// Institucion: DAVE
// Lenguaje: JS
// Modificado por Ernesto Isasi 8/29/2016
// LMS Updated 10/5/2017
// Script para agregar nuevas opciones al menu horizontal y otras funciones a la plataforma.-

//	Code sent by Instructure 
	if(window.location.href.indexOf('sis_import')>-1){
	var base_url = 'https://s3.amazonaws.com/SSL_Assets/Eduk+Group/';
	$.getScript(base_url + 'dust-core.min.js')
		.done(function(){
		$.getScript(base_url + 'templates.js')
		.done(function(){
			$.getScript(base_url + 'sis_import_extras.js');
			})
		})
	}
//	Hide sensitive buttons on the course settings 
 $(document).ready(function(){
if($.inArray('teacher',ENV['current_user_roles']) === 1 && $.inArray('admin' ,ENV['current_user_roles']) === -1) 
 {
	$('a.btn.button-sidebar-wide.reset_course_content_button').hide();
	$("a:contains('Conclude this Course')").hide();
	$("a:contains(content_exports)").hide();
	$('a.btn.button-sidebar-wide.delete_course_link').hide();
	$('a.btn.button-sidebar-wide.import_content').show();
	$('a.btn.button-sidebar-wide.crosslist_link').hide();
	$("input#course_section_name").hide();
	$("input#course_section_name").parent().hide();
	}
else if
 ($.inArray('admin',ENV['current_user_roles']) === -1)
 	$('a.btn.button-sidebar-wide.reset_course_content_button').show();
	$("a:contains('Conclude this Course')").show();
	$('a.btn.button-sidebar-wide.delete_course_link').show();
	$("a:contains('Add Section')").show();
	$("a:contains('Export Course Content')").show();
	});

// Agrega el boton de Libary al menu vertical.
function addMenuItem (linkText, linkhref, icon, target) {
var iconHtml = '',
itemHtml,
linkId = linkText.split(' ').join('_'),
newTab = '';
if (typeof target !== 'undefined') {
newTab = 'target="' + target + '"';
}
if (icon !== '') {
	iconHtml = '<i class="' + icon + '" style="display: block; width: 100%; height: 45px;"></i> ';
}
itemHtml = '<li class="ic-app-header__menu-list-item">' +
'<a id="global_nav_' + linkId + '" href="' + linkhref + '" class="ic-app-header__menu-list-link" ' + newTab + '>' +
' 	<div class="menu-item__text">' + iconHtml + linkText + '</div>' +
'</a>' +
'</li>';
$('#menu').append(itemHtml);
}
addMenuItem('Library', 'http://libguides.crev.edukgroup.com/dave', 'icon-biblioteca', '_blank');
// Fin del boton de Biblioteca

// Agrega el boton de Servicio al menu vertical con sub lista de opciones.
// THIS IS NOT SUPPORTED BY INSTRUCTURE, WORKS as of 12-4-15
$(document).ready(function() {
	var trayLinks = [
		{key: 'http://online.nuc.edu/programdevelopment/general-information/general-information-dave/ ', val: 'General Information DAVE'},
	];

	var slide_out_title = "Welcome to Services!" //Changes the title on the slide out menu
	var global_nav_name = "Services" //Change the title on the global navigation menu

	var footerContent = ""; //Changes the text of the bottom on the slide out tray
	////////////////////////////////////////////////////////////////////////////////
	//DO NOT EDIT ANYTHING BELOW THIS LINE!
	////////////////////////////////////////////////////////////////////////////////

	//Browser Detection
	navigator.agentDetect = (function(){
	var ua= navigator.userAgent, tem,
	M= ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
	if(/trident/i.test(M[1])){
	tem=/\brv[ :]+(\d+)/g.exec(ua) || [];
	return 'IE '+(tem[1] || '');
	}
	if(M[1]=== 'Chrome'){
	tem= ua.match(/\b(OPR|Edge)\/(\d+)/);
	if(tem!= null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
	}
	M= M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
	if((tem= ua.match(/version\/(\d+)/i))!= null) M.splice(1, 1, tem[1]);
	return M;
	})();

	//Array, 0 = browser, 1 = version
	var agent = navigator.agentDetect;
	var reactId;

	switch(agent[0]) {
	case "Firefox":
	reactId = "2";
	break;
	case "Safari":
	reactId = "2";
	break;
	default:
	reactId = "1";
	break;
	}

	var displayVals = '';

	function displayLinks(element, index, array) {
		displayVals += '<li>';
		displayVals += '<a target="_blank" href="' + element.key + '">' + element.val + '</a>'; //Remove target="_blank" if you do not want the links to open in a new tab.
		displayVals += '</li>';
	}

	trayLinks.forEach(displayLinks);

	var trayHtml = '<div style="position:absolute;background:#fff;" class="ReactTray__Content ReactTray__Content--after-open " tabindex="-1" data-reactid=".' +
 reactId + '.0"><div class="ReactTray__layout" data-reactid=".' +
 reactId + '.0.0"><div class="ReactTray__primary-content" data-reactid=".' +
 reactId + '.0.0.0"><div class="ic-NavMenu__header" data-reactid=".' +
 reactId + '.0.0.0.0"><h1 class="ic-NavMenu__headline" data-reactid=".' +
 reactId + '.0.0.0.0.0">' +
 slide_out_title + '</h1><button class="Button Button--icon-action ReactTray__closeBtn" type="button" data-reactid=".' +
 reactId + '.0.0.0.0.1"><i class="icon-x" data-reactid=".' +
 reactId + '.0.0.0.0.1.0"></i><span class="screenreader-only" data-reactid=".' +
 reactId + '.0.0.0.0.1.1">Close</span></button></div><ul class="ReactTray__link-list" data-reactid=".' +
 reactId + '.0.0.0.1">' +
 displayVals + '</ul></div><div class="ReactTray__secondary-content" data-reactid=".' +
 reactId + '.0.0.1"><div class="ReactTray__info-box" data-reactid=".' +
 reactId + '.0.0.1.0">' +
 footerContent + '</div></div></div></div>' +
 '<script>$(\'.Button.Button--icon-action.ReactTray__closeBtn, .Button.Button--icon-action.ReactTray__closeBtn .icon-x\').click(function () {$(\'.ReactTrayPortal div\').removeAttr(\'style\');$(\'.ReactTrayPortal div\').removeAttr(\'class\');$(\'.ReactTrayPortal div\').html("");$(\'#menu, .menu-item.ic-app-header__menu-list-item a\').removeClass(\'ui-state-disabled\').removeAttr(\'disabled\');$(\'#customTrayOverlay\').hide();$(\'#custom_nav\').css(\'background-color\', \'\');$(\'icon-servicios\').css(\'color\', \'#fff\');});</script>';

	trayHtml = trayHtml.replace(/(?:\r\n|\r|\n|)/g, '');

	var menu = $('#menu');
	if (!menu.length) return;
	var custom_nav = $('<li/>', {
		'id': 'custom_nav',
		'class': 'menu-item ic-app-header__menu-list-item',
		'style': 'position: relative; bottom: 0px;',
		html: '<a id="global_nav_resources_link" href="javascript:void(0)" class="ic-app-header__menu-list-link">' +
		'<div class="menu-item-icon-container" aria-hidden="true">' +
		'<i class="ic-icon-svg icon-servicios" style="height: 40px;"></i>' +
		'<div class="menu-item__text">' + global_nav_name + '</div>' +
		'</div></a></li>'
	});

	menu.append(custom_nav);

	$('body').append('<div id="customTrayOverlay" style="width:' + $('#menu').width() + 'px;height: ' + $('#menu').height() + 'px;position: absolute;left: 0;top: 87px;z-index: 999;display:none;"></div>');

	$('#global_nav_resources_link').click(function () {
		$('.ReactTrayPortal div').addClass('ReactTray__Overlay ReactTray__Overlay--after-open');
		$('.ReactTrayPortal div').css({
			'position' : 'fixed',
			'top' : '0px',
			'left': '0px',
			'right' : '0px',
			'bottom': '0px'
		});

		$('.ReactTrayPortal div').append(trayHtml);
		$('#menu, .menu-item.ic-app-header__menu-list-item a').addClass('ui-state-disabled').attr('disabled', 'disabled');
		$('#customTrayOverlay').show();
		$('#custom_nav').css('background-color', '#fff');

	});
});
// Fin del boton Servicio

	// Agrega el boton de Help al menu vertical con sub lista de opciones.
	// THIS IS NOT SUPPORTED BY INSTRUCTURE, WORKS as of 12-4-15
	$(document).ready(function() {
		var trayLinkstwo = [
			{key: 'https://daveschool.instructure.com/courses/3/pages/technical-support', val: ' Technical Support for DAVE'},
			{key: 'https://community.canvaslms.com/docs/DOC-4121', val: 'Search the Canvas Guides'},
			{key: 'https://cases.canvaslms.com/apex/liveagentchat' , val: 'Live chat'},
			
		];

		var slide_out_titletwo = "Welcome to Help!"; //Changes the title on the slide out menu
		var global_nav_nametwo = "Help"; //Change the title on the global navigation menu

		var footerContenttwo = ""; //Changes the text of the bottom on the slide out tray!
		////////////////////////////////////////////////////////////////////////////////
		//DO NOT EDIT ANYTHING BELOW THIS LINE!
		////////////////////////////////////////////////////////////////////////////////

		//Browser Detection
		navigator.agentDetect = (function(){
			var ua= navigator.userAgent, tem,
			M= ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
			if(/trident/i.test(M[1])){
				tem=/\brv[ :]+(\d+)/g.exec(ua) || [];
				return 'IE '+(tem[1] || '');
			}
			if(M[1]=== 'Chrome'){
				tem= ua.match(/\b(OPR|Edge)\/(\d+)/);
				if(tem!= null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
			}
			M= M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
			if((tem= ua.match(/version\/(\d+)/i))!= null) M.splice(1, 1, tem[1]);
			return M;
		})();

		//Array, 0 = browser, 1 = version
		var agent = navigator.agentDetect;
		var reactId;

		switch(agent[0]) {
			case "Firefox":
				reactId = "2";
				break;
			case "Safari":
				reactId = "2";
				break;
			default:
				reactId = "1";
				break;
		}

		var displayVals = '';

		function displayLinkstwo(element, index, array) {
			displayVals += '<li>';
			displayVals += '<a target="_blank" href="' + element.key + '">' + element.val + '</a>'; //Remove target="_blank" if you do not want the links to open in a new tab.
			displayVals += '</li>';
		}

		trayLinkstwo.forEach(displayLinkstwo);

		var trayHtmltwo = '<div style="position:absolute;background:#fff;" class="ReactTray__Content ReactTray__Content--after-open " tabindex="-1" data-reactid=".' +
	 reactId + '.0"><div class="ReactTray__layout" data-reactid=".' +
	 reactId + '.0.0"><div class="ReactTray__primary-content" data-reactid=".' +
	 reactId + '.0.0.0"><div class="ic-NavMenu__header" data-reactid=".' +
	 reactId + '.0.0.0.0"><h1 class="ic-NavMenu__headline" data-reactid=".' +
	 reactId + '.0.0.0.0.0">' +
	 slide_out_titletwo + '</h1><button class="Button Button--icon-action ReactTray__closeBtn" type="button" data-reactid=".' +
	 reactId + '.0.0.0.0.1"><i class="icon-x" data-reactid=".' +
	 reactId + '.0.0.0.0.1.0"></i><span class="screenreader-only" data-reactid=".' +
	 reactId + '.0.0.0.0.1.1">Close</span></button></div><ul class="ReactTray__link-list" data-reactid=".' +
	 reactId + '.0.0.0.1">' +
	 displayVals + '</ul></div><div class="ReactTray__secondary-content" data-reactid=".' +
	 reactId + '.0.0.1"><div class="ReactTray__info-box" data-reactid=".' +
	 reactId + '.0.0.1.0">' +
	 footerContenttwo + '</div></div></div></div>' +
	 '<script>$(\'.Button.Button--icon-action.ReactTray__closeBtn, .Button.Button--icon-action.ReactTray__closeBtn .icon-x\').click(function () {$(\'.ReactTrayPortal div\').removeAttr(\'style\');$(\'.ReactTrayPortal div\').removeAttr(\'class\');$(\'.ReactTrayPortal div\').html("");$(\'#menu, .menu-item.ic-app-header__menu-list-item a\').removeClass(\'ui-state-disabled\').removeAttr(\'disabled\');$(\'#customTrayOverlaytwo\').hide();$(\'#custom_navtwo\').css(\'background-color\', \'\');$(\'icon-help\').css(\'color\', \'#fff\');});</script>';

		trayHtmltwo = trayHtmltwo.replace(/(?:\r\n|\r|\n|)/g, '');

		var menu = $('#menu');
		if (!menu.length) return;
		var custom_navtwo = $('<li/>', {
			'id': 'custom_navtwo',
			'class': 'menu-item ic-app-header__menu-list-item',
			'style': 'position: relative; bottom: 0px;',
			html: '<a id="global_nav_resources_link_help" href="javascript:void(0)" class="ic-app-header__menu-list-link">' +
			'<div class="menu-item-icon-container" aria-hidden="true">' +
			'<i class="ic-icon-svg icon-help" style="height: 40px;"></i>' +
			'<div class="menu-item__text">' + global_nav_nametwo + '</div>' +
			'</div></a></li>'
		});

		menu.append(custom_navtwo);

		$('body').append('<div id="customTrayOverlaytwo" style="width:' + $('#menu').width() + 'px;height: ' + $('#menu').height() + 'px;position: absolute;left: 0;top: 87px;z-index: 999;display:none;"></div>');

		$('#global_nav_resources_link_help').click(function () {
			$('.ReactTrayPortal div').addClass('ReactTray__Overlay ReactTray__Overlay--after-open');
			$('.ReactTrayPortal div').css({
				'position' : 'fixed',
				'top' : '0px',
				'left': '0px',
				'right' : '0px',
				'bottom': '-40px'
			});

			$('.ReactTrayPortal div').append(trayHtmltwo);
			$('#menu, .menu-item.ic-app-header__menu-list-item a').addClass('ui-state-disabled').attr('disabled', 'disabled');
			$('#customTrayOverlaytwo').show();
			$('#custom_navtwo').css('background-color', '#fff');

		});
	});
	// Fin del boton Help

//Change Forgot Password URL//
$(document).ready(function() {
$("#login_forgot_password").replaceWith("<a href='https://daveschool.instructure.com/courses/3/pages/technical-support'>Forgot Password?</a>")
})

//* Login page */


$(document).ready(function() {
	
	if ((document.URL) == 'http://www.site1.com/products/#') {
 
		 // Background Site 1
	
			$('body.ic-Login-Body').css('background-image', 'url(https://instructure-uploads.s3.amazonaws.com/account_25570000000000001/attachments/2967038/Fondo_Login_Page.png?AWSAccessKeyId=AKIAJFNFXH2V2O7RPCAA&Expires=1937657759&Signature=i8QjduehqWsNm%2BruIcyD1CaTUjc%3D&response-cache-control=Cache-Control%3Amax-age%3D473364000.0%2C%20public&response-expires=473364000.0)');

			// Logo Site 1
			$('.ic-Login__header__logo img').attr('src',('https://instructure-uploads.s3.amazonaws.com/account_86310000000000001/attachments/235/IBC_Outline%20white_test_3.png?AWSAccessKeyId=AKIAJFNFXH2V2O7RPCAA&Expires=1937142223&Signature=86T2AJZT8XruWeq7BnOD1VZsX%2BY%3D&response-cache-control=Cache-Control%3Amax-age%3D473364000.0%2C%20public&response-expires=473364000.0'));
		 
		 
}
 else if ((document.URL) == 'http://www.site2.com/products/#') {

			// Background Site 2
	
			$('body.ic-Login-Body').css('background-image', 'url(https://instructure-uploads.s3.amazonaws.com/account_25570000000000001/attachments/2967038/Fondo_Login_Page.png?AWSAccessKeyId=AKIAJFNFXH2V2O7RPCAA&Expires=1937657759&Signature=i8QjduehqWsNm%2BruIcyD1CaTUjc%3D&response-cache-control=Cache-Control%3Amax-age%3D473364000.0%2C%20public&response-expires=473364000.0)');

			// Logo Site 2
			$('.ic-Login__header__logo img').attr('src',('https://instructure-uploads.s3.amazonaws.com/account_86310000000000001/attachments/235/IBC_Outline%20white_test_3.png?AWSAccessKeyId=AKIAJFNFXH2V2O7RPCAA&Expires=1937142223&Signature=86T2AJZT8XruWeq7BnOD1VZsX%2BY%3D&response-cache-control=Cache-Control%3Amax-age%3D473364000.0%2C%20public&response-expires=473364000.0'));
}
	
	
	
});

//* Fin Login Page */
