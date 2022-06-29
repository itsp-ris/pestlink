import HideMenu from './HideMenu';

function ShowSection(index) {
    HideMenu();
    let sections = document.getElementsByClassName("section");
    for (let i = 0; i < sections.length; i++) {
        if (i !== index) {
            sections[i].style.display = "none";
        } else {
            sections[i].style.display = "block";
        }
    }
}

export default ShowSection;