document.addEventListener("DOMContentLoaded", async () => {
    const role = localStorage.getItem("nivel");

    let navbarFile = "/components/navbar-default.html";

    if (role === "ti") navbarFile = "/components/navbar-ti.html";
    else if (role === "nutri") navbarFile = "/components/navbar-nutri.html";
    else if (role === "rh") navbarFile = "/components/navbar-rh.html";
    else if (role === "telefonia") navbarFile = "/components/navbar-tf.html";

    const res = await fetch(navbarFile);
    const html = await res.text();

    document.getElementById("navbar").innerHTML = html;

    if (typeof updateAuthButtons === "function") {
        updateAuthButtons();
    }
});
