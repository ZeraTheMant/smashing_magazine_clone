const navBtn = {
	domElement: document.querySelector("#nav-btn"),
	timesIcon: document.querySelector("#nav-btn-times-icon"),
	mobileOptions: document.querySelector("#mobile-options"),
	moreCat: document.querySelector("#more-cat"),
	lessCat: document.querySelector("#less-cat"),
	clicked: false,
	toggleEvent: function() {
		if (navBtn.clicked) {
			navBtn.domElement.firstElementChild.textContent = "More";
			navBtn.timesIcon.classList.add("hidden");
			navBtn.mobileOptions.classList.add("hidden");
			
			navBtn.lessCat.classList.add("hidden");
			navBtn.moreCat.classList.remove("hidden");
		} else {
			navBtn.domElement.firstElementChild.textContent = "Less";
			navBtn.timesIcon.classList.remove("hidden");
			navBtn.mobileOptions.classList.remove("hidden");
			
			navBtn.lessCat.classList.remove("hidden");
			navBtn.moreCat.classList.add("hidden");
		}
		
		navBtn.clicked = !navBtn.clicked;
	}
}

navBtn.domElement.addEventListener('click', navBtn.toggleEvent);
