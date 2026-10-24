// Fernhill Gardens - sample site scripts (no dependencies)

// Mobile menu
const toggle = document.querySelector(".nav-toggle");
const nav = document.getElementById("site-nav");
if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
}

// Before/after sliders: a native range input drives the reveal, so keyboard and screen readers work
document.querySelectorAll(".ba").forEach((slider) => {
  const range = slider.querySelector("input[type=range]");
  const set = (v) => slider.style.setProperty("--pos", v + "%");
  range.addEventListener("input", () => set(range.value));
  set(range.value);
});

// Enquiry form: no backend on this sample, so it opens the visitor's email app with the details filled in
const form = document.getElementById("quote-form");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!form.reportValidity()) return;
    const d = new FormData(form);
    const services = d.getAll("service").join(", ") || "Not sure yet";
    const body = [
      `Name: ${d.get("name")}`,
      `Phone: ${d.get("phone") || "-"}`,
      `Email: ${d.get("email")}`,
      `Postcode: ${d.get("postcode") || "-"}`,
      `Interested in: ${services}`,
      `Budget: ${d.get("budget")}`,
      "",
      d.get("message"),
    ].join("\n");
    const to = form.dataset.to;
    window.location.href = `mailto:${to}?subject=${encodeURIComponent("Free quote request")}&body=${encodeURIComponent(body)}`;
    const status = document.getElementById("form-status");
    status.textContent = "Your email app should now open with your message ready to send. Nothing is sent until you press Send there.";
  });
}

document.querySelectorAll("[data-year]").forEach((el) => (el.textContent = new Date().getFullYear()));
