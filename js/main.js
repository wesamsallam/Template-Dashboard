let sliderPost = Array.from(document.querySelectorAll(".ulContainer .post"));
slidesCount = sliderPost.length;
currentSlide = 5;
let nextButton = document.getElementById("next");
let prevButton = document.getElementById("prev");
let sliderNumberElement = document.getElementById("slid-number");
//Click on Button
nextButton.onclick = nextpost;
prevButton.onclick = prevpost;
function nextpost() {
    if (currentSlide == sliderPost.length) {
    } else {
        currentSlide++;
        theChecker();
    }
}
function prevpost() {
    if (currentSlide == 1) {
    } else {
        currentSlide--;
        theChecker();
    }
};
// Creat Ul bullets
let paginationElement = document.createElement("ul");
paginationElement.setAttribute("id", "paginationUl");
//create Bullets
for (let i = 1; i <= slidesCount; i++) {
    let paginationItem = document.createElement("li");
    paginationItem.appendChild(document.createTextNode(i));
    paginationItem.setAttribute("data-index", i);
    paginationElement.appendChild(paginationItem);
}
let indicators = document.getElementById("indicators");
indicators.appendChild(paginationElement);
//Get the New ul Array
let paginationElementArray = Array.from(document.querySelectorAll("#paginationUl li"));
//Bullets Click
for (let i = 0; i < paginationElementArray.length; i++) {
    paginationElementArray[i].onclick = function () {
        currentSlide = parseInt(this.getAttribute("data-index"));
        theChecker();
    };
};
//Create Functions
theChecker();
function theChecker() {
    removeAllActive();
    sliderNumberElement.textContent = `Project NUM: ` + currentSlide + `of: ` + slidesCount;
    sliderPost[currentSlide - 1].classList.add("active");
    paginationElementArray[currentSlide - 1].classList.add("active");
    if (currentSlide == 1) {
        prevButton.classList.add("disabled");
    } else {
        prevButton.classList.remove("disabled");
    }
    if (currentSlide == slidesCount) {
        nextButton.classList.add("disabled");
    } else {
        nextButton.classList.remove("disabled");
    }
}
function removeAllActive() {
    sliderPost.forEach((post) => {
        post.classList.remove("active");
    })
    paginationElementArray.forEach((li) => {
        li.classList.remove("active");
    })
};
//set date
let dateElement1 = document.getElementById("date");
let dateElement = document.querySelectorAll(".date");
const date = new Date();
dateElement1.innerHTML = date.toLocaleTimeString();
dateElement.forEach(function (ele) {
    ele.innerHTML = date.toLocaleDateString();
})
document.getAnimations
