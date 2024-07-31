document.addEventListener("DOMContentLoaded", () => {
  const rootElement = document.documentElement;
  const toggleSwitch = document.getElementById("theme-toggle");

  const lightSvg =
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sun"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>'; // Replace with actual SVG content
  const darkSvg =
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-moon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>'; // Replace with actual SVG content

  const updateSvg = () => {
    if (rootElement.classList.contains("dark")) {
      toggleSwitch.innerHTML = darkSvg;
    } else {
      toggleSwitch.innerHTML = lightSvg;
    }
  };

  const loadTheme = () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      rootElement.classList.toggle("dark", savedTheme === "dark");
    } else {
      const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
      rootElement.classList.toggle("dark", prefersDarkScheme);
    }
  };

  const saveTheme = () => {
    if (rootElement.classList.contains("dark")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  };

  loadTheme();
  updateSvg();

  toggleSwitch.addEventListener("click", () => {
    rootElement.classList.toggle("dark");
    saveTheme();
    updateSvg();

    toggleSwitch.classList.add("rotate-animation");
    setTimeout(() => {
      toggleSwitch.classList.remove("rotate-animation");
    }, 600);
  });
});
