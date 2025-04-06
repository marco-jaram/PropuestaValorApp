document.addEventListener('DOMContentLoaded', function() {
    // Referencias a elementos del DOM
    const loginSection = document.getElementById('login-section');
    const appContent = document.getElementById('app-content');
    const loginButton = document.getElementById('login-button');
    const passwordInput = document.getElementById('password');
    const loginError = document.getElementById('login-error');
    const cerrarSesionBtn = document.getElementById('cerrar-sesion');
    
    const formulario = document.getElementById('formulario');
    const resultadoSection = document.getElementById('resultado-section');
    const mensajeCarga = document.getElementById('mensaje-carga');
    const guardarJsonBtn = document.getElementById('guardar-json');
    const cargarJsonInput = document.getElementById('cargar-json');
    const descargarJsonBtn = document.getElementById('descargar-json');
    const editarRespuestasBtn = document.getElementById('editar-respuestas');
    
    // Contraseña correcta
    const PASSWORD_CORRECTO = 'propuesta2025@';
    
    // Campos del formulario 
    const camposFormulario = [
        'respuesta-nombre-servicio1', 'respuesta-nombre-servicio2', 'respuesta-nombre-servicio3',
        'respuesta-cliente-potencial1', 'respuesta-cliente-potencial2', 'respuesta-cliente-potencial3',
        'respuesta-puntos-dolor1', 'respuesta-puntos-dolor2', 'respuesta-puntos-dolor3',
        'respuesta-beneficios1', 'respuesta-beneficios2', 'respuesta-beneficios3',
        'respuesta-diferencial1', 'respuesta-diferencial2', 'respuesta-diferencial3'
    ];
    
    // Ejemplo precargado
    const ejemploDatos = {
        'respuesta-nombre-servicio1': 'Bodas De Película',
        'respuesta-nombre-servicio2': 'Memorias Eternas',
        'respuesta-nombre-servicio3': 'Fotografía Emocional para Bodas',
        'respuesta-cliente-potencial1': 'Personas que están planeando una boda',
        'respuesta-cliente-potencial2': 'Parejas comprometidas',
        'respuesta-cliente-potencial3': 'Personas que se van a casar',
        'respuesta-puntos-dolor1': 'No tener reportaje fotográfico de calidad después de la boda',
        'respuesta-puntos-dolor2': 'El reportaje no muestra todos los momentos importantes de la boda',
        'respuesta-puntos-dolor3': 'Fotógrafo poco profesional que incomode a los invitados',
        'respuesta-beneficios1': 'Estar más tranquilo el día de tu boda',
        'respuesta-beneficios2': 'Conservar recuerdos de alta calidad para toda la vida',
        'respuesta-beneficios3': 'Compartir momentos especiales con los que no pudieron asistir',
        'respuesta-diferencial1': 'Fotografía documental sin poses forzadas',
        'respuesta-diferencial2': 'Álbum digital interactivo incluido',
        'respuesta-diferencial3': 'Entrega de primeras imágenes en 24 horas'
    };
    
    // Definición de funciones
    
    // Función para generar propuestas
    function generarPropuestas() {
        if (mensajeCarga) {
            mensajeCarga.textContent = 'Generando propuestas...';
        }
        
        // Recopilar todos los datos del formulario
        const datos = {};
        camposFormulario.forEach(campo => {
            const elemento = document.getElementById(campo);
            if (elemento) {
                // Usar el valor del campo o su placeholder si está vacío
                datos[campo] = elemento.value || elemento.placeholder;
            }
        });
        
        // Verificar si todos los campos están vacíos y no tienen placeholder
        const todoVacio = Object.values(datos).every(valor => !valor);
        
        // Si todo está vacío, cargar los datos de ejemplo
        if (todoVacio) {
            for (let campo in ejemploDatos) {
                datos[campo] = ejemploDatos[campo];
            }
        }
        
        // Actualizar los valores en la página
        // Fórmula A
        for (let i = 1; i <= 3; i++) {
            const clienteElement = document.getElementById(`cliente-potencial${i}`);
            const dolorElement = document.getElementById(`problema-dolor${i}`);
            const servicioElement = document.getElementById(`servicio-producto${i}`);
            const beneficioElement = document.getElementById(`beneficio${i}`);
            
            if (clienteElement) {
                clienteElement.textContent = datos[`respuesta-cliente-potencial${i}`] || '_________';
            }
            if (dolorElement) {
                dolorElement.textContent = datos[`respuesta-puntos-dolor${i}`] || '_________';
            }
            if (servicioElement) {
                servicioElement.textContent = datos[`respuesta-nombre-servicio${i}`] || '_________';
            }
            if (beneficioElement) {
                beneficioElement.textContent = datos[`respuesta-beneficios${i}`] || '_________';
            }
        }
        
        // Fórmula B
        for (let i = 1; i <= 3; i++) {
            const j = i + 3; // Para los IDs servicio-producto4, servicio-producto5, etc.
            const servicioElement = document.getElementById(`servicio-producto${j}`);
            const clienteElement = document.getElementById(`cliente-potencial${j}`);
            const diferencialElement = document.getElementById(`valor-diferencial${i}`);
            
            if (servicioElement) {
                servicioElement.textContent = datos[`respuesta-nombre-servicio${i}`] || '_________';
            }
            if (clienteElement) {
                clienteElement.textContent = datos[`respuesta-cliente-potencial${i}`] || '_________';
            }
            if (diferencialElement) {
                diferencialElement.textContent = datos[`respuesta-diferencial${i}`] || '_________';
            }
        }
        
        // Mostrar resultados
        setTimeout(() => {
            if (formulario && resultadoSection) {
                formulario.style.display = 'none';
                resultadoSection.style.display = 'block';
            }
            if (mensajeCarga) {
                mensajeCarga.textContent = '';
            }
            window.scrollTo(0, 0);
        }, 500);
        
        // Guardar datos en localStorage para persistencia
        localStorage.setItem('propuestaValorDatos', JSON.stringify(datos));
    }
    
    // Función para cargar datos guardados
    function cargarDatosGuardados() {
        const datosGuardados = localStorage.getItem('propuestaValorDatos');
        if (datosGuardados) {
            try {
                const datos = JSON.parse(datosGuardados);
                
                // Rellenar formulario con datos guardados
                for (let campo in datos) {
                    const elemento = document.getElementById(campo);
                    if (elemento) {
                        elemento.value = datos[campo];
                    }
                }
            } catch (error) {
                console.error('Error al cargar datos guardados:', error);
            }
        }
    }
    
    // Función auxiliar para descargar JSON
    function descargarJSON(datos) {
        const datosJSON = JSON.stringify(datos, null, 2);
        const blob = new Blob([datosJSON], {type: 'application/json'});
        const url = URL.createObjectURL(blob);
        
        // Crear link para descargar
        const a = document.createElement('a');
        a.href = url;
        a.download = 'propuesta-valor-' + new Date().toISOString().slice(0, 10) + '.json';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }
    
    // Event Listeners
    
    // Función de login
    if (loginButton) {
        loginButton.addEventListener('click', function() {
            const password = passwordInput.value;
            if (password === PASSWORD_CORRECTO) {
                loginSection.style.display = 'none';
                appContent.style.display = 'block';
                if (cerrarSesionBtn) {
                    cerrarSesionBtn.style.display = 'block';
                }
                // Guardar en localStorage solo un flag de sesión (no la contraseña)
                localStorage.setItem('sesionActiva', 'true');
            } else {
                loginError.textContent = 'Contraseña incorrecta. Inténtalo de nuevo.';
                loginError.style.display = 'block';
                passwordInput.value = '';
                setTimeout(() => {
                    loginError.style.display = 'none';
                }, 3000);
            }
        });
    }
    
    // Enter en el campo de contraseña
    if (passwordInput) {
        passwordInput.addEventListener('keyup', function(event) {
            if (event.key === 'Enter') {
                loginButton.click();
            }
        });
    }
    
    // Función para cerrar sesión
    if (cerrarSesionBtn) {
        cerrarSesionBtn.addEventListener('click', function() {
            localStorage.removeItem('sesionActiva');
            if (loginSection && appContent) {
                appContent.style.display = 'none';
                loginSection.style.display = 'flex';
                cerrarSesionBtn.style.display = 'none';
                passwordInput.value = '';
            }
        });
    }
    
    // Formulario de propuesta de valor
    if (formulario) {
        formulario.addEventListener('submit', function(event) {
            event.preventDefault();
            generarPropuestas();
        });
    }
    
    // Guardar como JSON desde formulario
    if (guardarJsonBtn) {
        guardarJsonBtn.addEventListener('click', function() {
            // Recopilar datos del formulario
            const datos = {};
            camposFormulario.forEach(campo => {
                const elemento = document.getElementById(campo);
                if (elemento) {
                    datos[campo] = elemento.value || elemento.placeholder;
                }
            });
            
            // Crear archivo JSON para descargar
            descargarJSON(datos);
            
            // Mostrar mensaje de confirmación
            const mensajeConfirmacion = document.createElement('div');
            mensajeConfirmacion.textContent = 'Archivo JSON guardado correctamente';
            mensajeConfirmacion.style.color = '#11b28e';
            mensajeConfirmacion.style.fontWeight = 'bold';
            mensajeConfirmacion.style.padding = '10px';
            mensajeConfirmacion.style.textAlign = 'center';
            appContent.appendChild(mensajeConfirmacion);
            
            setTimeout(() => {
                appContent.removeChild(mensajeConfirmacion);
            }, 2000);
        });
    }
    
    // Descargar JSON desde resultados
    if (descargarJsonBtn) {
        descargarJsonBtn.addEventListener('click', function() {
            // Recopilar datos del formulario (que están ocultos pero siguen existiendo)
            const datos = {};
            camposFormulario.forEach(campo => {
                const elemento = document.getElementById(campo);
                if (elemento) {
                    datos[campo] = elemento.value || elemento.placeholder;
                }
            });
            
            // Crear archivo JSON para descargar
            descargarJSON(datos);
            
            // Mostrar mensaje de confirmación
            const mensajeConfirmacion = document.createElement('div');
            mensajeConfirmacion.textContent = 'Archivo JSON descargado correctamente';
            mensajeConfirmacion.style.color = '#11b28e';
            mensajeConfirmacion.style.fontWeight = 'bold';
            mensajeConfirmacion.style.padding = '10px';
            mensajeConfirmacion.style.textAlign = 'center';
            resultadoSection.appendChild(mensajeConfirmacion);
            
            setTimeout(() => {
                resultadoSection.removeChild(mensajeConfirmacion);
            }, 2000);
        });
    }
    
    // Cargar desde JSON
    if (cargarJsonInput) {
        cargarJsonInput.addEventListener('change', function(event) {
            const archivo = event.target.files[0];
            if (archivo) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    try {
                        const datos = JSON.parse(e.target.result);
                        
                        // Rellenar formulario con datos del JSON
                        for (let campo in datos) {
                            const elemento = document.getElementById(campo);
                            if (elemento) {
                                elemento.value = datos[campo];
                            }
                        }
                        
                        // Mostrar mensaje de confirmación
                        const mensajeConfirmacion = document.createElement('div');
                        mensajeConfirmacion.textContent = 'Archivo JSON cargado correctamente';
                        mensajeConfirmacion.style.color = '#11b28e';
                        mensajeConfirmacion.style.fontWeight = 'bold';
                        mensajeConfirmacion.style.padding = '10px';
                        mensajeConfirmacion.style.textAlign = 'center';
                        appContent.appendChild(mensajeConfirmacion);
                        
                        setTimeout(() => {
                            appContent.removeChild(mensajeConfirmacion);
                        }, 2000);
                    } catch (error) {
                        const mensajeError = document.createElement('div');
                        mensajeError.textContent = 'Error al cargar el archivo: formato inválido';
                        mensajeError.style.color = '#e74c3c';
                        mensajeError.style.fontWeight = 'bold';
                        mensajeError.style.padding = '10px';
                        mensajeError.style.textAlign = 'center';
                        appContent.appendChild(mensajeError);
                        
                        setTimeout(() => {
                            appContent.removeChild(mensajeError);
                        }, 3000);
                    }
                };
                reader.readAsText(archivo);
            }
        });
    }
    
    // Editar respuestas
    if (editarRespuestasBtn) {
        editarRespuestasBtn.addEventListener('click', function() {
            if (resultadoSection && formulario) {
                resultadoSection.style.display = 'none';
                formulario.style.display = 'block';
            }
        });
    }
    
    // Inicialización
    
    // Comprobar si hay una sesión activa al cargar la página
    if (localStorage.getItem('sesionActiva') === 'true') {
        if (loginSection && appContent) {
            loginSection.style.display = 'none';
            appContent.style.display = 'block';
            if (cerrarSesionBtn) {
                cerrarSesionBtn.style.display = 'block';
            }
        }
    }
    
    // Cargar datos guardados al iniciar
    cargarDatosGuardados();
});