;(function(){
	'use strict';

	var btn = document.querySelector('.mainNavgation__hamburggerParties');
	var html = document.querySelector('html');
	var menu = document.querySelector('#main_menu');
	var classMenu = 'menu-opened';
	var menuOpened = false;

	html.addEventListener('click', function(e){
		console.log(this);
		console.log(e.target);

		if (e.target === html && menuOpened) {
			closeMenu();
		}
	});

	btn.addEventListener('click', toggleMenu);

	function toggleMenu(e){
		if(menuOpened){
			closeMenu();
		} else {
			openMenu();
		}
	}

	function closeMenu(){
		menuOpened = false;
		html.classList.remove(classMenu);
		btn.blur();
		menu.setAttribute('aria-expended', false);
		btn.setAttribute('aria-expended', false);
	}

	function openMenu(){
		menuOpened = true;
		html.classList.add(classMenu);
		menu.setAttribute('aria-expended', true);
		btn.setAttribute('aria-expended', true);
	}

}())