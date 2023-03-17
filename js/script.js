window.addEventListener("load", (event) => {
	let requestPopup = document.querySelector('.popup-request');
	let openRequestPopup = document.querySelectorAll('.callback-popup');
	let mapPopup = document.querySelector('.popup-map');
	let openMapPopup = document.querySelector('.header__map-btn');
	let confPopup = document.querySelector('.popup-conf');
	let openConfPopup = document.querySelectorAll('.conf');

	// открытие формы звонка
	openRequestPopup.forEach(function (item) {
		item.addEventListener('click', function () {
			requestPopup.classList.add('active');
			document.body.classList.add('lock');
		});
	})

	// открытие popup-карты
	openMapPopup.addEventListener('click', function () {
		mapPopup.classList.add('active');
		document.body.classList.add('lock');
	});

	// открытие popup-политики конф
	openConfPopup.forEach(function (item) {
		item.addEventListener('click', function () {
			confPopup.classList.add('active');
			document.body.classList.add('lock');
		});
	})

	// закрытие popup
	let popups = document.querySelectorAll('.popup');
	popups.forEach(function (popup) {
		let close = popup.querySelector(".popup__close");
		let bg = popup.querySelector(".popup__bg");

		close.addEventListener('click', function () {
			popup.classList.remove('active');
			document.body.classList.remove('lock');
		})
		bg.addEventListener('click', function () {
			popup.classList.remove('active');
			document.body.classList.remove('lock');
		})

		let title = popup.querySelector('.popup__title');
		let descr = popup.querySelector('.popup__descr');
		let form = popup.querySelector('.popup__form');
		let btn = popup.querySelector('.popup__btn');
	})

});

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

	// закрытие меню при нажатии на ссылку
	let links = nav.querySelectorAll('.nav__link');
	links.forEach(function (link) {
		link.addEventListener('click', function () {
			burger.classList.remove('active');
			nav.classList.remove('active');
			header.classList.remove('active');
			document.body.classList.remove('lock');
		})
	})

	let download = header.querySelector('.header__catalog.mobile');
	let downloadLink = download.querySelector('.header__catalog-link');
	downloadLink.addEventListener('click', function () {
		burger.classList.remove('active');
		nav.classList.remove('active');
		header.classList.remove('active');
		document.body.classList.remove('lock');
	})
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
	let headerRowHeight = header.querySelector('.header__row').offsetHeight;

	if (window.innerWidth > 767.98 && window.pageYOffset > headerRowHeight) {
		nav.classList.add('fixed');
	} else {
		nav.classList.remove('fixed');
	}

	if (window.innerWidth < 768 && window.pageYOffset > 10) {
		header.classList.add('fixed');
	} else {
		header.classList.remove('fixed');
	}
});

// кнопка-стрелка внутри карточки
let arrBtn = document.querySelectorAll('.arrow-btn');
arrBtn.forEach(function (arrow) {
	arrow.addEventListener('click', function () {
		arrow.classList.toggle('active');
		arrow.closest('li').classList.toggle('active');
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
		document.querySelectorAll('.catalog__content-item').forEach(function (tabsBtn) {
			tabsBtn.classList.remove('active')
		});
		document.querySelector(`[data-target="${path}"]`).classList.add('active');
	});
});

// показать еще
let btnMore = document.querySelectorAll('.btn-more');
btnMore.forEach(function (item) {
	let btnParent = item.parentNode.querySelector('ul');
	let listItem = btnParent.querySelectorAll('li');

	item.addEventListener('click', function () {
		listItem.forEach(function (li) {
			li.classList.add('visible');
		})
		item.classList.add('hidden');
	})
});

// select
let select = document.querySelectorAll('select');
select.forEach(function (item) {
	if (item) {
		customSelect(item);
		const cstSel = item.customSelect
	}
})

// select catalog
let selectCatalog = document.getElementById('select-catalog');
if (selectCatalog) {
	selectCatalog.addEventListener('change', function () {
		document.querySelectorAll('.catalog__content-item').forEach((n, i) => {
			n.classList.toggle('active', i === this.selectedIndex);
		});
	});
}

// select с соцсетями
let selectSocial = document.querySelectorAll('.select-social');
selectSocial.forEach(function (selectWrap) {
	let select = selectWrap.querySelector('select');
	let selectImg = selectWrap.querySelector('.select-social__img');

	select.addEventListener('click', function () {
		selectImg.classList.toggle('active');
	})

	select.addEventListener('change', function () {
		let socialItem = selectImg.querySelectorAll('.social__item');
		socialItem.forEach((item) => {
			item.classList.remove('active');
		})
		if (select.value == "whats app") {
			selectImg.querySelector('.social__item-whatsapp').classList.add('active');
		}
		if (select.value == "telegram") {
			selectImg.querySelector('.social__item-telegram').classList.add('active');
		}
	});
})

// checkbox 
let checkbox = document.querySelectorAll('.agree__checkbox');
checkbox.forEach(function (item) {
	let mainBtn = item.closest('form').querySelector('.main-btn');
	item.classList.add('check');

	item.addEventListener('click', function () {
		item.classList.toggle('check');
		if (!item.classList.contains('check')) {
			mainBtn.setAttribute('disabled', 'disabled');
		} else {
			mainBtn.removeAttribute('disabled', 'disabled');
		}
		mainBtn.classList.toggle('disabled');
	})
})

// слайдеры
let slidersAll = document.querySelectorAll('.swiper');
slidersAll.forEach(function (item) {
	let swiper = new Swiper(item, {
		loop: false,
		speed: 600,
		centeredSlides: false,
		touchRatio: 1,
		slidesPerView: 'auto',
		watchSlidesProgress: true,

		navigation: {
			nextEl: item.parentNode.querySelector('.slider-btn-next'),
			prevEl: item.parentNode.querySelector('.slider-btn-prev'),
		},

		pagination: {
			clickable: true,
			el: item.closest('section').querySelector('.main-pagination'),
		},
	});
})


// кнопка наверх
let heightOfHero = document.querySelector('.hero').offsetHeight;
let btnUp = document.querySelector('.btn-top');
window.addEventListener('scroll', function () {
	if (window.pageYOffset > heightOfHero - 400) {
		btnUp.classList.add('active')
	} else {
		btnUp.classList.remove('active')
	}
});
if (btnUp) {
	btnUp.addEventListener('click', function () {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	})
}


// sidebar и плашка с видео
let video = document.querySelector('.video');
if (video) {
	video.querySelector('.video__close').addEventListener('click', function () {
		video.classList.add('close');
	})
}

let sidebar = document.querySelector('.sidebar');
let sidebarClose = sidebar.querySelector('.sidebar__close');
let sidebarBody = sidebar.querySelector('.sidebar__body');
sidebarClose.addEventListener('click', function () {
	sidebarBody.classList.toggle('close');
	sidebarClose.classList.toggle('active');
})