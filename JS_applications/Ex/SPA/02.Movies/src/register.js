import { register} from "./userService.js";
import {showHomeView} from './home.js';
import { setUserData } from "./userHelper.js";
import { updateNav } from "./app.js";

document.getElementById('register-form').addEventListener('submit', onRegister);
export function showRegisterView(){
    document.getElementById('form-sign-up').style.display = 'block';
}
async function onRegister(e){
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get('email');
    const password = formData.get('password');
    const rePass = formData.get(repeatePassword);

    if (!email || !password || password.length < 6 || password !== rePass) {
        return alert("error from register");
    }

    const data = await register({email, password});
    setUserData(data);
    updateNav();
    showHomeView();
}