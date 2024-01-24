const body = document.body;
const themeModeButton = document.getElementById("theme-mode");

const THEME_MODES = {
  LIGHT: "light-mode",
  DARK: "dark-mode"
};

function setTheme(theme) {
  if (theme === THEME_MODES.DARK) {
    body.classList.remove(THEME_MODES.LIGHT);
    body.classList.add(THEME_MODES.DARK);
  } else if (theme === THEME_MODES.LIGHT) {
    body.classList.remove(THEME_MODES.DARK);
    body.classList.add(THEME_MODES.LIGHT);
  }
}

if (!localStorage.getItem("theme")) {
  localStorage.setItem("theme", THEME_MODES.LIGHT);
  setTheme(THEME_MODES.LIGHT);
} else if (localStorage.getItem("theme") === THEME_MODES.LIGHT) {
  setTheme(THEME_MODES.LIGHT);
} else if (localStorage.getItem("theme") === THEME_MODES.DARK) {
  setTheme(THEME_MODES.DARK);
}

themeModeButton.addEventListener("click", () => {
  if (localStorage.getItem("theme") === THEME_MODES.LIGHT) {
    setTheme(THEME_MODES.DARK);
    localStorage.setItem("theme", THEME_MODES.DARK);
  } else if (localStorage.getItem("theme") === THEME_MODES.DARK) {
    setTheme(THEME_MODES.LIGHT);
    localStorage.setItem("theme", THEME_MODES.LIGHT);
  }
});