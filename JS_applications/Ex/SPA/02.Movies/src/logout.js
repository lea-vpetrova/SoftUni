import { updateNav } from "./app.js";
import { logout } from "./userService.js";
import { clearUserData } from "./userHelper.js";
import { showHomeView } from "./home.js";

export async function showLogout(){
    await logout();
    clearUserData();
    updateNav();
    showHomeView();
}