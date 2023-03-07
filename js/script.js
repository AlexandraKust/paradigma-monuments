let requestPopup = document.querySelector('.popup-request');
let openRequestPopup = document.querySelector('.header__call-btn');
let mapPopup = document.querySelector('.popup-map');
let openMapPopup = document.querySelector('.header__map-btn');

// открытие формы звонка
openRequestPopup.addEventListener('click', function () {
	requestPopup.classList.add('active');
	document.body.classList.add('lock');
});

// открытие popup-карты
openMapPopup.addEventListener('click', function () {
	mapPopup.classList.add('active');
	document.body.classList.add('lock');
});

// закрытие popup
let popup = document.querySelectorAll('.popup');
popup.forEach(function (value) {
	let close = value.querySelector(".popup__close");
	let bg = value.querySelector(".popup__bg");

	close.addEventListener('click', function () {
		value.classList.remove('active');
		document.body.classList.remove('lock');
	})
	bg.addEventListener('click', function () {
		value.classList.remove('active');
		document.body.classList.remove('lock');
	})
})

// маска на телефон
let phone = document.querySelectorAll("input[type='tel']");
var im = new Inputmask("+ 7 (9 9 9) 9 9 9 - 9 9 - 9 9");
im.mask(phone);

// отправка формы
let btnPopup = document.querySelector('.popup-request__btn');
let titlePopup = document.querySelector('.popup-request__title');
let formPopup = document.querySelector('.popup-request__form');
let descrPopup = document.querySelector('.popup-request__descr');

btnPopup.addEventListener('click', function () {
	if (!btnPopup.classList.contains('disabled')) {
		titlePopup.classList.add('active');
		titlePopup.innerHTML = "Спасибо!<br> Ваша заявка отправлена!";
		formPopup.classList.add('d-none');
		descrPopup.classList.add('d-none');
	}
})

// phone
let phoneBtn = document.querySelector('.header__call-mobile');
let phoneBody = document.querySelector('.header__call');
phoneBtn.addEventListener('click', function () {
	if (burger.classList.contains('active')) {
		burger.classList.remove('active');
		nav.classList.remove('active');
		document.body.classList.remove('lock');
		header.classList.remove('active');
	}

	phoneBtn.classList.toggle('active');
	phoneBody.classList.toggle('active');
	header.classList.toggle('active');
})

// burger
let burger = document.querySelector('.header__burger');
let nav = document.querySelector('.nav');
let header = document.querySelector('.header');

burger.addEventListener('click', function () {
	if (phoneBtn.classList.contains('active')) {
		phoneBtn.classList.remove('active');
		phoneBody.classList.remove('active');
		header.classList.remove('active');
	}

	burger.classList.toggle('active');
	nav.classList.toggle('active');
	header.classList.toggle('active');
	document.body.classList.toggle('lock');
})

// закрытие меню если размер окна стал больше мобилки
window.addEventListener('resize', function () {
	if (window.innerWidth > 767.98 && burger.classList.contains('active')) {
		burger.classList.remove('active');
		nav.classList.remove('active');
		header.classList.remove('active');
		document.body.classList.remove("lock");

	}
});
window.addEventListener('resize', function () {
	if (window.innerWidth > 767.98 && phoneBtn.classList.contains('active')) {
		phoneBtn.classList.remove('active');
		phoneBtn.classList.remove('active');
		header.classList.remove('active');
	}
});


// прилипание шапки
window.addEventListener('scroll', function () {
	burger.classList.add('fixed');
	header.classList.add('fixed');

	if (this.window.pageYOffset < 10) {
		burger.classList.remove('fixed');
		header.classList.remove('fixed');
	}
});

let improvenentItem = document.querySelectorAll('.improvement__item');

improvenentItem.forEach(function (item) {
	let improvementBtn = item.querySelector('.improvement__btn');
	improvementBtn.addEventListener('click', function () {
		improvementBtn.classList.toggle('active');
		item.classList.toggle('active');
	})
})

// табы в разделе каталога
document.querySelectorAll('.catalog__tab').forEach(function (tabsBtn) {
	tabsBtn.addEventListener('click', function (e) {
		const path = e.currentTarget.dataset.path;
		document.querySelectorAll('.catalog__tab').forEach(function (btn) {
			btn.classList.remove('active')
		});
		e.currentTarget.classList.add('active');
		document.querySelectorAll('.catalog__list').forEach(function (tabsBtn) {
			tabsBtn.classList.remove('active')
		});
		document.querySelector(`[data-target="${path}"]`).classList.add('active');
	});
});

// показать еще
let btnAdd = document.querySelector('.catalog__add');
let catalogItem = document.querySelectorAll('.catalog__item');
btnAdd.addEventListener('click', function () {
	catalogItem.forEach(function (item) {
		item.classList.add('visible');
	})
	btnAdd.closest('.catalog__btn').classList.add('hidden');
})

// select
customSelect(document.querySelectorAll('select'));

document.getElementById('select-catalog').addEventListener('change', function () {
	document.querySelectorAll('.catalog__list').forEach((n, i) => {
		n.classList.toggle('active', i === this.selectedIndex);
	});
});

// select с соцсетями в форме заказать каталог
let selectSocial = document.getElementById('select-social');
let selectImg = document.querySelector('.select-social__img');
selectSocial.addEventListener('click', function () {
	selectImg.classList.toggle('active');
})
selectSocial.addEventListener('change', function () {
	let socialItem = selectImg.querySelectorAll('.social__item');
	socialItem.forEach((item) => {
		item.classList.remove('active');
	})
	if (selectSocial.value == "whats app") {
		selectImg.querySelector('.social__item-whatsapp').classList.add('active');
	}
	if (selectSocial.value == "telegram") {
		selectImg.querySelector('.social__item-telegram').classList.add('active');
	}
});

// checkbox 
let checkbox = document.querySelector('.agree__checkbox');
let mainBtn = checkbox.closest('form').querySelector('.main-btn');
checkbox.classList.add('check');

checkbox.addEventListener('click', function () {
	checkbox.classList.toggle('check');
	mainBtn.classList.toggle('disabled');
})


// слайдер в блоке работа
window.addEventListener('resize', function () {
	if (window.innerWidth > 767.98) {
		const workSwiper = new Swiper('.work__swiper', {
			loop: false,
			speed: 600,
			centeredSlides: false,
			touchRatio: 1,
			slidesPerView: "auto",

			pagination: {
				el: '.work__pagination',
			},

			navigation: {
				nextEl: '.work__btn-next',
				prevEl: '.work__btn-prev',
			},
		});
	}
});

