window.addEventListener("DOMContentLoaded", () => {
    const tx = document.getElementsByTagName("textarea");
    for (let i = 0; i < tx.length; i++) {
    //   tx[i].setAttribute("style", "height:" + (tx[i].scrollHeight) + "px;overflow-y:hidden;");
      tx[i].addEventListener("input", OnInput, false);
    }
    
    function OnInput() {
      this.style.height = 0;
      let h1 = this.scrollHeight;
      let h2 = window.screen.height * 0.60;
      if (h2 < h1) {
        this.style.height = (h2) + "px";
      } else {
        this.style.height = (h1) + "px";
      }
    }


    function outputsize() {
        let textarea =  document.querySelector("textarea");
        let h1 = textarea.clientHeight
        let h2 = window.screen.height * 0.60;
        if (h2 < h1) {
            textarea.style.height = (h2) + "px";
          } else {
            textarea.style.height = (h1) + "px";
          }
       }
       outputsize()
       
       new MutationObserver(outputsize).observe(textarea, {
        attributes: true, attributeFilter: [ "style" ]
       })
});
