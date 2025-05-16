document.addEventListener("DOMContentLoaded", () => {
    const hoverBar = document.getElementById("hoverBar");
    const profile = document.getElementById("profile");

    // Show profile when hovering over the bar
    hoverBar.addEventListener("mouseenter", () => {
        profile.classList.add("active");
    });

    // Keep profile visible when hovered
    profile.addEventListener("mouseenter", () => {
        profile.classList.add("active");
    });

    // Hide profile when mouse leaves both the bar and the profile
    profile.addEventListener("mouseleave", () => {
        profile.classList.remove("active");
    });

    // Toggle on click
    hoverBar.addEventListener("click", () => {
        profile.classList.toggle("active");
    });

    // Hide if clicking outside
    document.addEventListener("click", (event) => {
        if (!hoverBar.contains(event.target) && !profile.contains(event.target)) {
            profile.classList.remove("active");
        }
    });
});
