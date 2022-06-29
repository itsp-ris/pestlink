
function hideMenu() {
    let isMenuOpen = document.querySelector("#toggle").checked;

    if (isMenuOpen) {
        document.querySelector("#toggle").checked = false;
    }
}

export default hideMenu;