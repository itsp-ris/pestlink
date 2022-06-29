
function addInfoPageListener() {
    let showButton = document.getElementById("show");
    showButton.addEventListener("click", () => {
        let desc = document.querySelector(".desc-wrapper");
        desc.classList.toggle("active");

        let bg = document.querySelector(".bg");
        bg.classList.toggle("hide");

        let grid = document.querySelector(".grid-wrapper");
        grid.classList.toggle("active");
    });

    let actionButton = document.querySelector(".action-button");
    actionButton.addEventListener("click", () => {
        actionButton.classList.toggle("transform");
    });

    // let closeButton = document.querySelector(".close-button");
    // closeButton.addEventListener("click", () => {
    //     actionButton.classList.toggle("transform");
    // });
}

export default addInfoPageListener;