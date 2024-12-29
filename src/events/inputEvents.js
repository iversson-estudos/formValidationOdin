function addEventsInputs() {
  /*EMAIL*/

  const email = document.querySelector('[name="email"]');
  if (email) {
    email.addEventListener("focusout", () => {
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
  /*COUNTRY*/
  const country = document.querySelector('[name="country"]');
  if (country) {
    country.addEventListener("focusout", () => {
      country.setCustomValidity("");
      if (!country.validity.valid) {
        country.classList.add("error");
        country.setCustomValidity("Please fill this field");
      } else {
        country.classList.remove("error");
      }
      country.reportValidity();
    });
  }
  /*ZIP CODE*/
  const zip = document.querySelector('[name="zip"]');
  if (zip) {
    zip.addEventListener("focusout", () => {
      zip.setCustomValidity("");
      if (zip.validity.patternMismatch) {
        zip.classList.add("error");
        zip.setCustomValidity("ZIP Code needs to be in this format 12345-678");
      } else {
        zip.classList.remove("error");
      }
      zip.reportValidity();
    });
  }
  /*PASSWORDS */
  const password = document.querySelector('[name="password"]');
  const confirmPassword = document.querySelector('[name="rePassword"]');

  if (password && confirmPassword) {
    password.addEventListener("focusout", () => {
      password.setCustomValidity("");
      if (!password.validity.valid) {
        password.classList.add("error");
        password.setCustomValidity(
          "Password needs to be atleast 10 chars long",
        );
      } else {
        password.classList.remove("error");
      }
      password.reportValidity();
    });

    confirmPassword.addEventListener("focusout", () => {
      confirmPassword.setCustomValidity("");
      if (password.value !== confirmPassword.value) {
        confirmPassword.setCustomValidity("Passwords need to be the same");
        confirmPassword.classList.add("error");
      } else {
        confirmPassword.classList.remove("error");
      }
      confirmPassword.reportValidity();
    });
  }
  const submitBtn = document.querySelector('[name="submit"]');
  submitBtn.addEventListener("click", (event) => {
    event.preventDefault();
    if (
      email.classList.contains("error") ||
      country.classList.contains("error") ||
      zip.classList.contains("error") ||
      password.classList.contains("error") ||
      confirmPassword.classList.contains("error")
    ) {
      email.reportValidity();
      country.reportValidity();
      zip.reportValidity();
      password.reportValidity();
      confirmPassword.reportValidity();
    } else {
      document.body.innerHTML = "";
      const divSuccess = document.createElement("div");
      divSuccess.classList.add("sucess");
      divSuccess.textContent = "THUMBS UP";
      document.body.appendChild(divSuccess);
    }
  });
}

export { addEventsInputs };
