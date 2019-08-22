var coll = document.getElementsByClassName("section-title");
var i;
var clickall = document.getElementById('clickall');
var displayall = false;

function showSection(section) {
	section.classList.add('active');
	section.nextElementSibling.style.display = "block";
};

function hideSection(section) {
	section.classList.remove('active');
	section.nextElementSibling.style.display = "none";
};

function checkSectionActive(section) {
	return section.classList.contains('active') 
};
function checkSectionInactive(section) {
	return !(section.classList.contains('active'))
};


for (i = 0; i < coll.length; i++) {
	coll[i].addEventListener("click", function() {
		var content = this.nextElementSibling;
		if (content.style.display === "block") {
			hideSection(this);
		} else {
			showSection(this);
		};

		if (Array.from(coll).every(checkSectionActive)) {
			displayall = true;
			clickall.classList.add('active')
		}; 
		if (Array.from(coll).every(checkSectionInactive)) {
			displayall = false;
			clickall.classList.remove('active')
		};
	});
} 

clickall.addEventListener("click", function() {
	console.log(displayall)
	displayall = !(displayall);
	if (displayall) {
		this.classList.add("active");
	} else {
		this.classList.remove("active");
	}
	for (i = 0; i < coll.length; i++) {
		if (displayall) {
			showSection(coll[i]);
		} else {
			hideSection(coll[i]);
		}
	};
});