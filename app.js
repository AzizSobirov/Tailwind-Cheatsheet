let subtitles = document.querySelectorAll(".subtitle");
let content = document.querySelectorAll(".content");

subtitles.forEach((el, idx) => {
  el.addEventListener("click", () => {
    content[idx].classList.toggle("active");
  });
});

function searchDocs(query) {
  subtitles.forEach((el) => {
    let h1 = el.querySelector("h1");
    if (h1.innerHTML.toLowerCase().includes(query.toLowerCase())) {
      el.style.display = "flex";
    } else {
      el.style.display = "none";
    }
  });
}

function expandAll() {
  subtitles.forEach((el, idx) => {
    content[idx].className = "content active";
  });
}

function collapseAll() {
  console.log("working");
  subtitles.forEach((el, idx) => {
    content[idx].className = "content";
  });
}
