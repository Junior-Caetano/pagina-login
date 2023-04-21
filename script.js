function entrar() {
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    
    console.log("E-mail: " + email);
    console.log("Senha: " + senha);

    document.getElementById("email").value = "";
    document.getElementById("senha").value = "";

}