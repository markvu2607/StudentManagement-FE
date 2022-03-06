const onLogout = () => {
  localStorage.removeItem("user")
  window.location = "../login.html"
  console.log("logout")
}