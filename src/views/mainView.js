import { addEventsInputs } from "../events/inputEvents";

function mainView() {
  document.body.innerHTML += `
   <form novalidate>
      <h1>INPUT YOUR DATA FOR ME</h1>

      <div>
        <label>Whats your email?</label>
        <input required type="email" name="email"></input>
      </div>
        <div><label>Country of Residence</label>
        <input required maxlength="56" name="country"></input>
      </div>
      <div>
        <label>Whats your ZIP CODE?</label>
        <input maxlength="9"name="zip" type="zip" pattern="\\d{5}-\\d{3}"></input>
      </div>
      <div>
        <label>Provide a password</label>
        <input name="password" type="password" minlength="10"></input>
      </div>
      <div>
        <label>Repeat your password</label>
        <input name="rePassword" type="password"></input>
      </div>
        <button name="submit" type="submit">REGISTER</button>
   </form>
  `;

  addEventsInputs();
}
export { mainView };
