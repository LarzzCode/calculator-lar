const userInput = document.getElementById('date')
userInput.max =  new Date().toISOString().split('T')[0]
const years = document.getElementById('years')
const months = document.getElementById('months')
const days = document.getElementById('days')
const year = document.getElementById('year')
const month = document.getElementById('month')
const day = document.getElementById('day')
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
    years.innerHTML = ' '  + y3
    months.innerHTML =' ' +  m3
    days.innerHTML = ' ' + d3
    year.innerHTML = ' '  + y3
    month.innerHTML =' ' +  m3
    day.innerHTML = ' ' + d3
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


