const btnNavEl = document.querySelector(".search-college");
const headerEl = document.querySelector(".search-js");
const headEl = document.querySelector("body");
btnNavEl.addEventListener("mouseover", function () {
  headerEl.classList.add("search-list");
});
btnNavEl.addEventListener("mouseout", function () {
  headerEl.classList.remove("search-list");
});
// headEl.addEventListener("click", function () {
//   headerEl.classList.remove("search-list");
// });
