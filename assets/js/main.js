const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
var overlay = $(".overlay");

/*Header */
var closeBtnHeader = $("header .close-btn");
var headerTabs = $$("header .tab");
var headerPanes = $$("header .pane");

function resetHeader() {
  headerTabs.forEach((t, i) => {
    t.style.opacity = 0.6;
    headerPanes[i].style.transform = "translateY(-200px)";
    headerPanes[i].style.opacity = 0;
    headerPanes[i].style.visibility = "hidden";
  });
  overlay.style.display = "none";
  $(".header__wrapper").style.height = 0;
  closeBtnHeader.style.display = "none";
  $("body").classList.remove("stop-scrolling");
}

headerTabs.forEach((tab, index) => {
  tab.onclick = () => {
    resetHeader();

    overlay.style.display = "block";
    tab.style.opacity = 1;
    headerPanes[index].style.transform = "translateY(0)";
    headerPanes[index].style.opacity = 1;
    headerPanes[index].style.visibility = "visible";
    $(".header__wrapper").style.height = "400px";
    closeBtnHeader.style.display = "block";
    $("body").classList.add("stop-scrolling");
  };
});

closeBtnHeader.onclick = () => {
  resetHeader();
};
