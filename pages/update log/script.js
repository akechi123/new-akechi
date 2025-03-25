function toggleEntry(entryId) {
    const entry = document.getElementById(entryId);
    const allEntries = document.querySelectorAll('.entry');

    // Hide all entries first
    allEntries.forEach(item => {
        if (item !== entry) {
            item.classList.remove('show');
            setTimeout(() => {
                item.style.display = 'none';
            }, 500); // Matches transition time
        }
    });

    // If the entry is already shown, hide it
    if (entry.classList.contains('show')) {
        entry.classList.remove('show');
        setTimeout(() => {
            entry.style.display = 'none';
        }, 500); // Matches transition time
    } else {
        entry.style.display = 'block'; // Show the entry first
        setTimeout(() => {
            entry.classList.add('show'); // Apply animation after a tiny delay
        }, 10);
    }
}


document.addEventListener("DOMContentLoaded", function () {
    // Create the overlay
    const overlay = document.createElement("div");
    overlay.classList.add("image-overlay");
    overlay.innerHTML = '<img src="" alt="Expanded Image">';
    document.body.appendChild(overlay);

    // Get the image inside the overlay
    const overlayImage = overlay.querySelector("img");

    // Add event listener to all images
    document.querySelectorAll(".clickable-image").forEach(img => {
        img.addEventListener("click", function () {
            overlayImage.src = this.src;
            overlay.classList.add("show");
        });
    });

    // Close overlay when clicking outside the image
    overlay.addEventListener("click", function (e) {
        if (e.target === overlay) {
            overlay.classList.remove("show");
        }
    });
});
