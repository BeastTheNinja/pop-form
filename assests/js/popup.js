    const modal = document.getElementById("loginModal");
    const openBtn = document.getElementById("openLoginModal");
    const closeBtn = document.querySelector(".close");

    // Åbn modal med slide-in effekt
    openBtn.addEventListener("click", function () {
        modal.style.display = "flex";
        setTimeout(() => modal.classList.add("show"), 10);
    });

    // Funktion til at lukke modal med slide-out effekt
    function closeModal() {
        modal.classList.add("hide");
        setTimeout(() => {
            modal.classList.remove("show", "hide");
            modal.style.display = "none";
        }, 400); // Skal matche transition-tiden i CSS
    }

    // Luk via kryds-knap
    closeBtn.addEventListener("click", closeModal);

    // Luk ved klik udenfor modal'en
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            closeModal();
        }
    });
