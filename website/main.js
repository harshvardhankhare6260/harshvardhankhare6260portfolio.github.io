const navmenu=document.getElementById('nav-menu'),
navtoggle=document.getElementById('nav-toggle'),
navclose=document.getElementById('nav-close')



if(navtoggle){
navtoggle.addEventListener('click',()=>{
    navmenu.classList.add('show-menu')
})

}
if (navclose) {
    navclose.addEventListener('click', ()=>{
        navmenu.classList.remove('show-menu')
    })
}
const navlink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navmenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navmenu.classList.remove('show-menu')
}
navlink.forEach(n => n.addEventListener('click', linkAction))