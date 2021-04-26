window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

function loadData() {
  return new Promise((resolve, reject) => {
    loadData()
  		.then(() => {
    	let preloaderEl = document.getElementById('preloader');
    	preloaderEl.classList.add('preloaderVisible');
    	preloaderEl.classList.remove('preloader');
  	});
    setTimeout(resolve, 4000);
  })
}

loadData()
  .then(() => {
    let preloaderEl = document.getElementById('preloader');
    preloaderEl.classList.add('preloaderVisible');
    preloaderEl.classList.remove('preloader');
  });

window.addEventListener('scroll', function() {
	var burger = document.getElementById('burger');
	var button = document.getElementById('buttonUp');
	burger.classList.toggle('burgerActive', window.scrollY > 200);
	button.classList.toggle('buttonUpWorks', window.scrollY > 500);
})

document.getElementById('burger').onclick = function() {
	document.getElementById('nav-menu').classList.toggle('nav-menuActive')
	document.getElementById('nav-menus').classList.toggle('nav-menusActive')
}

document.getElementById('closeMenu').onclick = function() {
	document.getElementById('nav-menu').classList.toggle('nav-menuActive')
	document.getElementById('nav-menus').classList.toggle('nav-menusActive')
}