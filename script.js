document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");

    sections.forEach(section => {
        section.addEventListener("click", function () {
            // Check if the section is already in fullscreen mode
            if (this.classList.contains("fullscreen")) {
                this.classList.remove("fullscreen");
            } else {
                // Remove fullscreen from any other section
                sections.forEach(sec => sec.classList.remove("fullscreen"));

                // Add fullscreen to clicked section
                this.classList.add("fullscreen");
            }
        });
    });
});
