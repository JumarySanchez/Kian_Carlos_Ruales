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

const featureItems = document.querySelectorAll(".feature-item");
const featureMeta = document.getElementById("featureMeta");
const featureTitle = document.getElementById("featureTitle");
const featureBody = document.getElementById("featureBody");

if (featureItems.length && featureMeta && featureTitle && featureBody) {
  featureItems.forEach((item) => {
    item.addEventListener("click", () => {
      featureItems.forEach((node) => node.classList.remove("is-active"));
      item.classList.add("is-active");
      featureMeta.textContent = item.dataset.meta || "";
      featureTitle.textContent = item.dataset.title || "";
      featureBody.textContent = item.dataset.body || "";
    });
  });
}
