function loadSteps() {
  const steps = document.querySelectorAll(".step");
  const contents = document.querySelectorAll(".step-content .content");

  steps.forEach(step => {
    step.addEventListener("click", () => {
      steps.forEach(s => s.classList.remove("active"));
      contents.forEach(c => c.classList.remove("active"));

      step.classList.add("active");
      document.querySelector(`.step-content .content[data-step="${step.dataset.step}"]`).classList.add("active");
    });
  });
}
