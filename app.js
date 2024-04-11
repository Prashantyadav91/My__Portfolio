const bar = document.querySelector(".lines");
const cross = document.querySelector(".cross");
const slide = document.querySelector(".sidebar-content");
bar.addEventListener("click", ()=>{
    bar.style.display = "none";
    slide.style.display = "block";
    cross.style.display = "block";
});

document.addEventListener("click", function(event) {
    const clickedElement = event.target;
    // Check if the clicked element is not the search box or the button
    if (clickedElement === cross) {
    cross.style.display = "none";
    bar.style.display = "block";
    slide.style.display  = "none";
}
});


var typed = new Typed('#element', {
    strings: ['Web Designer.','Web Developer.'],
    typeSpeed: 50,
  });