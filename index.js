      
      
      
      
 // Función para cargar y desplegar los productos de RoadKing Motors (Kenworth)
async function loadProducts() {
    try {
        // Base de datos de productos en formato JSON
        const data = [
            {
                "title": "Kenworth T680",
                "description": "Camión de largo recorrido con motor PACCAR MX-13, transmisión automática y cabina aerodinámica. Ideal para viajes largos con eficiencia en combustible.",
                "image": "https://bit.ly/3O8nMbF",
                "cost": "145000.00 USD"
            },
            {
                "title": "Kenworth W990",
                "description": "Camión con un diseño clásico y robusto, motor PACCAR MX-13, suspensión avanzada y cabina cómoda para el conductor. Perfecto para quienes buscan potencia y estilo.",
                "image": "https://bit.ly/4929C5j",
                "cost": "160000.00 USD"
            },
            {
                "title": "Kenworth T880",
                "description": "Camión de vocación pesada con opciones de motor PACCAR MX-11 o MX-13, ideal para aplicaciones en construcción y minería. Alta capacidad de carga y durabilidad.",
                "image": "https://bit.ly/3UPWpqK",
                "cost": "135000.00 USD"
            },
            {
                "title": "Kenworth K270E",
                "description": "Camión eléctrico de clase 6, ideal para entregas urbanas y de corta distancia. Tecnología de propulsión eléctrica y batería de alta autonomía.",
                "image": "https://bit.ly/4ewMxJ8",
                "cost": "90000.00 USD"
            },
            {
                "title": "Kenworth T800",
                "description": "Camión versátil y confiable para aplicaciones en terrenos difíciles, equipado con motor PACCAR MX-13 y opciones de suspensión ajustable. Perfecto para trabajos en condiciones extremas.",
                "image": "https://bit.ly/3Z4cuLG",
                "cost": "120000.00 USD"
            },
            {
                "title": "Kenworth T370",
                "description": "Camión de servicio mediano con motor PACCAR PX-7, cabina cómoda y excelente maniobrabilidad. Ideal para entregas urbanas y trabajos ligeros de carga.",
                "image": "https://bit.ly/4eszskk",
                "cost": "95000.00 USD"
            },
            {
                "title": "Kenworth T660",
                "description": "Camión de largo recorrido con motor PACCAR MX-13 y cabina aerodinámica. Diseñado para ofrecer comodidad al conductor y eficiencia en el consumo de combustible en viajes largos.",
                "image": "https://bit.ly/3CvSJDZ",
                "cost": "140000.00 USD"
            },
            {
                "title": "Kenworth K370",
                "description": "Camión mediano de clase 7 con motor PACCAR PX-9. Ideal para entregas urbanas y de corta distancia, con gran maniobrabilidad y diseño eficiente para el trabajo en ciudad.",
                "image": "https://bit.ly/4hZCnUA",
                "cost": "105000.00 USD"
            },
            {
                "title": "Kenworth T2000",
                "description": "Camión de largo alcance con motor PACCAR MX-13 y diseño innovador. Su cabina espaciosa y aerodinámica lo hace perfecto para viajes largos y transporte de carga pesada.",
                "image": "https://bit.ly/3V2gDxp",
                "cost": "125000.00 USD"
            },
            {
                "title": "Kenworth T450",
                "description": "Camión de vocación media con motor PACCAR PX-7, diseñado para aplicaciones tanto urbanas como rurales. Ideal para transporte de carga ligera y maniobrabilidad en terrenos complejos.",
                "image": "https://bit.ly/4fEMGvM",
                "cost": "115000.00 USD"
            },
            {
                "title": "Kenworth T800W",
                "description": "Camión de trabajo pesado con motor PACCAR MX-13, suspensión mejorada y una cabina cómoda. Ideal para aplicaciones industriales y en terrenos difíciles.",
                "image": "https://bit.ly/3V1RtPg",
                "cost": "130000.00 USD"
            },
            {
                "title": "Kenworth T470",
                "description": "Camión robusto con motor PACCAR PX-9, diseñado para aplicaciones medianas. Perfecto para trabajos de carga en áreas urbanas y rurales con capacidad de maniobra.",
                "image": "https://bit.ly/40RweUg",
                "cost": "105000.0 USD"
            }
        ];

        // Obtener el contenedor donde se van a mostrar los productos
        const container = document.getElementById('productos');

        // Iterar sobre los productos y crear las tarjetas de cada uno
        data.forEach(product => {
            // Creación de la estructura de la tarjeta
            const productCard = document.createElement('div');
            productCard.classList.add('col-md-6', 'col-lg-4', 'd-flex', 'justify-content-center', 'mb-4');

            productCard.innerHTML = `
                <div class="card text-center shadow-sm">
                    <img src="${product.image}" class="card-img-top product-image" alt="${product.title}">
                    <div class="card-body">
                        <h5 class="card-title" style="font-family: 'Montserrat', sans-serif; color: #003B5C;">${product.title}</h5>
                        <p class="card-text">${product.description}</p>
                        <p class="card-text" style="font-weight: bold; color: #003B5C;">Precio: $${parseFloat(product.cost.replace(' USD', '').replace(',', '')).toLocaleString()}</p>
                        <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#purchaseModal" onclick="setProductDetails('${product.title}', ${parseFloat(product.cost.replace(' USD', '').replace(',', ''))})">Comprar</button>
                        <button class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#personalizationModal" onclick="setProductPersonalization('${product.title}')">Personalizar</button>
                    </div>
                </div>
            `;

            // Agregar la tarjeta al contenedor
            container.appendChild(productCard);
        });
    } catch (error) {
        console.error("Error al cargar los productos:", error);
    }
}

