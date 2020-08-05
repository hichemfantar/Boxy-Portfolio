// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementsByTagName("header")[0].style.padding = "10px 0px";
  } else {
    document.getElementsByTagName("header")[0].style.padding = "20px 0px";
  }
}
// function scrollFunction() {
//   if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
//     document.getElementsByTagName("header")[0].className = "vert-header";
//   } else {
//     document.getElementsByTagName("header")[0].className = "hor-header";
//   }
// }
