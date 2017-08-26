;(function(){
	'use strict';

	var btn = document.querySelector('.mainNavgation__hamburggerParties');
	var html = document.querySelector('html');
	var menuOpened = false;

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
		html.classList.remove('menu-opened');
	}

	function openMenu(){
		menuOpened = true;
		html.classList.add('menu-opened');
	}

}())