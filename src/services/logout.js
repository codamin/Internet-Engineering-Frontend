
function logout() {
    localStorage.removeItem("token")
    window.location.href = "http://ie.etuts.ir:31085/login"
}

export default logout;
