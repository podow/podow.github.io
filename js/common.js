var sliderWrapper = document.querySelector('#outerWrapper'),
	slider = document.querySelector('#innerWrapper'),
	slides = document.querySelectorAll('.slide'),
	slidesNum = slides.length,
	prevBtn = document.getElementById('prev'),
	nextBtn = document.getElementById('next');

var now = 0,
	sliderOffsetWidth = [],
	sliderOffsetHeight = [];

for (var i = 0; i < slidesNum; i++) {
	slides[i].width = sliderWrapper.clientWidth;
	// slides[i].height = sliderWrapper.clientHeight;
	sliderOffsetWidth.push(-i * slides[i].width + 'px');
	// sliderOffsetHeight.push(-i * slides[i].height + 'px');
}

console.log(sliderOffsetWidth);
// console.log(sliderOffsetHeight);

document.addEventListener('keydown', function (event) {
	if (event.which == '37') {
		--now;
		if (now < 0) now = slidesNum - 1;
		slider.style.left = sliderOffsetWidth[now];
	} else if (event.which == '39') {
		++now;
		if (now > slidesNum - 1) now = 0;
		slider.style.left = sliderOffsetWidth[now];
	}
});

// nextBtn.addEventListener('click', function () {
// 	++now;
// 	if (now > slidesNum - 1) now = 0;
// 	slider.style.left = sliderOffsetWidth[now];
// });

// prevBtn.addEventListener('click', function () {
// 	--now;
// 	if (now < 0) now = slidesNum - 1;
// 	slider.style.left = sliderOffsetWidth[now];
// });