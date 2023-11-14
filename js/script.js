// // window.addEventListener("DOMContentLoaded", () => {
// //   const tx = document.getElementsByTagName("textarea");
// //   for (let i = 0; i < tx.length; i++) {
// //     //   tx[i].setAttribute("style", "height:" + (tx[i].scrollHeight) + "px;overflow-y:hidden;");
// //     tx[i].addEventListener("input", OnInput, false);
// //   }

// //   function OnInput() {
// //     this.style.height = 0;
// //     let h1 = this.scrollHeight;
// //     let h2 = window.screen.height * 0.60;
// //     if (h2 < h1) {
// //       this.style.height = (h2) + "px";
// //     } else {
// //       this.style.height = (h1) + "px";
// //     }
// //   }


// //   function outputsize() {
// //     let textarea = document.querySelector("textarea");
// //     let h1 = textarea.clientHeight
// //     let h2 = window.screen.height * 0.60;
// //     if (h2 < h1) {
// //       textarea.style.height = (h2) + "px";
// //     } else {
// //       textarea.style.height = (h1) + "px";
// //     }
// //   }
// //   outputsize()

// //   new MutationObserver(outputsize).observe(textarea, {
// //     attributes: true, attributeFilter: ["style"]
// //   })
// // });


// // var dateClass = '.datepicker';
// // $(document).ready(function () {
// //   var oCSS = document.createElement('link');
// //   oCSS.type = 'text/css'; oCSS.rel = 'stylesheet';
// //   oCSS.href = '//ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/themes/base/jquery-ui.css';
// //   oCSS.onload = function () {
// //     var oJS = document.createElement('script');
// //     oJS.type = 'text/javascript';
// //     oJS.src = '//ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js';
// //     oJS.onload = function () {
// //       $(dateClass).datepicker();
// //     }
// //     document.body.appendChild(oJS);
// //   }
// //   document.body.appendChild(oCSS);
// // });

// flatpickr.localize(flatpickr.l10ns.ru);

// $(() => {
//   $(".timepicker").flatpickr({
//     enableTime: true,
//     noCalendar: true,
//     dateFormat: "H:i",
//     time_24hr: true,
//     minuteIncrement: 1,
//     // disableMobile: true

//   });

//   $(".datepicker").flatpickr({
//     // enableTime: true,
//     dateFormat: "Y-m-d",
//     // time_24hr: true,
//     // mode: "multiple",
//     // inline: true,
//     minDate: "today",
//     disableMobile: true,
//     allowInput: true,
//     monthSelectorType: "static",
//     appendTo: $("body")[0].value
//     // parseDate: true
//   })
// });