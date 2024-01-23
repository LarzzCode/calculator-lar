const userInput = document.getElementById('date')
userInput.max =  new Date().toISOString().split('T')[0]
let result = document.getElementById('result')

function calculate(){
    let birthDay = new Date(userInput.value)

    let d1 = birthDay.getDate()
    let m1 = birthDay.getMonth() + 1
    let y1 = birthDay.getFullYear()
    
    let today = new Date()

    let d2 = today.getDate()
    let m2 = today.getMonth() + 1
    let y2 = today.getFullYear()

    let d3, m3, y3;

    y3 = y2 - y1

    if( m2 >= m1){
        m3 = m2 - m1
    }else{
        y3--
        m3 = 12 + m2 - m1
    }

    if( d2 >= d1 ){
        d3 = d2 - d1
    }else{
        m3 -- 
        d3 = getDaysInMonth(y1, m1) + d2 - d1
    }
    if(m3 < 0){
        m3 = 11
        y3--
    }

    result.innerHTML = `You are ${y3} years, ${m3} month, ${d3} days`
}

    function getDaysInMonth(year, month){
        return new Date( year, month, 0).getDate()
    }

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
