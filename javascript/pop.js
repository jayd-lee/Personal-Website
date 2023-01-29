const open1 = document.getElementById('open');
const close1 = document.getElementById('close');
const modal = document.getElementById('modal_container');

open1.addEventListener('click', () => {
	modal.classList.add('show');
});

close1.addEventListener('click', () => {
	modal.classList.remove('show');
});


const open2 = document.getElementById('open2');
const close2 = document.getElementById('close2');
const about = document.getElementById('readme_container');

open2.addEventListener('click', () => {
	about.classList.add('show');
});

close2.addEventListener('click', () => {
	about.classList.remove('show');
});



const open3 = document.getElementById('open3');
const close3 = document.getElementById('close3');
const school = document.getElementById('school_container');

open3.addEventListener('click', () => {
	school.classList.add('show');
});

close3.addEventListener('click', () => {
	school.classList.remove('show');
});

const open4 = document.getElementById('open4');
const close4 = document.getElementById('close4');
const work = document.getElementById('work_container');

open4.addEventListener('click', () => {
	work.classList.add('show');
});

close4.addEventListener('click', () => {
	work.classList.remove('show');
});

const open5 = document.getElementById('open5');
const close5 = document.getElementById('close5');
const skills = document.getElementById('skills_container');

open5.addEventListener('click', () => {
	skills.classList.add('show');
});

close5.addEventListener('click', () => {
	skills.classList.remove('show');
});