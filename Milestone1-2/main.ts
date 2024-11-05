const skill_btn = document.getElementById("btn") as HTMLButtonElement;
const skill_sec = document.getElementById("skills-sec") as HTMLElement;

skill_btn?.addEventListener("click", () => {
    skill_sec?.classList.toggle("toggle-btn")
})