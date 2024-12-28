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
        <input name="country"></input>
      </div>
      <div>
        <label>Whats your ZIP CODE?</label>
        <input name="zip" type="zip"></input>
      </div>
      <div>
        <label>Provide a password</label>
        <input name="password" type="password"></input>
      </div>
      <div>
        <label>Repeat your password</label>
        <input name="password" type="password"></input>
      </div>
        <button type="submit">REGISTER</button>
   </form>
  `;

  addEventsInputs();
}
export { mainView };
