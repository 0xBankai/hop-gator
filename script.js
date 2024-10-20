document.addEventListener("DOMContentLoaded", function () {
	const gator = document.getElementById("gator");
	const images = ["run1.png", "run2.png", "run3.png"];
	let currentImageIndex = 0;

	function resizeGator() {
		const screenWidth = window.innerWidth;
		let newSize = 100;

		if (screenWidth <= 1200) {
			newSize = 80;
		}
		if (screenWidth <= 800) {
			newSize = 60;
		}
		if (screenWidth <= 500) {
			newSize = 40;
		}

		gator.style.width = `${newSize}px`;
	}

	window.addEventListener("resize", resizeGator);
	resizeGator();

	gator.addEventListener("mouseover", function () {
		changeGatorImage();

		const container = gator.parentElement;
		const containerWidth = container.offsetWidth;
		const containerHeight = container.offsetHeight;
		const gatorWidth = gator.offsetWidth;
		const gatorHeight = gator.offsetHeight;

		const randomX = Math.max(
			0,
			Math.floor(Math.random() * (containerWidth - gatorWidth))
		);
		const randomY = Math.max(
			0,
			Math.floor(Math.random() * (containerHeight - gatorHeight))
		);

		gator.style.left = `${randomX}px`;
		gator.style.top = `${randomY}px`;
	});

	gator.addEventListener("click", changeGatorImage);

	function changeGatorImage() {
		currentImageIndex = (currentImageIndex + 1) % images.length;
		gator.src = images[currentImageIndex];
	}
});
