// Ruta base del proyecto
const BASE = "/clinica_dental";

function loadComponent(elementId, filePath, callback = null) {
    fetch(filePath)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}`);
            }
            return response.text();
        })
        .then(html => {
            document.getElementById(elementId).innerHTML = html;

            if (callback) {
                callback();
            }
        })
        .catch(error => {
            console.error(`Error cargando ${elementId}:`, error);
        });
}

function configurarNavbar() {

    document.querySelectorAll("#navbar a[data-link]").forEach(link => {

        const ruta = link.dataset.link;

        // Agrega automáticamente la ruta base
        link.href = BASE + ruta;

        // Marca como activo el enlace de la página actual
        if (window.location.pathname === link.pathname) {
            link.classList.add("active");
        }

    });

}

document.addEventListener("DOMContentLoaded", () => {

    loadComponent(
        "navbar",
        `${BASE}/assets/components/navbar.html`,
        configurarNavbar
    );

    loadComponent(
        "footer",
        `${BASE}/assets/components/footer.html`
    );

});