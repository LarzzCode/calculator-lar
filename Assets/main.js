
// navbar
const menuIcon = document.getElementById("menu-icon");
const menuList = document.getElementById("menu-list");

menuIcon.addEventListener("click", () => {
  menuList.classList.toggle("hidden");
});
  // mode 
  const body = document.body
  const icon = document.getElementById('icon')
  icon.addEventListener('click', () => {
    body.classList.toggle('darkMode')

    if(body.classList.contains('darkMode')){
      icon.src = "Assets/icons/sun-light.svg"
    }else {
      icon.src = "Assets/icons/moon.svg"
    }
  
  })