function copyEmail(){
    const email = document.getElementById("mail").textContent;
    const alerta = document.getElementById("alerta");

    navigator.clipboard.writeText(email).then(() => {
        alerta.classList.remove("oculto");
        setTimeout(() => {
            alerta.classList.add("visible");
        }, 10);

        setTimeout(() => {
            alerta.classList.remove("visible");
            setTimeout(() => {
                alerta.classList.add("oculto");
            }, 500);
        }, 1000);
    });
}