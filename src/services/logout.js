
function logout() {
    localStorage.removeItem("token")
    window.location.href = "http://185.166.105.6:31085/login"
}

export default logout;