// Función para establecer los detalles del producto al hacer clic en "Comprar"
function setProductDetails(title, cost) {
    const productTitle = document.getElementById('purchaseModalLabel');
    const productCost = document.getElementById('productCost');
    
    // Actualizar el título y precio del producto en el formulario
    productTitle.innerHTML = `Formulario de Compra - ${title}`;
    productCost.innerHTML = `Precio: $${cost.toLocaleString()}`;
}

// Función para mostrar los detalles de la personalización y la notificación
function setProductPersonalization(title) {
    const personalizationTitle = document.getElementById('personalizationModalLabel');
    
    // Actualizar el título del modal de personalización
    personalizationTitle.innerHTML = `Personalización de ${title}`;

    // Mostrar notificación visual
    showCustomNotification(`${title} ha sido personalizado. ¡Gracias por tu elección!`);
}

// Función para mostrar una notificación personalizada en la pantalla
function showCustomNotification(message) {
    // Crear un contenedor para la notificación
    const notification = document.createElement('div');
    notification.classList.add('custom-notification');
    notification.innerHTML = `<p>${message}</p>`;

    // Estilo de la notificación (puedes personalizar este estilo)
    notification.style.position = 'fixed';
    notification.style.top = '20px';
    notification.style.right = '20px';
    notification.style.backgroundColor = '#28a745';
    notification.style.color = '#fff';
    notification.style.padding = '15px';
    notification.style.borderRadius = '5px';
    notification.style.zIndex = '1000';
    notification.style.fontSize = '16px';

    // Agregar la notificación al body
    document.body.appendChild(notification);

    // Eliminar la notificación después de 3 segundos
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Función para manejar el envío del formulario de compra
function handlePurchaseSubmit(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;

    if (name && address && age && email) {
        alert(`¡Compra realizada con éxito!\nNombre: ${name}\nDirección: ${address}\nEdad: ${age}\nCorreo electrónico: ${email}`);
        // Aquí podrías realizar la lógica de envío de datos al backend
    } else {
        alert("Por favor, completa todos los campos.");
    }
}

// Llamada a la función para cargar los productos cuando el contenido se haya cargado
document.addEventListener("DOMContentLoaded", loadProducts);

// Manejar el envío del formulario de compra
document.getElementById('purchaseForm').addEventListener('submit', handlePurchaseSubmit);

