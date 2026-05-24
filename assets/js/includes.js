async function loadInclude(id, file) {

    try {

        const response = await fetch(file);

        if (!response.ok) {
            throw new Error(`Include nicht gefunden: ${file}`);
        }

        const content = await response.text();

        document.getElementById(id).innerHTML = content;

    } catch (error) {

        console.error(error);
    }
}


function setActiveMenu() {

    let currentPage = window.location.pathname.split("/").pop();

    // Startseite behandeln
    if (currentPage === "") {
        currentPage = "index.html";
    }

    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {

        const linkPage = link.getAttribute('href');

        // vorher active entfernen
        link.parentElement.classList.remove('active');

        // exakter Vergleich
        if (linkPage === currentPage) {

            link.parentElement.classList.add('active');
        }
    });
}


async function loadIncludes() {

    await loadInclude("header", "/includes/header.html");

    await loadInclude("footer", "/includes/footer.html");
    setActiveMenu();

}

document.addEventListener("DOMContentLoaded", loadIncludes);