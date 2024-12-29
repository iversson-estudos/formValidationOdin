function addEventsInputs() {
  const email = document.querySelector('[name="email"]');
  if (email) {
    email.addEventListener("input", () => {
      email.setCustomValidity("");
      if (!email.validity.valid) {
        email.classList.add("error");
        email.setCustomValidity(
          "Email must be in the format example@gmail.com",
        );
      } else {
        email.classList.remove("error");
      }
      email.reportValidity();
    });
  }
}

export { addEventsInputs };
