## Table of contents

- [Overview](#overview)
  - [User story](#user-story)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Highlights](#highlights)
- [Author](#author)

## Overview

### User story

Users should be able to:

- Hide/Show the answer to a question when the question is clicked
- Navigate the questions and hide/show answers using keyboard navigation alone
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [Github Repository](https://github.com/SteveNoyes/accordion-faq)
- Live Site URL: [Github Pages](https://stevenoyes.github.io/accordion-faq/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- JavaScript

### Highlights

```html
  <img class="desktop-header-image" src="./assets/images/background-pattern-desktop.svg" alt="Abstract Desktop Background">
  <img class="mobile-header-image" src="./assets/images/background-pattern-mobile.svg" alt="Abstract Desktop Background">
```
```css
  @media screen and (min-width: 670px) {

    .desktop-display {
      display: none !important;
    }

    .mobile-header-image {
      display: none !important;
    }

    .desktop-header-image {
      display: block !important;
      position: absolute !important;
      top: 0 !important;
      width: 100% !important;
    }

  }
```
```js
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
```

## Author

- Website - [Steven Noyes](https://www.stevenmnoyes.com)