(function () {
  const darkmode = localStorage.getItem("dark-theme");

  if (darkmode === "active") {
    document.documentElement.classList.add("dark-theme");
  }
})();

document.addEventListener("DOMContentLoaded", () => {
  const navMenu = document.getElementById("nav-menu"),
    navToggle = document.getElementById("nav-toggle"),
    navClose = document.getElementById("nav-close"),
    navLink = document.querySelectorAll(".nav_link"),
    section = window.location.pathname,
    copyEmailBtn = document.getElementById("copyEmailBtn"),
   confirmationMessage = document.getElementById("confirmationMessage");

  if (navToggle) {
    navToggle.addEventListener("click", () => {
      navMenu.classList.add("show-menu");
    });
  }

  if (navClose) {
    navClose.addEventListener("click", () => {
      navMenu.classList.remove("show-menu");
    });
  }

  function linkActions() {
    navMenu.classList.remove("show-menu");
  }

  navLink.forEach((n) => n.addEventListener("click", linkActions));

  navLink.forEach((link) => {
    if (link.href.includes(`${section}`)) {
      link.classList.add("pLink");
    }
  });

  const themeButton = document.getElementById("theme-button");

  const enableDarkMode = () => {
    document.documentElement.classList.add("dark-theme");
    localStorage.setItem("dark-theme", "active");
  };

  const disableDarkMode = () => {
    document.documentElement.classList.remove("dark-theme");
    localStorage.setItem("dark-theme", null);
  };

  if (themeButton) {
    themeButton.addEventListener("click", () => {
      const currentDarkModeState = localStorage.getItem("dark-theme");
      currentDarkModeState !== "active" ? enableDarkMode() : disableDarkMode();
    });
  }

   if(copyEmailBtn && confirmationMessage) {
     const emailToCopy = document.getElementById("emailToCopy").textContent;
      copyEmailBtn.addEventListener("click", function () {
    navigator.clipboard.writeText(emailToCopy).then(() => {
      copyEmailBtn.style.display = 'none';
      confirmationMessage.style.display = "inline";
      setTimeout(() => {
        confirmationMessage.style.display = "none";
        copyEmailBtn.style.display = 'inline';
      }, 2000);
    })
    .catch(err => {
      console.error('Error copying text', err)

      alert('The email could be copied, please, copy it manually: ' + emailToCopy);
    })
  });
   }
});
