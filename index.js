const navBtn = {
	domElement: document.querySelector("#nav-btn"),
	timesIcon: document.querySelector("#nav-btn-times-icon"),
	mobileOptions: document.querySelector("#mobile-options"),
	desktopOptions: document.querySelector("#desktop-options"),
	moreCat: document.querySelector("#more-cat"),
	lessCat: document.querySelector("#less-cat"),
	clicked: false,
	screenResizeSetup: function () {
		if (navBtn.clicked) {
			if (window.innerWidth > 779) {
				navBtn.desktopOptions.classList.remove("hidden");
				navBtn.mobileOptions.classList.add("hidden");
			} else {
				navBtn.mobileOptions.classList.remove("hidden");
				navBtn.desktopOptions.classList.add("hidden");
			}		
		}			
	},
	toggleEvent: function() {
		if (navBtn.clicked) {
			navBtn.domElement.firstElementChild.textContent = "More";
			navBtn.timesIcon.classList.add("hidden");
			
			if (window.innerWidth > 779) {
				navBtn.desktopOptions.classList.add("hidden");
			} else {
				navBtn.mobileOptions.classList.add("hidden");
			}		
			
			navBtn.lessCat.classList.add("hidden");
			navBtn.moreCat.classList.remove("hidden");
		} else {
			navBtn.domElement.firstElementChild.textContent = "Less";
			navBtn.timesIcon.classList.remove("hidden");
			
			if (window.innerWidth > 779) {
				navBtn.desktopOptions.classList.remove("hidden");
			} else {
				navBtn.mobileOptions.classList.remove("hidden");
			}			
			
			navBtn.lessCat.classList.remove("hidden");
			navBtn.moreCat.classList.add("hidden");
		}
		
		navBtn.clicked = !navBtn.clicked;
	}
}


navBtn.domElement.addEventListener('click', navBtn.toggleEvent);
window.addEventListener('resize', navBtn.screenResizeSetup);

const promoTextBox = document.querySelector("#promo-text-box");
promoTextBox.addEventListener("keyup", function() {
	if (promoTextBox.value.trim() == "") {
		promoTextBox.style.fontStyle = "italic";		
	} else {
		promoTextBox.style.fontStyle = "initial";	
	}
});

