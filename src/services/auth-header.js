


function authHeader() {
    const user = localStorage.getItem('token');
    if (user) {
      return { Authorization: 'Bearer ' + user };
    } else {
      return {};
    }
  }

  export default authHeader;