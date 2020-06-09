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
        window.location.href = "http://185.166.105.6:31085/login"


      }
      else {
        return {Authorization: token}
      }
    }
    else {
      NotificationManager.error('شما وارد سیستم نشده‌اید باید لاگین کنید.')
      window.location.href = "http://185.166.105.6:31085/login"

    }
  }

  export default authHeader;