const toggle_icons = document.querySelector('.psr-icons');
const toggle = document.querySelector('.psr-toggle');
toggle_icons.addEventListener('click',()=>{
    if(toggle.classList.contains('psr-sidebar-expanded')){
        toggle.classList.remove('psr-sidebar-expanded');
        toggle.classList.add('psr-sidebar-collapsed');
    }
    else{
        toggle.classList.add('psr-sidebar-expanded');
        toggle.classList.remove('psr-sidebar-collapsed');
    }
})


const checkScreenSize = ()=>{
    const width = window.innerWidth;
    if (width <= 768) {
        toggle.classList.add('psr-sidebar-collapsed');
        toggle.classList.remove('psr-sidebar-expanded');
    } else {
        toggle.classList.add('psr-sidebar-expanded');
        toggle.classList.remove('psr-sidebar-collapsed');
    }
}
checkScreenSize();
window.addEventListener('resize', checkScreenSize);