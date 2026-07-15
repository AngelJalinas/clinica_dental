(() => {

    // Detecta automáticamente la raíz del proyecto
    const ROOT = window.location.pathname.includes("/html/")
        ? "../.."
        : ".";

    const navbar = `
    <nav class="navbar navbar-expand-lg navbar-light bg-light shadow-sm fixed-top">

        <div class="container">

            <a class="navbar-brand fw-bold" href="${ROOT}/index.html">
                <i class="fas fa-tooth text-primary"></i>
                Sonrisa Perfecta
            </a>

            <button class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav">

                <span class="navbar-toggler-icon"></span>

            </button>

            <div class="collapse navbar-collapse" id="navbarNav">

                <ul class="navbar-nav ms-auto">

                    <li class="nav-item dropdown">

                        <a class="nav-link dropdown-toggle"
                           href="#"
                           data-bs-toggle="dropdown">

                            Servicios

                        </a>

                        <ul class="dropdown-menu">

                            <li>
                                <a class="dropdown-item"
                                   href="${ROOT}/html/servicios/limpiezaDental.html">
                                    Limpieza Dental
                                </a>
                            </li>

                            <li>
                                <a class="dropdown-item"
                                   href="${ROOT}/html/servicios/blanqueamiento.html">
                                    Blanqueamiento
                                </a>
                            </li>

                            <li>
                                <a class="dropdown-item"
                                   href="${ROOT}/html/servicios/ortodoncia.html">
                                    Ortodoncia
                                </a>
                            </li>

                            <li>
                                <a class="dropdown-item"
                                   href="${ROOT}/html/servicios/endodoncia.html">
                                    Endodoncia
                                </a>
                            </li>

                        </ul>

                    </li>

                    <li class="nav-item">
                        <a class="nav-link"
                           href="${ROOT}/html/nosotros/nosotros.html">
                            Nosotros
                        </a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link"
                           href="${ROOT}/html/contacto/contacto.html">
                            Contacto
                        </a>
                    </li>

                </ul>

            </div>

        </div>

    </nav>
    `;

    const footer = `
    <footer class="bg-dark text-white pt-5 pb-4">
    <div class="container">
        <div class="row g-4">
            <!-- Columna 1: Logo y descripción -->
            <div class="col-md-4">
                <h5 class="text-uppercase fw-bold mb-3">
                    <i class="fas fa-tooth text-primary me-2"></i>Clínica Sonrisa Perfecta
                </h5>
                <p class="text-secondary" style="text-align: justify;">
                    Cuidamos tu sonrisa con tecnología avanzada y atención personalizada. 
                    Más de 10 años devolviendo confianza a nuestros pacientes.
                </p>
                <div class="mt-3">
                    <a href="https://www.facebook.com/midudev.frontend/?locale=es_LA" class="text-white me-3 opacity-75 hover-opacity-100" style="transition: opacity 0.3s;">
                        <i class="fab fa-facebook fa-lg"></i>
                    </a>
                    <a href="https://www.instagram.com/leomessi/" class="text-white me-3 opacity-75 hover-opacity-100" style="transition: opacity 0.3s;">
                        <i class="fab fa-instagram fa-lg"></i>
                    </a>
                    <a href="#" class="text-white me-3 opacity-75 hover-opacity-100" style="transition: opacity 0.3s;">
                        <i class="fab fa-tiktok fa-lg"></i>
                    </a>
                    <a href="#" class="text-white me-3 opacity-75 hover-opacity-100" style="transition: opacity 0.3s;">
                        <i class="fa-solid fa-at"></i>
                    </a>
                </div>
            </div>
        </div>

        <!-- Línea divisoria -->
        <hr class="border-secondary my-4">

        <!-- Parte inferior: derechos y desarrollador -->
        <div class="row align-items-center">
            <div class="col-md-6 text-center text-md-start">
                <p class="text-secondary mb-0">
                    © 2026 Clínica Sonrisa Perfecta. Todos los derechos reservados.
                </p>
            </div>
            <div class="col-md-6 text-center text-md-end">
                <p class="text-secondary mb-0">
                    <i class="fas fa-code text-primary me-1"></i>
                    Desarrollado por 
                    <a href="https://github.com/AngelJalinas/AngelJalinas" class="text-primary text-decoration-none hover-text-info" style="transition: color 0.3s;">
                        <strong>Angel</strong>
                    </a>
                </p>
            </div>
        </div>
    </div>
</footer>
    `;

    const navbarContainer = document.getElementById("navbar");
    if (navbarContainer) {
        navbarContainer.innerHTML = navbar;
    }

    const footerContainer = document.getElementById("footer");
    if (footerContainer) {
        footerContainer.innerHTML = footer;
    }

})();