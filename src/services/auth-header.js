import {NotificationManager} from 'react-notifications';
var jwt = require("jsonwebtoken");



function authHeader() {
    const token = localStorage.getItem("token")
    if(token) {
      const decode = jwt.decode(token)
      const now = Math.floor(Date.now() / 1000)
      if(decode.exp < now) {
        NotificationManager.error('ورود شما منقضی شده است و باید  مجددا وارد شوید.')
        localStorage.removeItem("token")
        window.location.href = "http://localhost:3000/login"

      }
      else {
        return {Authorization: token}
      }
    }
    else {
      NotificationManager.error('شما وارد سیستم نشده‌اید باید لاگین کنید.')
      window.location.href = "http://localhost:3000/login"

    }
  }

  export default authHeader;