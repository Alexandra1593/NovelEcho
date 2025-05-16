document.addEventListener("DOMContentLoaded", function () {
    let items = document.querySelectorAll("#list li");
    let currentIndex = 0;

    items.forEach((item, index) => {
        item.addEventListener("click", function () {
            items[currentIndex].classList.remove("active");
            currentIndex = (currentIndex + 1) % items.length; 
            items[currentIndex].classList.add("active"); 
        });
    });
});