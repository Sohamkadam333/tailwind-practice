const openBtn = document.getElementById('open_btn');
const closeBtn = document.getElementById('close_btn');
const mobile_nav_links = document.getElementById('mobile_nav_links_container');

openBtn.addEventListener('click', () => {
	console.log('open');

	closeBtn.classList.remove('hidden');
	mobile_nav_links.classList.remove('hidden');
	openBtn.classList.add('hidden');
});

closeBtn.addEventListener('click', () => {
	console.log('close');
	openBtn.classList.remove('hidden');
	mobile_nav_links.classList.add('hidden');
	closeBtn.classList.add('hidden');
});

mobile_nav_links.addEventListener('click', () => {
	console.log('container');
});
