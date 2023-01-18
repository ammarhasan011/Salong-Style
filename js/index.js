//colored header when scroll
document.addEventListener("scroll", () => {
    const header = document.querySelector(".nav-header");
    if (window.scrollY > 0) {
        header.classList.add("sticky");
        console.log("yes");
    } else {
        header.classList.remove("sticky");
        console.log("no");
    }
});