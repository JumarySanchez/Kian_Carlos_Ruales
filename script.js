const root = document.documentElement;
const toggle = document.getElementById("themeToggle");
const label = document.getElementById("themeLabel");

const setTheme = (theme) => {
  root.setAttribute("data-theme", theme);
  localStorage.setItem("kian-theme", theme);
  label.textContent = theme === "dark" ? "Dark" : "Light";
};

const saved = localStorage.getItem("kian-theme");
if (saved === "dark" || saved === "light") {
  setTheme(saved);
} else {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  setTheme(prefersDark ? "dark" : "light");
}

toggle.addEventListener("click", () => {
  const current = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
  setTheme(current);
});

const revealItems = document.querySelectorAll(".reveal");
revealItems.forEach((item, idx) => {
  item.style.setProperty("--delay", `${idx * 80}ms`);
});
