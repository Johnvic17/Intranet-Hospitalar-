/* ===============================
   EVENT DELEGATION GLOBAL
   =============================== */

document.addEventListener("click", (e) => {
    const el = e.target.closest("[data-action]");
    if (!el) return;

    const action = el.dataset.action;
    const role = getUserRole();

    switch (action) {

        /* ========= GERAIS ========= */

        case "mv":
            window.location.href = "/pages/AcessMv/acessMV.html";
            break;

        case "chamado":
            window.location.href ="/pages/OpenOS/OpenOS.html"
            break;    

        case "ramal":
            window.location.href = "/pages/RamalList/lista-ramais.html";
            break;
        
        case "editRamal":
            window.location.href = "/pages/RamalList/editar-ramais.html";
            break;

        case "email":
            window.open(
                "https://outlook.office365.com/mail/?path%3D/mail%26wa%3Dwsignin1.0%26JitExp%3D1%26url%3D/owa/?path%3D"
            );
            break;

        case "teams":
            window.location.href = "/pages/AcessTeams/acessTeams.html";
        break;
    
        case "sharepoint":
            window.open("https://samcordiscombr.sharepoint.com/sites/Samcordis");
            break;

        case "cloud":
            window.open("https://planner.cloud.microsoft/webui/");
            break;

        case "mvsoul":
            window.location.href = "/pages/AcessMv/acessMVSoul.html";
            break;

        case "mvpep":
            window.location.href = "/pages/AcessMv/acessMVPep.html";
            break;

        case "hsp":
            window.open("http://app.hspsoftware.com.br/");
            break;

        case "pfsense":
            window.open("http://192.168.0.110/");
            break;

        case "idce":
            window.open("http://192.168.0.105/idce/");
            break;

        case "pacs":
            window.open("http://192.168.0.105:9001/pacs/public/login");
            break;

        case "rockstor":
            window.open("https://192.168.0.70/");
            break;

        case "kaspersky":
            window.open("https://192.168.0.136:8080/login#/monitoring/dashboard");
            break;

        case "fme":
            window.open("http://192.168.0.194:33052/login/noaccess");
            break;

        case "intelbras":
            window.open("https://192.168.0.112:4445/#/home/usuario");
            break;

        case "painel":
            window.open("http://192.168.0.194/Painel/Privado/Default.aspx")
            break;

        /* ========= HOME ========= */

        case "home": {
            const routes = {
                ti: "/indexTI.html",
                nutri: "/indexNutri.html",
                rh: "/indexRH.html",
                telefonia: "/indexTF.html"
            };
            window.location.href = routes[role] || "/index.html";
            break;
        }

        /* ========= CARDÁPIO ========= */

        case "cardapio":
            if (role === "ti" || role === "nutri") {
                window.location.href = "/pages/KitchenMenu/ver-cardapioNutri.html";
            } else {
                window.location.href = "/pages/KitchenMenu/ver-cardapio.html";
            }
            break;

        /* ========= NOTÍCIAS ========= */

        case "noticias":
            if (role === "ti" || role === "rh") {
                window.location.href = "/pages/SamNews/ver-noticiasRH.html";
            } else {
                window.location.href = "/pages/SamNews/ver-noticias.html";
            }
            break;

        /* ========= TI ========= */

        case "editar-ramal":
            if (role === "ti" || role === "telefonia") {
                window.location.href = "/pages/RamalList/editar-ramais.html";
            } else {
                alert("Acesso não autorizado");
            }
            break;

        /* ========= LOGIN ========= */

        case "login":
            window.location.href = "/login.html";
            break;  

        case "logout":
            localStorage.removeItem("nivel");
            window.location.href = "/index.html";
            break;


        default:
            console.warn("Ação não tratada:", action);
    }
});