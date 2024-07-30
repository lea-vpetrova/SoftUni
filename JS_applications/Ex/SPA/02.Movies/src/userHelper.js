
function setUserData(userData) {
    sessionStorage.setItem("userData", JSON.stringify(userData));
}
function getUserData() {
    return JSON.parse(sessionStorage.getItem("userData"));
}
function getUserToken() {
    const userData = getUserData();
    return userData?.accessToken;
}
function getUserId() {
    const userData = getUserData();
    return userData?._id;
}
export {
    setUserData,
    getUserData,
    getUserToken,
    getUserId
}