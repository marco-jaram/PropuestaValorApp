function recogeDatos(evento) {
    evento.preventDefault();
    //obteniendo datos desde formulario


    let nombreservicios1 = document.querySelector("#respuesta-nombre-servicio1").value;
    let nombreservicios2 = document.querySelector("#respuesta-nombre-servicio2").value;
    let nombreservicios3 = document.querySelector("#respuesta-nombre-servicio3").value;





    let clienteP1 = document.querySelector("#respuesta-cliente-potencial1").value;
    let clienteP2 = document.querySelector("#respuesta-cliente-potencial2").value;
    let clienteP3 = document.querySelector("#respuesta-cliente-potencial3").value;

    let puntoDolor1 = document.querySelector("#respuesta-putos-dolor1").value;
    let puntoDolor2 = document.querySelector("#respuesta-putos-dolor2").value;
    let puntoDolor3 = document.querySelector("#respuesta-putos-dolor3").value;

    let beneficios1 = document.querySelector("#respuesta-beneficios1").value;
    let beneficios2 = document.querySelector("#respuesta-beneficios2").value;
    let beneficios3 = document.querySelector("#respuesta-beneficios3").value;

    let diferencial1 = document.querySelector("#respuesta-diferencial1").value;
    let diferencial2 = document.querySelector("#respuesta-diferencial2").value;
    let diferencial3 = document.querySelector("#respuesta-diferencial3").value;
    //para titulares

    let nombreserviciosParatitulares1 = document.querySelector("#respuesta-nombre-servicio1").value;
    let nombreserviciosParatitulares2 = document.querySelector("#respuesta-nombre-servicio2").value;
    let nombreserviciosParatitulares3 = document.querySelector("#respuesta-nombre-servicio3").value;

    let clientePtitulares1 = document.querySelector("#respuesta-cliente-potencial1").value;
    let clientePtitulares2 = document.querySelector("#respuesta-cliente-potencial2").value;
    let clientePtitulares3 = document.querySelector("#respuesta-cliente-potencial3").value;





    // //obteneidno lugar en formula propuesta d valor dato de formulario


    let propuestaServicio1 = document.querySelector(".servicio-producto1");
    let propuestaServicio2 = document.querySelector(".servicio-producto2");
    let propuestaServicio3 = document.querySelector(".servicio-producto3");



    let propuestaCliente1 = document.querySelector(".cliente-potencia1");
    let propuestaCliente2 = document.querySelector(".cliente-potencia2");
    let propuestaCliente3 = document.querySelector(".cliente-potencia3");


    let propuestaDolor1 = document.querySelector(".problema-dolor1");
    let propuestaDolor2 = document.querySelector(".problema-dolor2");
    let propuestaDolor3 = document.querySelector(".problema-dolor3");

    let propuestaBeneficios1 = document.querySelector(".bene-ficio1");
    let propuestaBeneficios2 = document.querySelector(".bene-ficio2");
    let propuestaBeneficios3 = document.querySelector(".bene-ficio3");

    let propuestaDiferencial1 = document.querySelector(".valor-diferencial1");
    let propuestaDiferencial2 = document.querySelector(".valor-diferencial2");
    let propuestaDiferencial3 = document.querySelector(".valor-diferencial3");

    //para titulares
    let propuestaServicioparatitulares1 = document.querySelector(".servicio-producto4");
    let propuestaServicioparatitulares2 = document.querySelector(".servicio-producto5");
    let propuestaServicioparatitulares3 = document.querySelector(".servicio-producto6");



    let propuestaClientetitulares1 = document.querySelector(".cliente-potencia4");
    let propuestaClientetitulares2 = document.querySelector(".cliente-potencia5");
    let propuestaClientetitulares3 = document.querySelector(".cliente-potencia6");





    //inyectando el dato en el lugar de canvas


    propuestaServicio1.innerHTML = nombreservicios1;
    propuestaServicio2.innerHTML = nombreservicios2;
    propuestaServicio3.innerHTML = nombreservicios3;

    propuestaCliente1.innerHTML = clienteP1;
    propuestaCliente2.innerHTML = clienteP2;
    propuestaCliente3.innerHTML = clienteP3;


    propuestaDolor1.innerHTML = puntoDolor1;
    propuestaDolor2.innerHTML = puntoDolor2;
    propuestaDolor3.innerHTML = puntoDolor3;

    propuestaBeneficios1.innerHTML = beneficios1;
    propuestaBeneficios2.innerHTML = beneficios2;
    propuestaBeneficios3.innerHTML = beneficios3;

    propuestaDiferencial1.innerHTML = diferencial1;
    propuestaDiferencial2.innerHTML = diferencial2;
    propuestaDiferencial3.innerHTML = diferencial3;
    //para titulares


    propuestaClientetitulares1.innerHTML = clientePtitulares1;
    propuestaClientetitulares2.innerHTML = clientePtitulares2;
    propuestaClientetitulares3.innerHTML = clientePtitulares3;




    propuestaServicioparatitulares1.innerHTML = nombreserviciosParatitulares1;
    propuestaServicioparatitulares2.innerHTML = nombreserviciosParatitulares2;
    propuestaServicioparatitulares3.innerHTML = nombreserviciosParatitulares3;



}

let miForm = document.querySelector("#formulario");

miForm.addEventListener("submit", recogeDatos);