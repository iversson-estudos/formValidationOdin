function addEventsInputs() {
  /*EMAIL*/
  const email = document.querySelector('[name="email"]');
  if (email) {
    email.addEventListener("input", () => {
      if (!email.checkValidity()) {
        email.classList.add("error");
      }
    });
  }
}
export { addEventsInputs };
