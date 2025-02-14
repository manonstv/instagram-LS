document.addEventListener("DOMContentLoaded", function () {
    const followBtn = document.getElementById("followBtn");
    
    if (!followBtn) return;

    const textSpan = followBtn.querySelector(".text");

    const isFollowing = localStorage.getItem("isFollowing");

    if (isFollowing === "true") {
        followBtn.classList.add("following");
        textSpan.textContent = "Suivi(e)";
    }

    followBtn.addEventListener("click", function () {
        this.classList.toggle("following");

        if (this.classList.contains("following")) {
            textSpan.textContent = "Suivi(e)";
            localStorage.setItem("isFollowing", "true");
        } else {
            textSpan.textContent = "Suivre";
            localStorage.setItem("isFollowing", "false");
        }
    });
});
