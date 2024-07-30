import {get, post, update, del} from './requester.js';

const endPoints = {
    login: "https://localhost:3030/users/login",
    register: "https://localhost:3030/users/register",
    logout: "https://localhost:3030/users/logout",
};

async function register(data) {
    return await post(endPoints.register, data);
}
async function login(data) {
    return await post(endPoints.login, data);
}
async function logout() {
    return await get(endPoints.logout);
}
export {
    register,
    login,
    logout
} 