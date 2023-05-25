const boldBtn = document.getElementById("bold");
const italicBtn = document.getElementById("italic"); 
const underlineBtn = document.getElementById("underline");
const strikeBtn = document.getElementById("strike");
const  caseBtn = document.getElementById("case");
const rightBtn = document.getElementById("right");
const leftBtn = document.getElementById("left");
const centerBtn = document.getElementById("center");
const justifyBtn = document.getElementById("justify");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
let textArea = document.getElementById("textInputArea");

let lists = document.querySelectorAll('li');
Array.from(lists).forEach(function (listItem) {
    listItem.addEventListener("click" , function () {
        listItem.classList.toggle("active");
    })
});

boldBtn.addEventListener("click" , function() {
    textArea.classList.toggle("bold")
});
italicBtn.addEventListener("click" , function() {
    textArea.classList.toggle("italic")
});
underlineBtn.addEventListener("click" , function() {
    textArea.classList.toggle("underline")
});
caseBtn.addEventListener("click" , function() {
    textArea.classList.toggle("case")
});
strikeBtn.addEventListener("click" , function() {
    textArea.classList.toggle("strike")
});
centerBtn.addEventListener("click" , function() {
    textArea.classList.toggle("alignCenter")
});
rightBtn.addEventListener("click" , function() {
    textArea.classList.toggle("alignRight")
});
leftBtn.addEventListener("click" , function() {
    textArea.classList.toggle("alignLeft")
});
justifyBtn.addEventListener("click" , function() {
    textArea.classList.toggle("alignJustify")
});

let size = 24;

increaseBtn.addEventListener("click" , function () {
    let textAreaValue = textArea.value;

    size += 1;

    textArea.style.fontSize = size + "px";
});

decreaseBtn.addEventListener("click" , function () {
    let textAreaValue = textArea.value;

    size = size - 1;

    textArea.style.fontSize = size + "px"
})


