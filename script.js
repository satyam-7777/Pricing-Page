const toggleBtn = document.querySelector(".toggle-btn");
const annualLabel = document.querySelector("#annual-label");
const monthlyLabel = document.querySelector("#monthly-label");

const basicPrice = document.querySelector("#basic-price");
const professionalPrice = document.querySelector("#professional-price");
const masterPrice = document.querySelector("#master-price");

toggleBtn.addEventListener("click", () => {
  const isPressed = toggleBtn.getAttribute("aria-pressed") === "true";

  toggleBtn.setAttribute("aria-pressed", String(!isPressed));

  annualLabel.classList.toggle("active", !isPressed);
  monthlyLabel.classList.toggle("active", isPressed);

  if (isPressed) {
    basicPrice.textContent = "19.99";
    professionalPrice.textContent = "24.99";
    masterPrice.textContent = "39.99";
  } else {
    basicPrice.textContent = "199.99";
    professionalPrice.textContent = "249.99";
    masterPrice.textContent = "399.99";
  }
});
