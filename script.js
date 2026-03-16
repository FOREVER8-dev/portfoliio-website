    function openWindow(id) {
        document.getElementById(id).style.display = "block";
    }

    function closeWindow(id) {
        document.getElementById(id).style.display = "none";
    }

    document.querySelector(".about").onclick = function() {
        openWindow("about-window");
    };

    document.querySelector(".tools").onclick = function() {
        openWindow("tools-window");
    };

    document.querySelector(".projects").onclick = function() {
        openWindow("projects-window");
    };

    document.querySelector(".contacts").onclick = function() {
        openWindow("contacts-window");
    };

    let highestZ = 1;

const windows = document.querySelectorAll(".window");

windows.forEach(win => {
    win.addEventListener("mousedown", () => {
        highestZ++;
        win.style.zIndex = highestZ;
    });
});

