addEventListener('DOMContentLoaded'), () => {
    const btn-menu = document.querySelector('.btn-menu')
    if (btn-menu){
        btn-menu.addEventListener('click',() => {
        const NavBar_List = document.querySelector('.NavBar_List')
        NavBar_List.classList.toggle('show')
        })
    }
}