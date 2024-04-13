const navList = document.querySelector("navList")
const myNav = document.querySelector("myNav")

function change(e){
 e.name = e.name === 'menu' ? 'close' : 'menu'
 navList.classList.toggle('left-[0]')
 myNav.classList.toggle('left-[50%]')
}