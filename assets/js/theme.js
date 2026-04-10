document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("theme-toggle");
  const currentTheme = localStorage.getItem("theme");

  // Check if a theme is saved in local storage, otherwise check system preference
  if (currentTheme) {
    document.documentElement.setAttribute("data-theme", currentTheme);
  } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.documentElement.setAttribute("data-theme", "dark");
  }

  // Toggle logic
  toggleButton.addEventListener("click", () => {
    let theme = document.documentElement.getAttribute("data-theme");
    
    if (theme === "dark") {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    }
  });
});