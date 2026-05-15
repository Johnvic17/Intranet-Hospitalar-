function updateAuthButtons() {
    const nivel = localStorage.getItem("nivel");

    const btnLogin = document.querySelector('[data-action="login"]');
    const btnLogout = document.querySelector('[data-action="logout"]');

    if (!btnLogin || !btnLogout) return;

    if (nivel) {
        btnLogin.style.display = "none";
        btnLogout.style.display = "inline-flex";
    } else {
        btnLogin.style.display = "inline-flex";
        btnLogout.style.display = "none";
    }
}

document.addEventListener("DOMContentLoaded", updateAuthButtons);

function getUserRole() {
    return localStorage.getItem("nivel");
}

function isLogged() {
    return !!getUserRole();
}

function hasRole(...roles) {
    return roles.includes(getUserRole());
}

function requireAuth(...rolesPermitidos) {
    const nivel = getUserRole();

    if (!nivel || (rolesPermitidos.length && !rolesPermitidos.includes(nivel))) {
        alert("Acesso não autorizado");
        window.location.href = "/index.html";
    }
}


