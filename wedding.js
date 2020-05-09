let galleryImages = document.querySelectorAll(".gallery-img");
let getLatestOpenedImage;
let windowWidth = window.innerWidth;
console.log(galleryImages)

if(galleryImages) {
	galleryImages.forEach(function(image, index) {
		image.onclick = function () {
		    let getFullImgSrc = image.getAttribute("src");
		    let getImgSrcPos = getFullImgSrc.split("/");
		    let imgName = getImgSrcPos[1].replace(".jpg", "");

		    getLatestOpenedImage = index + 1;

		    let container = document.body;
		    let newImgWindow = document.createElement("div");
		    container.appendChild(newImgWindow);
		    newImgWindow.setAttribute("class", "img-window");
		    newImgWindow.setAttribute("onclick", "closeImg()");

		    let newImg = document.createElement("img");
		    newImgWindow.appendChild(newImg);
		    newImg.setAttribute("src", "upsized-images/" + imgName + ".jpg");
		    newImg.setAttribute("id", "current-img");


		    newImg.onload = function() {
		    	let imgWidth = this.width;
		    	let calcImgToEdgeNext = ((windowWidth - imgWidth) / 2) - 90;
		    	let calcImgToEdgePrev = ((windowWidth - imgWidth) / 2) - 80;

		    	let nextBtn = document.createElement("a");
		    	let nextBtnText = document.createTextNode("Next");
		    	nextBtn.appendChild(nextBtnText);
		    	container.appendChild(nextBtn);
		    	nextBtn.setAttribute("class", "next-btn");
		    	nextBtn.setAttribute("onclick", "changeImg(1)");
		    	nextBtn.style.cssText = "right: " + calcImgToEdgeNext + "px;";

		    	let prevBtn = document.createElement("a");
		    	let prevBtnText = document.createTextNode("Prev");
		    	prevBtn.appendChild(prevBtnText);
		    	container.appendChild(prevBtn);
		    	prevBtn.setAttribute("class", "prev-btn");
		    	prevBtn.setAttribute("onclick", "changeImg(0)");
		    	prevBtn.style.cssText = "left: " + calcImgToEdgePrev + "px;";

		    	window.addEventListener("keydown", checkKeyPress, false);
                function checkKeyPress(key) {
	                if (key.keyCode == "39") {
		                this.changeImg(1);
	                } else if (key.keyCode == "37") {
	                	this.changeImg(0);
	                } 
                }
		    }
		}
	})
}

function closeImg() {
	document.querySelector(".img-window").remove();
	document.querySelector(".next-btn").remove();
	document.querySelector(".prev-btn").remove();
}

function changeImg(changeDir) {
	document.querySelector("#current-img").remove();

	let getImgWindow = document.querySelector(".img-window")
	let newImg = document.createElement("img");
    getImgWindow.appendChild(newImg);

	let num;
	if (changeDir === 1) {
		num = getLatestOpenedImage + 1;
		if (num > galleryImages.length) {
			num = 1;
		}
	} else if (changeDir === 0) {
		num = getLatestOpenedImage - 1;
		if (num < 1) {
			num = galleryImages.length;
		}
	}

	let newNum;
		    if (num == 1) {
		    	newNum = 21;
		    } else if (num == 2) {
		    	newNum = 1;
		    } else if (num == 3) {
		    	newNum = 22;
		    } else if (num == 4) {
		    	newNum = 25;
		    } else if (num == 5) {
		    	newNum = 23;
		    } else if (num == 6) {
		    	newNum = 17;
		    } else if (num == 7) {
		    	newNum = 18;
		    } else if (num == 8) {
		    	newNum = 6;
		    } else if (num == 9) {
		    	newNum = 10;
		    } else if (num == 10) {
		    	newNum = 24;
		    } else if (num == 11) {
		    	newNum = 16;
		    } else if (num == 12) {
		    	newNum = 5;
		    } else if (num == 13) {
		    	newNum = 20;
		    } else if (num == 14) {
		    	newNum = 4;
		    } else if (num == 15) {
		    	newNum = 14;
		    } else if (num == 16) {
		    	newNum = 12;
		    } else if (num == 17) {
		    	newNum = 19;
		    } else if (num == 18) {
		    	newNum = 11;
		    } else if (num == 19) {
		    	newNum = 3;
		    } else if (num == 20) {
		    	newNum = 8;
		    } else if (num == 21) {
		    	newNum = 9;
		    } else if (num == 22) {
		    	newNum = 2;
		    } else if (num == 23) {
		    	newNum = 15;
		    } else if (num == 24) {
		    	newNum = 7;
		    } 


	newImg.setAttribute("src", "upsized-images/wedding" + newNum + ".jpg");
	newImg.setAttribute("id", "current-img");

	getLatestOpenedImage = num;

	newImg.onload = function() {
		    	let imgWidth = this.width;
		    	let calcImgToEdgeNext = ((windowWidth - imgWidth) / 2) - 90;
		    	let calcImgToEdgePrev = ((windowWidth - imgWidth) / 2) - 80;

		    	let nextBtn = document.querySelector(".next-btn");
		    	nextBtn.style.cssText = "right: " + calcImgToEdgeNext + "px;";
		    	let prevBtn = document.querySelector(".prev-btn");
		    	prevBtn.style.cssText = "left: " + calcImgToEdgePrev + "px;";
		    }
}