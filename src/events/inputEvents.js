function addEventsInputs() {
  const email = document.querySelector('[name="email"]');
  if (email) {
    email.addEventListener("input", () => {
      if (!email.checkValidity()) {
        email.classList.add("error");
      } else {
        email.classList.remove("error");
      }
    });
  }
  email.reportValidity();
}

export { addEventsInputs };
