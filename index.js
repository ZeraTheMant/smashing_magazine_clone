const navBtn = {
	domElement: document.querySelector("#nav-btn"),
	timesIcon: document.querySelector("#nav-btn-times-icon"),
	clicked: false,
	toggleEvent: function() {
		if (navBtn.clicked) {
			navBtn.domElement.firstElementChild.textContent = "More";
			navBtn.timesIcon.classList.add("hidden");
		} else {
			navBtn.domElement.firstElementChild.textContent = "Less";
			navBtn.timesIcon.classList.remove("hidden");
		}
		
		navBtn.clicked = !navBtn.clicked;
	}
}

navBtn.domElement.addEventListener('click', navBtn.toggleEvent);
