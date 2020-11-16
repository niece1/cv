// Modal images
var modal = document.getElementById("portfolioModal");
var span = document.getElementById("close");
span.onclick = function() {
	modal.style.display = "none";
};
var images = document.getElementsByClassName("modal_image");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
var i;
for (i = 0; i < images.length; i++) {
	images[i].onclick = function() {
		modal.style.display = "block";
		modalImg.src = this.src;
		modalImg.alt = this.alt;
		captionText.innerHTML = this.alt;
	};
}
