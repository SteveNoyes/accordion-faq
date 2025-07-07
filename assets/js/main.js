const acc = document.getElementsByClassName("accordion");

  for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      // Get the icon inside the clicked accordion
      const icon = this.querySelector("img");
      const panel = this.nextElementSibling;

      const isOpen = panel.style.display === "block";

      // Close all panels and reset icons
      for (let j = 0; j < acc.length; j++) {
        const otherPanel = acc[j].nextElementSibling;
        const otherIcon = acc[j].querySelector("img");
        otherPanel.style.display = "none";
        otherIcon.src = "./assets/images/icon-plus.svg";
        acc[j].classList.remove("active");
      }

      // Toggle this panel
      if (!isOpen) {
        panel.style.display = "block";
        icon.src = "./assets/images/icon-minus.svg";
        this.classList.add("active");
      }
    });
  }