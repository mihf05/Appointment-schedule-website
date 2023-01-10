const navBar = document.getElementById ('nav-bar'),
      toggleBtn = document.getElementById('toggle-div'),
      closeBtn = document.getElementById('close-div');

toggleBtn.addEventListener('click', ()=>{
    navBar.classList.add('show')
})      
closeBtn.addEventListener('click', ()=>{
    navBar.classList.remove('show')
})     


// CHANGING HEADER BACKGROUND COLOR AFTER 20PX ON SCROLL Y AXIS

const headerChange = document.getElementById('header');
function headerShadow (){

   if(this.scrollY >= 20)
       headerChange.classList.add('headerBG')
   else
   headerChange.classList.remove('headerBG')
}
window.addEventListener('scroll', headerShadow)