
function logout() {
    localStorage.removeItem("token")
    window.location.href = "http://localhost:3000/login"
}

export default logout;
