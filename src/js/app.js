/**
 * !(i)
 * Код попадает в итоговый файл, только когда вызвана функция, например FLSFunctions.spollers();
 * Или когда импортирован весь файл, например import "files/script.js";
 * Неиспользуемый код в итоговый файл не попадает.

 * Если мы хотим добавить модуль следует его раскомментировать
 */
// import MousePRLX from './libs/parallaxMouse'
// import AOS from 'aos'
// import Swiper, { Navigation, Pagination } from 'swiper';

import BaseHelpers from './helpers/BaseHelpers.js';
import PopupManager from './modules/PopupManager';
import BurgerMenu from './modules/BurgerMenu';
import Tabs from './modules/Tabs';
import Accordion from './modules/Accordion.js';


BaseHelpers.checkWebpSupport();

BaseHelpers.addTouchClass();

BaseHelpers.addLoadedClass();

BaseHelpers.headerFixed();

/**
 * Открытие/закрытие модальных окон
 * Чтобы модальное окно открывалось и закрывалось
 * На окно повешай атрибут data-popup="<название окна>"
 * На кнопку, которая вызывает окно повешай атрибут data-type="<название окна>"

 * На обертку(.popup) окна добавь атрибут '[data-close-overlay]'
 * На кнопку для закрытия окна добавь класс '.button-close'
 * */
new PopupManager();

/**
 *  Модуль для работы с меню (Бургер)
 * */
new BurgerMenu().init();



try {

	const isMobile = window.matchMedia("(max-width: 767px)").matches;
	const catalogList = document.querySelector('.catalog__list');
	const catalogItems = catalogList.children;
	const showMoreBtn = document.createElement('button');
	showMoreBtn.classList.add('catalog__show-more');
	showMoreBtn.classList.add('btn');
	showMoreBtn.textContent = 'Показать еще';

	if (isMobile) {
		for (let i = 0; i < catalogItems.length; i++) {
			if (i > 2) {
				catalogItems[i].style.display = 'none';
			}
		}
		catalogList.appendChild(showMoreBtn);
		showMoreBtn.addEventListener('click', () => {
			for (let i = 0; i < catalogItems.length; i++) {
				catalogItems[i].style.display = 'flex';
				catalogItems[i].dataset.aos = 'fade-up';
			}
			showMoreBtn.remove();
		});
	}
}
catch (err) { }

let swiper = new Swiper(".hero__slider", {
	autoplay: {
		delay: 2500,
	},
	loop: true,
	pagination: {
		el: ".hero__pagination",
		clickable: true,
	},
});



new Tabs('tabs-example', {
	onChange: (data) => {
		console.log(data);
	},
});

new Accordion('.accordion', {
	shouldOpenAll: false, // true
	defaultOpen: [], // [0,1]
	collapsedClass: 'open',
});